import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// Note: avoid importing the API handler at top level to prevent
// evaluating server-only code during config load.

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  Object.assign(process.env, env);
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: "dev-api-middleware",
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            if (!req.url) return next();
            // Only intercept the contact endpoint during dev
            if (req.url.startsWith("/api/contact")) {
              const method = req.method || "GET";
              let raw = "";
              req.on("data", (chunk) => {
                raw += chunk;
              });
              req.on("end", async () => {
                let body: unknown = undefined;
                try {
                  body = raw ? JSON.parse(raw) : undefined;
                } catch {
                  body = undefined;
                }

                const reqLike: any = { method, body };
                const resLike: any = {
                  status(code: number) {
                    res.statusCode = code;
                    return {
                      json(payload: unknown) {
                        res.setHeader("Content-Type", "application/json");
                        res.end(JSON.stringify(payload));
                      },
                    };
                  },
                };

                try {
                  const mod = await import("./api/contact");
                  const handler =
                    (mod as any).default || (mod as any).handler || mod;
                  await handler(reqLike, resLike);
                } catch (e) {
                  res.statusCode = 500;
                  res.setHeader("Content-Type", "application/json");
                  res.end(JSON.stringify({ error: "Internal Server Error" }));
                }
              });
              return;
            }
            next();
          });
        },
      },
    ],
  };
});

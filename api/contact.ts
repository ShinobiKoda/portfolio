import { Resend } from "resend";
import { contactSchema } from "../src/schema/contactSchema";

const resend = new Resend(process.env.RESEND_API_KEY);

const COLORS = {
  background: "#282c33",
  primary: "#C778DD",
  gray: "#ABB2BF",
  white: "#ffffff",
  black: "#000000",
};

function baseEmailLayout(content: string, heading?: string) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${heading ?? "Message"}</title>
      <style>
        @media (max-width: 480px) {
          .card { padding: 16px !important; }
          .heading { font-size: 18px !important; }
        }
      </style>
    </head>
    <body style="margin:0; padding:24px; background:${
      COLORS.background
    }; color:${
    COLORS.gray
  }; font-family:'Fira Code', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;">
      <div style="max-width:640px; margin:0 auto;">
        <div class="card" style="background:${
          COLORS.background
        }; border:1px solid ${COLORS.gray}; border-top:3px solid ${
    COLORS.primary
  }; padding:24px;">
          ${
            heading
              ? `<h2 class="heading" style="margin:0 0 12px; color:${COLORS.primary}; font-weight:600;">${heading}</h2>`
              : ""
          }
          ${content}
        </div>
        <p style="text-align:center; color:${
          COLORS.gray
        }; font-size:12px; margin-top:12px; opacity:0.8;">
          Sent via ${process.env.SITE_NAME || "Portfolio"}
        </p>
      </div>
    </body>
  </html>`;
}

function adminEmailTemplate({
  name,
  email,
  title,
  message,
}: {
  name: string;
  email: string;
  title: string;
  message: string;
}) {
  const content = `
    <p style="margin:0 0 8px;">You received a new message:</p>
    <div style="margin:12px 0; padding:12px; border:1px dashed ${COLORS.primary};">
      <p style="margin:0 0 6px;"><strong style="color:${COLORS.white};">From:</strong> <span style="color:${COLORS.gray};">${name} &lt;${email}&gt;</span></p>
      <p style="margin:0 0 6px;"><strong style="color:${COLORS.white};">Title:</strong> <span style="color:${COLORS.gray};">${title}</span></p>
      <p style="margin:8px 0 0;"><strong style="color:${COLORS.white};">Message:</strong></p>
      <pre style="white-space:pre-wrap; color:${COLORS.gray}; margin:6px 0 0;">${message}</pre>
    </div>
  `;
  return baseEmailLayout(content, "New Contact Message");
}

function userThankYouTemplate({ name }: { name: string }) {
  const site = process.env.SITE_NAME || "Portfolio";
  const content = `
    <p style="margin:0 0 12px;">Hi <span style="color:${COLORS.white};">${name}</span>,</p>
    <p style="margin:0 0 12px;">Thanks for reaching out! Your message has been received and I'll get back to you shortly.</p>
    <div style="margin:16px 0; padding:12px; border-left:3px solid ${COLORS.primary}; background:rgba(199,120,221,0.06);">
      <p style="margin:0; color:${COLORS.gray};">In the meantime, feel free to reply to this email if you want to add anything.</p>
    </div>
    <p style="margin:16px 0 0;">— ${site}</p>
  `;
  return baseEmailLayout(content, `Thanks for contacting ${site}`);
}

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const parsed = contactSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ errors: parsed.error.flatten() });
  }

  const { name, email, title, message } = parsed.data;

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ error: "Missing RESEND_API_KEY" });
  }

  const FROM_EMAIL =
    process.env.CONTACT_FROM_EMAIL || "contact@yourdomain.tech";
  const FROM_NAME =
    process.env.CONTACT_FROM_NAME || process.env.SITE_NAME || "Portfolio";
  const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "you@yourdomain.tech";

  try {
    // Notify you
    await resend.emails.send({
      from: `${FROM_NAME} <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `[${
        process.env.SITE_NAME || "Portfolio"
      }] ${title} — from ${name}`,
      html: adminEmailTemplate({ name, email, title, message }),
    });

    // Thank the sender
    await resend.emails.send({
      from: `${FROM_NAME} <${FROM_EMAIL}>`,
      to: [email],
      subject: `Thanks for contacting ${process.env.SITE_NAME || "me"} 🙌`,
      html: userThankYouTemplate({ name }),
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Resend error:", err);
    return res.status(500).json({ error: "Email failed to send" });
  }
}

import type { ISourceOptions } from "@tsparticles/engine";
import holidayConfig from "./particlesjs-config.json";
import regularConfig from "./particlesjs-config-1.json";

const isHolidaySeason = () => {
  const now = new Date();
  return now.getMonth() === 11; // December
};

const selectedBase = isHolidaySeason() ? holidayConfig : regularConfig;

function normalizeConfig(raw: unknown): ISourceOptions {
  const base: any = JSON.parse(JSON.stringify(raw ?? {}));

  // Top-level mappings
  if (base && typeof base === "object") {
    if ("retina_detect" in base) {
      base.detectRetina = Boolean(base["retina_detect"]);
      delete base["retina_detect"];
    }
  }

  // Interactivity mappings
  if (base.interactivity) {
    const inter = base.interactivity;
    if ("detect_on" in inter) {
      inter.detectsOn = inter["detect_on"]; // canvas, window, parent
      delete inter["detect_on"];
    }
    if (inter.events) {
      const ev = inter.events;
      // Some legacy configs use object for resize
      if (ev.resize && typeof ev.resize === "object") {
        ev.resize = Boolean(ev.resize.enable);
      }
    }
    if (inter.modes && inter.modes.grab) {
      const grab = inter.modes.grab;
      if (grab["line_linked"]) {
        grab.links = grab["line_linked"];
        delete grab["line_linked"];
      }
    }
  }

  // Particles mappings
  if (base.particles) {
    const p = base.particles;
    if (p["line_linked"]) {
      p.links = p["line_linked"]; // enable, distance, color, opacity, width
      delete p["line_linked"];
    }
    if (p.move) {
      const mv = p.move;
      if ("out_mode" in mv) {
        const mode = mv["out_mode"];
        // tsParticles v3 expects outModes; string or object is accepted
        mv.outModes = typeof mode === "string" ? { default: mode } : mode;
        delete mv["out_mode"];
      }
    }
    if (p.opacity && typeof p.opacity === "object") {
      const op = p.opacity;
      if (op.random && typeof op.random === "object") {
        if ("minimumvalue" in op.random) {
          op.random.minimumValue = op.random["minimumvalue"]; // fix typo case
          delete op.random["minimumvalue"];
        }
      }
    }
    if (p.size && typeof p.size === "object") {
      const sz = p.size;
      if (sz.random && typeof sz.random === "object") {
        if ("minimumvalue" in sz.random) {
          sz.random.minimumValue = sz.random["minimumvalue"]; // fix typo case
          delete sz.random["minimumvalue"];
        }
      }
    }
  }

  const normalized: ISourceOptions = {
    ...(base as ISourceOptions),
    fullScreen: { enable: true, zIndex: -1 },
  };

  return normalized;
}

const config: ISourceOptions = normalizeConfig(selectedBase);

export default config;

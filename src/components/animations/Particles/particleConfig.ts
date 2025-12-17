import type { ISourceOptions } from "@tsparticles/engine";
import baseConfig from "./particlesjs-config.json";

const config: ISourceOptions = {
  ...(baseConfig as unknown as ISourceOptions),
  fullScreen: { enable: true, zIndex: -1 },
};

export default config;

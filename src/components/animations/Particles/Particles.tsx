import { useEffect, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadAll } from "@tsparticles/all";
import particlesConfig from "./particleConfig";

export default function ParticlesAnimation() {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadAll(engine);
    });
  }, []);

  const options = useMemo(() => particlesConfig, []);

  return <Particles id="tsparticles" options={options} />;
}

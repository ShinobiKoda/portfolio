import { useEffect, useRef } from "react";

interface AnimatedShapesProps {
  variant?: "hero" | "about" | "skills";
}

const AnimatedShapes = ({ variant = "hero" }: AnimatedShapesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    // Colors
    const primary = "#c778dd";
    const gray = "#abb2bf";
    const dimPrimary = "rgba(199, 120, 221, 0.25)";
    const dimGray = "rgba(171, 178, 191, 0.18)";

    // Shape definitions — each has a fixed position (as % of canvas),
    // a specific type, and a specific animation pattern
    interface Shape {
      type: "square" | "circle" | "cross" | "diamond" | "dots" | "ring";
      // Position as percentage of canvas dimensions
      xPct: number;
      yPct: number;
      size: number;
      color: string;
      opacity: number;
      lineWidth: number;
      // Animation type
      animation: "hover" | "glideX" | "glideY" | "spin" | "pulse" | "drift";
      // Animation params
      speed: number; // how fast: lower = slower
      amplitude: number; // how far it moves in px
      phase: number; // offset so shapes don't sync
    }

    const getShapes = (): Shape[] => {
      if (variant === "hero") {
        return [
          // Large square — gentle hover (bob up and down)
          {
            type: "square",
            xPct: 0.18,
            yPct: 0.2,
            size: 64,
            color: primary,
            opacity: 0.5,
            lineWidth: 2,
            animation: "hover",
            speed: 0.008,
            amplitude: 12,
            phase: 0,
          },
          // Small circle — glide left to right
          {
            type: "circle",
            xPct: 0.75,
            yPct: 0.15,
            size: 32,
            color: gray,
            opacity: 0.35,
            lineWidth: 1.5,
            animation: "glideX",
            speed: 0.006,
            amplitude: 30,
            phase: 1,
          },
          // Diamond — gentle hover
          {
            type: "diamond",
            xPct: 0.6,
            yPct: 0.55,
            size: 48,
            color: dimPrimary,
            opacity: 0.4,
            lineWidth: 1.5,
            animation: "hover",
            speed: 0.01,
            amplitude: 10,
            phase: 2,
          },
          // Cross — slow drift diagonally
          {
            type: "cross",
            xPct: 0.35,
            yPct: 0.7,
            size: 28,
            color: gray,
            opacity: 0.3,
            lineWidth: 1.5,
            animation: "drift",
            speed: 0.005,
            amplitude: 18,
            phase: 0.5,
          },
          // Ring — glide vertically
          {
            type: "ring",
            xPct: 0.85,
            yPct: 0.65,
            size: 40,
            color: dimGray,
            opacity: 0.3,
            lineWidth: 1,
            animation: "glideY",
            speed: 0.007,
            amplitude: 20,
            phase: 3,
          },
          // Dots grid — gentle spin
          {
            type: "dots",
            xPct: 0.12,
            yPct: 0.55,
            size: 36,
            color: dimPrimary,
            opacity: 0.3,
            lineWidth: 1,
            animation: "spin",
            speed: 0.003,
            amplitude: 0,
            phase: 0,
          },
          // Medium square — slow glide horizontal
          {
            type: "square",
            xPct: 0.5,
            yPct: 0.12,
            size: 36,
            color: dimGray,
            opacity: 0.22,
            lineWidth: 1.5,
            animation: "glideX",
            speed: 0.004,
            amplitude: 24,
            phase: 1.5,
          },
          // Circle — hover with different phase
          {
            type: "circle",
            xPct: 0.4,
            yPct: 0.4,
            size: 52,
            color: primary,
            opacity: 0.18,
            lineWidth: 1.5,
            animation: "hover",
            speed: 0.006,
            amplitude: 8,
            phase: 4,
          },
        ];
      }

      if (variant === "about") {
        return [
          {
            type: "square",
            xPct: 0.2,
            yPct: 0.15,
            size: 56,
            color: primary,
            opacity: 0.45,
            lineWidth: 2,
            animation: "hover",
            speed: 0.009,
            amplitude: 10,
            phase: 0,
          },
          {
            type: "circle",
            xPct: 0.7,
            yPct: 0.25,
            size: 40,
            color: gray,
            opacity: 0.3,
            lineWidth: 1.5,
            animation: "glideX",
            speed: 0.005,
            amplitude: 25,
            phase: 1,
          },
          {
            type: "diamond",
            xPct: 0.45,
            yPct: 0.5,
            size: 44,
            color: dimPrimary,
            opacity: 0.35,
            lineWidth: 1.5,
            animation: "drift",
            speed: 0.006,
            amplitude: 15,
            phase: 2,
          },
          {
            type: "cross",
            xPct: 0.8,
            yPct: 0.7,
            size: 26,
            color: gray,
            opacity: 0.25,
            lineWidth: 1.5,
            animation: "hover",
            speed: 0.008,
            amplitude: 8,
            phase: 3,
          },
          {
            type: "ring",
            xPct: 0.3,
            yPct: 0.75,
            size: 36,
            color: dimGray,
            opacity: 0.28,
            lineWidth: 1,
            animation: "glideY",
            speed: 0.007,
            amplitude: 18,
            phase: 0.5,
          },
          {
            type: "dots",
            xPct: 0.6,
            yPct: 0.85,
            size: 30,
            color: dimPrimary,
            opacity: 0.22,
            lineWidth: 1,
            animation: "spin",
            speed: 0.003,
            amplitude: 0,
            phase: 1,
          },
        ];
      }

      // skills variant
      return [
        {
          type: "square",
          xPct: 0.25,
          yPct: 0.2,
          size: 48,
          color: primary,
          opacity: 0.4,
          lineWidth: 2,
          animation: "hover",
          speed: 0.009,
          amplitude: 10,
          phase: 0,
        },
        {
          type: "circle",
          xPct: 0.7,
          yPct: 0.35,
          size: 36,
          color: gray,
          opacity: 0.3,
          lineWidth: 1.5,
          animation: "glideX",
          speed: 0.005,
          amplitude: 22,
          phase: 1,
        },
        {
          type: "diamond",
          xPct: 0.4,
          yPct: 0.65,
          size: 40,
          color: dimPrimary,
          opacity: 0.3,
          lineWidth: 1.5,
          animation: "drift",
          speed: 0.006,
          amplitude: 14,
          phase: 2,
        },
        {
          type: "cross",
          xPct: 0.75,
          yPct: 0.75,
          size: 24,
          color: gray,
          opacity: 0.25,
          lineWidth: 1.5,
          animation: "hover",
          speed: 0.008,
          amplitude: 8,
          phase: 3,
        },
      ];
    };

    const shapes = getShapes();

    let time = 0;

    const drawShape = (
      shape: Shape,
      w: number,
      h: number,
      t: number
    ) => {
      // Compute base position
      const baseX = shape.xPct * w;
      const baseY = shape.yPct * h;

      // Compute animation offset
      let offsetX = 0;
      let offsetY = 0;
      let rotation = 0;

      const phase = t * shape.speed + shape.phase;

      switch (shape.animation) {
        case "hover":
          // Gentle bob up and down
          offsetY = Math.sin(phase) * shape.amplitude;
          break;
        case "glideX":
          // Smooth side-to-side
          offsetX = Math.sin(phase) * shape.amplitude;
          break;
        case "glideY":
          // Smooth up and down
          offsetY = Math.sin(phase) * shape.amplitude;
          break;
        case "spin":
          // Slow rotation in place with tiny bob
          rotation = phase * 0.5;
          offsetY = Math.sin(phase * 0.8) * 4;
          break;
        case "drift":
          // Diagonal drift — both X and Y
          offsetX = Math.sin(phase) * shape.amplitude * 0.7;
          offsetY = Math.cos(phase) * shape.amplitude * 0.5;
          break;
        case "pulse":
          // Stays in place, just breathes opacity
          break;
      }

      ctx.save();
      ctx.translate(baseX + offsetX, baseY + offsetY);
      ctx.rotate(rotation);
      ctx.globalAlpha = shape.opacity;

      const s = shape.size;

      switch (shape.type) {
        case "square":
          ctx.strokeStyle = shape.color;
          ctx.lineWidth = shape.lineWidth;
          ctx.strokeRect(-s / 2, -s / 2, s, s);
          break;

        case "circle":
          ctx.strokeStyle = shape.color;
          ctx.lineWidth = shape.lineWidth;
          ctx.beginPath();
          ctx.arc(0, 0, s / 2, 0, Math.PI * 2);
          ctx.stroke();
          break;

        case "cross":
          ctx.strokeStyle = shape.color;
          ctx.lineWidth = shape.lineWidth;
          ctx.beginPath();
          ctx.moveTo(-s / 2, 0);
          ctx.lineTo(s / 2, 0);
          ctx.moveTo(0, -s / 2);
          ctx.lineTo(0, s / 2);
          ctx.stroke();
          break;

        case "diamond":
          ctx.strokeStyle = shape.color;
          ctx.lineWidth = shape.lineWidth;
          ctx.beginPath();
          ctx.moveTo(0, -s / 2);
          ctx.lineTo(s / 2, 0);
          ctx.lineTo(0, s / 2);
          ctx.lineTo(-s / 2, 0);
          ctx.closePath();
          ctx.stroke();
          break;

        case "dots": {
          ctx.fillStyle = shape.color;
          const gap = s / 3;
          for (let dx = -1; dx <= 1; dx++) {
            for (let dy = -1; dy <= 1; dy++) {
              ctx.beginPath();
              ctx.arc(dx * gap, dy * gap, 2.5, 0, Math.PI * 2);
              ctx.fill();
            }
          }
          break;
        }

        case "ring":
          ctx.strokeStyle = shape.color;
          ctx.lineWidth = shape.lineWidth;
          ctx.beginPath();
          ctx.arc(0, 0, s / 2, 0, Math.PI * 2);
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(0, 0, s / 3.5, 0, Math.PI * 2);
          ctx.stroke();
          break;
      }

      ctx.restore();
    };

    const animate = () => {
      time++;
      const r = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, r.width, r.height);

      for (const shape of shapes) {
        drawShape(shape, r.width, r.height, time);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [variant]);

  const sizeClasses =
    variant === "hero"
      ? "w-full aspect-square max-w-[469px]"
      : variant === "about"
        ? "w-full aspect-[4/5] max-w-[343px]"
        : "w-[349px] h-[282px]";

  return (
    <canvas
      ref={canvasRef}
      className={`${sizeClasses} block`}
      aria-hidden="true"
    />
  );
};

export default AnimatedShapes;

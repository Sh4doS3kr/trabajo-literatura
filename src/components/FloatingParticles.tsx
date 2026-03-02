import { useEffect, useRef, useMemo } from "react";

const FloatingParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const symbols = useMemo(() => ["✦", "◆", "✧", "❖", "⟡", "✶"], []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: {
      x: number;
      y: number;
      size: number;
      speed: number;
      opacity: number;
      symbol: string;
      drift: number;
      phase: number;
    }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };

    const init = () => {
      resize();
      particles = Array.from({ length: 25 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 8 + Math.random() * 12,
        speed: 0.15 + Math.random() * 0.3,
        opacity: 0.04 + Math.random() * 0.08,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        drift: (Math.random() - 0.5) * 0.3,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const style = getComputedStyle(document.documentElement);
      const fg = style.getPropertyValue("--foreground").trim();

      particles.forEach((p) => {
        p.y -= p.speed;
        p.x += Math.sin(p.phase + p.y * 0.005) * p.drift;
        p.phase += 0.002;

        if (p.y < -20) {
          p.y = canvas.height + 20;
          p.x = Math.random() * canvas.width;
        }

        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.font = `${p.size}px serif`;
        ctx.fillStyle = `hsl(${fg})`;
        ctx.fillText(p.symbol, p.x, p.y);
        ctx.restore();
      });

      animationId = requestAnimationFrame(animate);
    };

    init();
    animate();

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [symbols]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default FloatingParticles;

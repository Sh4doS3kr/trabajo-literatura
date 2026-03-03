import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const QuillSVG = ({ progress }: { progress: number }) => (
  <svg viewBox="0 0 80 80" className="w-full h-full" fill="none">
    <motion.path
      d="M60 10 C55 25, 45 40, 20 65 L18 67 C17 68, 16 68, 15 67 L14 65 C13 63, 14 61, 16 60 L40 38 C50 28, 55 18, 60 10Z"
      stroke="hsl(var(--accent))"
      strokeWidth="1.5"
      fill="hsl(var(--accent) / 0.1)"
      strokeDasharray="200"
      strokeDashoffset={200 - progress * 200}
    />
    <motion.path
      d="M18 67 L12 75 L15 67"
      stroke="hsl(var(--accent))"
      strokeWidth="1.2"
      strokeDasharray="30"
      strokeDashoffset={30 - Math.max(0, (progress - 0.7) * 3.3) * 30}
    />
  </svg>
);

const BookSVG = ({ progress }: { progress: number }) => (
  <svg viewBox="0 0 80 80" className="w-full h-full" fill="none">
    <motion.path
      d="M40 15 L40 65"
      stroke="hsl(var(--accent))"
      strokeWidth="1.5"
      strokeDasharray="50"
      strokeDashoffset={50 - progress * 50}
    />
    <motion.path
      d="M40 15 C35 13, 20 12, 12 15 L12 62 C20 59, 35 60, 40 65"
      stroke="hsl(var(--accent))"
      strokeWidth="1.5"
      fill="hsl(var(--accent) / 0.05)"
      strokeDasharray="160"
      strokeDashoffset={160 - progress * 160}
    />
    <motion.path
      d="M40 15 C45 13, 60 12, 68 15 L68 62 C60 59, 45 60, 40 65"
      stroke="hsl(var(--accent))"
      strokeWidth="1.5"
      fill="hsl(var(--accent) / 0.05)"
      strokeDasharray="160"
      strokeDashoffset={160 - progress * 160}
    />
    {/* Page lines */}
    {[22, 30, 38, 46].map((y, i) => (
      <motion.line
        key={i}
        x1="18" y1={y} x2="35" y2={y}
        stroke="hsl(var(--accent) / 0.3)"
        strokeWidth="0.8"
        strokeDasharray="20"
        strokeDashoffset={20 - Math.max(0, (progress - 0.5 - i * 0.05) * 4) * 20}
      />
    ))}
  </svg>
);

const ScrollSVG = ({ progress }: { progress: number }) => (
  <svg viewBox="0 0 80 80" className="w-full h-full" fill="none">
    <motion.path
      d="M20 18 C20 12, 25 10, 30 10 L55 10 C60 10, 62 14, 62 18"
      stroke="hsl(var(--accent))"
      strokeWidth="1.5"
      strokeDasharray="80"
      strokeDashoffset={80 - progress * 80}
    />
    <motion.rect
      x="18" y="18" width="44" height="44" rx="3"
      stroke="hsl(var(--accent))"
      strokeWidth="1.5"
      fill="hsl(var(--accent) / 0.05)"
      strokeDasharray="180"
      strokeDashoffset={180 - progress * 180}
    />
    <motion.path
      d="M20 62 C20 68, 25 70, 30 70 L55 70 C60 70, 62 66, 62 62"
      stroke="hsl(var(--accent))"
      strokeWidth="1.5"
      strokeDasharray="80"
      strokeDashoffset={80 - progress * 80}
    />
    {/* Text lines */}
    {[28, 36, 44, 52].map((y, i) => (
      <motion.line
        key={i}
        x1="26" y1={y} x2="54" y2={y}
        stroke="hsl(var(--accent) / 0.3)"
        strokeWidth="0.8"
        strokeDasharray="30"
        strokeDashoffset={30 - Math.max(0, (progress - 0.4 - i * 0.08) * 5) * 30}
      />
    ))}
  </svg>
);

const MaskSVG = ({ progress }: { progress: number }) => (
  <svg viewBox="0 0 80 80" className="w-full h-full" fill="none">
    <motion.circle
      cx="40" cy="35" r="20"
      stroke="hsl(var(--accent))"
      strokeWidth="1.5"
      fill="hsl(var(--accent) / 0.05)"
      strokeDasharray="126"
      strokeDashoffset={126 - progress * 126}
    />
    <motion.circle cx="32" cy="30" r="4"
      stroke="hsl(var(--accent))" strokeWidth="1.2"
      strokeDasharray="25" strokeDashoffset={25 - Math.max(0, (progress - 0.3) * 1.4) * 25}
    />
    <motion.circle cx="48" cy="30" r="4"
      stroke="hsl(var(--accent))" strokeWidth="1.2"
      strokeDasharray="25" strokeDashoffset={25 - Math.max(0, (progress - 0.3) * 1.4) * 25}
    />
    <motion.path
      d="M32 42 C36 46, 44 46, 48 42"
      stroke="hsl(var(--accent))" strokeWidth="1.2"
      strokeDasharray="25" strokeDashoffset={25 - Math.max(0, (progress - 0.5) * 2) * 25}
    />
    <motion.path
      d="M20 35 L10 30 M60 35 L70 30"
      stroke="hsl(var(--accent))" strokeWidth="1"
      strokeDasharray="20" strokeDashoffset={20 - Math.max(0, (progress - 0.6) * 2.5) * 20}
    />
    {/* Stick */}
    <motion.line x1="58" y1="45" x2="70" y2="68"
      stroke="hsl(var(--accent))" strokeWidth="1.5"
      strokeDasharray="30" strokeDashoffset={30 - Math.max(0, (progress - 0.7) * 3.3) * 30}
    />
  </svg>
);

const LyreSVG = ({ progress }: { progress: number }) => (
  <svg viewBox="0 0 80 80" className="w-full h-full" fill="none">
    <motion.path
      d="M30 55 C25 40, 20 25, 30 15 C35 10, 45 10, 50 15 C60 25, 55 40, 50 55"
      stroke="hsl(var(--accent))" strokeWidth="1.5"
      fill="hsl(var(--accent) / 0.05)"
      strokeDasharray="150" strokeDashoffset={150 - progress * 150}
    />
    <motion.line x1="30" y1="55" x2="50" y2="55"
      stroke="hsl(var(--accent))" strokeWidth="1.5"
      strokeDasharray="20" strokeDashoffset={20 - Math.max(0, (progress - 0.4) * 1.6) * 20}
    />
    {/* Strings */}
    {[35, 40, 45].map((x, i) => (
      <motion.line key={i} x1={x} y1="22" x2={x} y2="55"
        stroke="hsl(var(--accent) / 0.4)" strokeWidth="0.8"
        strokeDasharray="35" strokeDashoffset={35 - Math.max(0, (progress - 0.5 - i * 0.1) * 5) * 35}
      />
    ))}
  </svg>
);

const CrossSVG = ({ progress }: { progress: number }) => (
  <svg viewBox="0 0 80 80" className="w-full h-full" fill="none">
    <motion.rect x="35" y="10" width="10" height="55" rx="2"
      stroke="hsl(var(--accent))" strokeWidth="1.5" fill="hsl(var(--accent) / 0.05)"
      strokeDasharray="130" strokeDashoffset={130 - progress * 130}
    />
    <motion.rect x="20" y="22" width="40" height="10" rx="2"
      stroke="hsl(var(--accent))" strokeWidth="1.5" fill="hsl(var(--accent) / 0.05)"
      strokeDasharray="100" strokeDashoffset={100 - Math.max(0, (progress - 0.3) * 1.4) * 100}
    />
    {/* Rays */}
    {[
      [40, 8, 40, 2], [25, 18, 20, 13], [55, 18, 60, 13],
    ].map(([x1, y1, x2, y2], i) => (
      <motion.line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
        stroke="hsl(var(--accent) / 0.3)" strokeWidth="1"
        strokeDasharray="10" strokeDashoffset={10 - Math.max(0, (progress - 0.6) * 2.5) * 10}
      />
    ))}
  </svg>
);

const CastleSVG = ({ progress }: { progress: number }) => (
  <svg viewBox="0 0 80 80" className="w-full h-full" fill="none">
    {/* Main wall */}
    <motion.rect x="15" y="35" width="50" height="35" rx="1"
      stroke="hsl(var(--accent))" strokeWidth="1.5" fill="hsl(var(--accent) / 0.05)"
      strokeDasharray="170" strokeDashoffset={170 - progress * 170}
    />
    {/* Towers */}
    <motion.rect x="12" y="20" width="14" height="50" rx="1"
      stroke="hsl(var(--accent))" strokeWidth="1.2"
      strokeDasharray="130" strokeDashoffset={130 - Math.max(0, (progress - 0.2) * 1.25) * 130}
    />
    <motion.rect x="54" y="20" width="14" height="50" rx="1"
      stroke="hsl(var(--accent))" strokeWidth="1.2"
      strokeDasharray="130" strokeDashoffset={130 - Math.max(0, (progress - 0.2) * 1.25) * 130}
    />
    {/* Battlements */}
    {[12, 19, 54, 61].map((x, i) => (
      <motion.rect key={i} x={x} y="15" width="5" height="8"
        stroke="hsl(var(--accent))" strokeWidth="1"
        strokeDasharray="26" strokeDashoffset={26 - Math.max(0, (progress - 0.5) * 2) * 26}
      />
    ))}
    {/* Gate */}
    <motion.path d="M34 70 L34 52 C34 46, 46 46, 46 52 L46 70"
      stroke="hsl(var(--accent))" strokeWidth="1.2"
      strokeDasharray="60" strokeDashoffset={60 - Math.max(0, (progress - 0.4) * 1.6) * 60}
    />
  </svg>
);

const SunSVG = ({ progress }: { progress: number }) => (
  <svg viewBox="0 0 80 80" className="w-full h-full" fill="none">
    <motion.circle cx="40" cy="40" r="14"
      stroke="hsl(var(--accent))" strokeWidth="1.5" fill="hsl(var(--accent) / 0.08)"
      strokeDasharray="88" strokeDashoffset={88 - progress * 88}
    />
    {Array.from({ length: 12 }).map((_, i) => {
      const angle = (i * 30 * Math.PI) / 180;
      const x1 = 40 + Math.cos(angle) * 18;
      const y1 = 40 + Math.sin(angle) * 18;
      const x2 = 40 + Math.cos(angle) * 26;
      const y2 = 40 + Math.sin(angle) * 26;
      return (
        <motion.line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="hsl(var(--accent) / 0.4)" strokeWidth="1.2"
          strokeDasharray="10"
          strokeDashoffset={10 - Math.max(0, (progress - 0.4 - i * 0.02) * 2.5) * 10}
        />
      );
    })}
  </svg>
);

// Map each period to an SVG
const svgMap: Record<number, React.FC<{ progress: number }>> = {
  0: CastleSVG,    // Medieval
  1: CrossSVG,     // Siglo XV
  2: SunSVG,       // Renacimiento
  3: QuillSVG,     // Cervantes
  4: BookSVG,      // Poesía barroca
  5: MaskSVG,      // Teatro barroco
  6: ScrollSVG,    // Siglo XVIII
  7: LyreSVG,      // Romanticismo
};

interface SVGRevealProps {
  index: number;
  title: string;
  period: string;
}

const SVGReveal = ({ index, title, period }: SVGRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      // Map scroll progress: element enters at 0, fully visible ~0.3-0.5
      const mapped = Math.min(1, Math.max(0, (v - 0.1) * 2.5));
      setProgress(mapped);
    });
  }, [scrollYProgress]);

  const opacity = useTransform(scrollYProgress, [0.05, 0.25], [0, 1]);
  const y = useTransform(scrollYProgress, [0.05, 0.3], [40, 0]);
  const scale = useTransform(scrollYProgress, [0.05, 0.3], [0.8, 1]);

  const SVGComponent = svgMap[index] || QuillSVG;

  return (
    <div ref={ref} className="relative py-12 md:py-20 flex items-center justify-center overflow-hidden">
      <motion.div
        className="flex flex-col items-center gap-4 relative z-10"
        style={{ opacity, y, scale }}
      >
        {/* SVG icon drawing itself */}
        <div className="w-16 h-16 md:w-20 md:h-20">
          <SVGComponent progress={progress} />
        </div>

        {/* Decorative line */}
        <motion.div
          className="h-px bg-accent/40"
          style={{ width: useTransform(scrollYProgress, [0.15, 0.35], [0, 80]) }}
        />

        {/* Period label */}
        <motion.span
          className="text-accent/60 text-[10px] md:text-xs tracking-[0.3em] uppercase font-body"
          style={{ opacity: useTransform(scrollYProgress, [0.2, 0.35], [0, 1]) }}
        >
          {period}
        </motion.span>

        {/* Title */}
        <motion.h2
          className="font-display text-xl md:text-2xl font-bold text-foreground text-center px-4"
          style={{ opacity: useTransform(scrollYProgress, [0.25, 0.4], [0, 1]) }}
        >
          {title}
        </motion.h2>

        {/* Bottom line */}
        <motion.div
          className="h-px bg-accent/40"
          style={{ width: useTransform(scrollYProgress, [0.3, 0.45], [0, 48]) }}
        />
      </motion.div>
    </div>
  );
};

export default SVGReveal;

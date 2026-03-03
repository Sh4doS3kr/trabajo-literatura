import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface ChapterRevealProps {
  number: string;
  title: string;
  period: string;
  index: number;
  isActive: boolean;
}

const ChapterReveal = ({ number, title, period, index, isActive }: ChapterRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [hasRevealed, setHasRevealed] = useState(false);

  useEffect(() => {
    if (!isActive) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRevealed) {
          setHasRevealed(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isActive, hasRevealed]);

  if (!isActive) return null;

  return (
    <div ref={ref} className="relative py-16 md:py-24 flex items-center justify-center overflow-hidden">
      <motion.div
        className="text-center relative z-10"
        initial={{ opacity: 0 }}
        animate={hasRevealed ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        {/* Big chapter number */}
        <motion.span
          className="font-display text-[8rem] md:text-[12rem] font-black text-accent/[0.07] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none"
          initial={{ scale: 3, opacity: 0 }}
          animate={hasRevealed ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {number}
        </motion.span>

        <motion.div
          initial={{ width: 0 }}
          animate={hasRevealed ? { width: "3rem" } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-px bg-accent mx-auto mb-4"
        />

        <motion.span
          className="text-accent text-xs tracking-[0.3em] uppercase font-body block mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={hasRevealed ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {period}
        </motion.span>

        <motion.h2
          className="font-display text-2xl md:text-4xl font-bold text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={hasRevealed ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {title}
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          animate={hasRevealed ? { width: "3rem" } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="h-px bg-accent mx-auto mt-4"
        />
      </motion.div>
    </div>
  );
};

export default ChapterReveal;

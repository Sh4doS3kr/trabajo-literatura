import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CinematicIntroProps {
  onComplete: () => void;
}

const chapters = [
  { number: "I", label: "La Edad Media", period: "s. X–XIV" },
  { number: "II", label: "El Siglo XV", period: "s. XV" },
  { number: "III", label: "El Renacimiento", period: "s. XVI" },
  { number: "IV", label: "Cervantes", period: "1547–1616" },
  { number: "V", label: "El Barroco", period: "s. XVII" },
  { number: "VI", label: "El Teatro Barroco", period: "s. XVII" },
  { number: "VII", label: "La Ilustración", period: "s. XVIII" },
  { number: "VIII", label: "El Romanticismo", period: "1ª mitad s. XIX" },
];

const CinematicIntro = ({ onComplete }: CinematicIntroProps) => {
  const [phase, setPhase] = useState<"black" | "title" | "chapters" | "exit">("black");
  const [visibleChapters, setVisibleChapters] = useState(0);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    timers.push(setTimeout(() => setPhase("title"), 600));
    timers.push(setTimeout(() => setPhase("chapters"), 3200));

    // Stagger chapter reveals
    chapters.forEach((_, i) => {
      timers.push(setTimeout(() => setVisibleChapters(i + 1), 3600 + i * 280));
    });

    // Exit
    timers.push(setTimeout(() => setPhase("exit"), 3600 + chapters.length * 280 + 1200));
    timers.push(setTimeout(() => onComplete(), 3600 + chapters.length * 280 + 2200));

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "exit" ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[hsl(var(--primary))] overflow-hidden"
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {/* Background texture */}
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--primary-foreground)) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }} />

          {/* Animated lines */}
          <motion.div
            className="absolute top-0 left-1/2 w-px bg-gradient-to-b from-transparent via-primary-foreground/20 to-transparent"
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
          />
          <motion.div
            className="absolute left-0 top-1/2 h-px bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, delay: 0.6, ease: "easeOut" }}
          />

          <div className="relative z-10 text-center px-6 max-w-2xl">
            <AnimatePresence mode="wait">
              {phase === "title" && (
                <motion.div
                  key="title"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.div
                    className="flex items-center justify-center gap-4 mb-6"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    <div className="h-px w-16 bg-primary-foreground/30" />
                    <span className="text-primary-foreground/50 text-xs tracking-[0.4em] uppercase font-body">
                      Trabajo de Literatura
                    </span>
                    <div className="h-px w-16 bg-primary-foreground/30" />
                  </motion.div>

                  <motion.h1
                    className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-[0.9] tracking-tight"
                    initial={{ opacity: 0, y: 40, letterSpacing: "0.1em" }}
                    animate={{ opacity: 1, y: 0, letterSpacing: "-0.02em" }}
                    transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
                  >
                    Timeline
                    <br />
                    <span className="italic font-light opacity-80">Literario</span>
                  </motion.h1>

                  <motion.p
                    className="text-primary-foreground/50 text-sm md:text-base font-body mt-6 max-w-md mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    Ocho siglos de letras españolas en un recorrido visual
                  </motion.p>
                </motion.div>
              )}

              {phase === "chapters" && (
                <motion.div
                  key="chapters"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-full"
                >
                  <motion.p
                    className="text-primary-foreground/40 text-xs tracking-[0.3em] uppercase font-body mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    Contenido
                  </motion.p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                    {chapters.map((ch, i) => (
                      <motion.div
                        key={i}
                        className="text-left p-3 md:p-4 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur-sm"
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={i < visibleChapters ? {
                          opacity: 1, y: 0, scale: 1,
                        } : {}}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      >
                        <span className="text-primary-foreground/30 font-display text-[10px] md:text-xs font-bold">
                          {ch.number}
                        </span>
                        <p className="text-primary-foreground font-display text-xs md:text-sm font-bold mt-1 leading-tight">
                          {ch.label}
                        </p>
                        <p className="text-primary-foreground/40 text-[10px] md:text-xs font-body mt-1">
                          {ch.period}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Skip button */}
          <motion.button
            className="absolute bottom-8 right-8 text-primary-foreground/30 hover:text-primary-foreground/60 text-xs font-body tracking-wider uppercase transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            onClick={() => {
              setPhase("exit");
              setTimeout(onComplete, 1000);
            }}
          >
            Saltar →
          </motion.button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default CinematicIntro;

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CinematicIntroProps {
  onComplete: () => void;
}

const epochs = [
  "Edad Media", "Siglo XV", "Renacimiento", "Cervantes",
  "Barroco", "Teatro", "Ilustración", "Romanticismo",
];

const CinematicIntro = ({ onComplete }: CinematicIntroProps) => {
  const [phase, setPhase] = useState<"black" | "title" | "scroll" | "exit">("black");

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    timers.push(setTimeout(() => setPhase("title"), 400));
    timers.push(setTimeout(() => setPhase("scroll"), 2800));
    timers.push(setTimeout(() => setPhase("exit"), 5200));
    timers.push(setTimeout(() => onComplete(), 6200));
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "exit" ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[hsl(var(--primary))] overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {/* Animated SVG quill drawing a line */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
            <motion.path
              d="M0 300 C200 300, 300 200, 500 300 C700 400, 800 300, 1000 300"
              stroke="hsl(var(--primary-foreground) / 0.08)"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 4, ease: "easeInOut" }}
            />
            <motion.path
              d="M0 310 C250 310, 350 250, 500 310 C650 370, 750 310, 1000 310"
              stroke="hsl(var(--primary-foreground) / 0.05)"
              strokeWidth="0.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 4.5, ease: "easeInOut", delay: 0.3 }}
            />
          </svg>

          <div className="relative z-10 text-center px-6 max-w-xl">
            <AnimatePresence mode="wait">
              {phase === "title" && (
                <motion.div
                  key="title"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-5"
                >
                  <motion.div
                    className="flex items-center justify-center gap-4"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <div className="h-px w-12 bg-primary-foreground/20" />
                    <span className="text-primary-foreground/35 text-[10px] tracking-[0.5em] uppercase font-body">
                      Literatura española
                    </span>
                    <div className="h-px w-12 bg-primary-foreground/20" />
                  </motion.div>

                  <motion.h1
                    className="font-display text-3xl md:text-5xl font-bold text-primary-foreground leading-tight"
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  >
                    Timeline <span className="italic font-light opacity-75">Literario</span>
                  </motion.h1>

                  <motion.p
                    className="text-primary-foreground/35 text-xs md:text-sm font-body"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    Ocho siglos de letras en un recorrido visual
                  </motion.p>
                </motion.div>
              )}

              {phase === "scroll" && (
                <motion.div
                  key="scroll"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Epoch names flowing in */}
                  <div className="flex flex-wrap justify-center gap-x-4 gap-y-3">
                    {epochs.map((name, i) => (
                      <motion.span
                        key={i}
                        className="text-primary-foreground/70 font-display text-sm md:text-base font-medium px-3 py-1.5 rounded-lg border border-primary-foreground/10 bg-primary-foreground/5"
                        initial={{ opacity: 0, scale: 0.8, y: 15 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: i * 0.12, duration: 0.4, ease: "easeOut" }}
                      >
                        {name}
                      </motion.span>
                    ))}
                  </div>

                  <motion.p
                    className="text-primary-foreground/25 text-[10px] tracking-[0.3em] uppercase font-body mt-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                  >
                    Haz scroll para explorar
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Skip */}
          <motion.button
            className="absolute bottom-6 right-6 text-primary-foreground/20 hover:text-primary-foreground/50 text-[10px] font-body tracking-widest uppercase transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            onClick={() => { setPhase("exit"); setTimeout(onComplete, 1000); }}
          >
            Saltar →
          </motion.button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default CinematicIntro;

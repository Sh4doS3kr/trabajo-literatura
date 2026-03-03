import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import CinematicIntro from "@/components/CinematicIntro";
import Timeline from "@/components/Timeline";
import FloatingQuotes from "@/components/FloatingQuotes";
import FloatingParticles from "@/components/FloatingParticles";
import ScrollProgress from "@/components/ScrollProgress";
import { ChevronDown } from "lucide-react";

const Index = () => {
  const [introComplete, setIntroComplete] = useState(false);
  const [contentReady, setContentReady] = useState(false);

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true);
    setTimeout(() => setContentReady(true), 200);
  }, []);

  return (
    <div className="min-h-screen bg-background relative">
      {!introComplete && <CinematicIntro onComplete={handleIntroComplete} />}

      {introComplete && (
        <>
          <FloatingParticles />
          <ScrollProgress />

          {/* Hero — compact and elegant */}
          <header className="hero-gradient min-h-[70vh] flex flex-col items-center justify-center text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: `radial-gradient(circle, hsl(var(--primary-foreground)) 1px, transparent 1px)`,
              backgroundSize: "32px 32px",
            }} />

            <motion.div
              className="relative z-10 max-w-2xl mx-auto px-6"
              initial={{ opacity: 0, y: 30 }}
              animate={contentReady ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="flex items-center justify-center gap-3 mb-6"
                initial={{ scaleX: 0 }}
                animate={contentReady ? { scaleX: 1 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="h-px w-10 bg-primary-foreground/25" />
                <span className="text-primary-foreground/45 text-[10px] tracking-[0.4em] uppercase font-body">
                  Siglos X — XIX
                </span>
                <div className="h-px w-10 bg-primary-foreground/25" />
              </motion.div>

              <motion.h1
                className="font-display text-3xl md:text-5xl font-bold text-primary-foreground leading-tight tracking-tight mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={contentReady ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                Timeline <span className="italic font-light opacity-80">Literario</span>
              </motion.h1>

              <motion.p
                className="text-primary-foreground/45 text-sm md:text-base font-body max-w-sm mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                animate={contentReady ? { opacity: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Un recorrido por los grandes períodos de la literatura española
              </motion.p>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
              initial={{ opacity: 0 }}
              animate={contentReady ? { opacity: 1 } : {}}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <span className="text-primary-foreground/25 text-[10px] font-body tracking-[0.3em] uppercase">
                Scroll
              </span>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ChevronDown className="w-4 h-4 text-primary-foreground/25" />
              </motion.div>
            </motion.div>
          </header>

          {/* Timeline */}
          <div className="relative z-10">
            <Timeline isReady={contentReady} />
          </div>

          <FloatingQuotes />

          {/* Footer */}
          <footer className="relative z-10 text-center py-16 border-t border-border">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-8 h-px bg-border" />
                <span className="text-accent/30 text-sm">✦</span>
                <div className="w-8 h-px bg-border" />
              </div>
              <p className="text-muted-foreground/50 text-xs font-body">
                Timeline Literario — Trabajo de Literatura
              </p>
            </motion.div>
          </footer>
        </>
      )}
    </div>
  );
};

export default Index;

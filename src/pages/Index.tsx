import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import CinematicIntro from "@/components/CinematicIntro";
import Timeline from "@/components/Timeline";
import FloatingQuotes from "@/components/FloatingQuotes";
import FloatingParticles from "@/components/FloatingParticles";
import ScrollProgress from "@/components/ScrollProgress";
import { Scroll, ChevronDown } from "lucide-react";

const Index = () => {
  const [introComplete, setIntroComplete] = useState(false);
  const [contentReady, setContentReady] = useState(false);

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true);
    // Small delay to let exit animation finish before revealing content
    setTimeout(() => setContentReady(true), 200);
  }, []);

  return (
    <div className="min-h-screen bg-background relative">
      {/* Cinematic intro overlay */}
      {!introComplete && <CinematicIntro onComplete={handleIntroComplete} />}

      {/* Main content - renders but hidden until intro completes */}
      {introComplete && (
        <>
          <FloatingParticles />
          <ScrollProgress />

          {/* Hero */}
          <header className="hero-gradient min-h-[85vh] flex flex-col items-center justify-center text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: `radial-gradient(circle, hsl(var(--primary-foreground)) 1px, transparent 1px)`,
              backgroundSize: "32px 32px",
            }} />

            <motion.div
              className="relative z-10 max-w-3xl mx-auto px-6"
              initial={{ opacity: 0, y: 40 }}
              animate={contentReady ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="inline-flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-5 py-2.5 border border-primary-foreground/15 mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={contentReady ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <Scroll className="w-4 h-4 text-primary-foreground/70" />
                <span className="text-primary-foreground/70 text-xs tracking-widest uppercase font-body">
                  Siglos X — XIX
                </span>
              </motion.div>

              <motion.h1
                className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-[0.9] tracking-tight mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={contentReady ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                Timeline
                <br />
                <span className="italic font-light opacity-80">Literario</span>
              </motion.h1>

              <motion.p
                className="text-primary-foreground/50 text-base md:text-lg font-body max-w-md mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                animate={contentReady ? { opacity: 1 } : {}}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Un recorrido por los grandes períodos de la literatura española
              </motion.p>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
              initial={{ opacity: 0 }}
              animate={contentReady ? { opacity: 1 } : {}}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <span className="text-primary-foreground/30 text-xs font-body tracking-widest uppercase">
                Scroll
              </span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ChevronDown className="w-5 h-5 text-primary-foreground/30" />
              </motion.div>
            </motion.div>
          </header>

          {/* Timeline */}
          <div className="relative z-10">
            <Timeline isReady={contentReady} />
          </div>

          {/* Floating quotes widget */}
          <FloatingQuotes />

          {/* Footer */}
          <footer className="relative z-10 text-center py-20 border-t border-border">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-px bg-border" />
                <span className="text-accent/40 text-lg">✦</span>
                <div className="w-12 h-px bg-border" />
              </div>
              <p className="text-muted-foreground/60 text-sm font-body">
                Timeline Literario — Trabajo de Literatura
              </p>
              <p className="text-muted-foreground/30 text-xs font-body mt-1">
                Desde la Edad Media hasta el Romanticismo
              </p>
            </motion.div>
          </footer>
        </>
      )}
    </div>
  );
};

export default Index;

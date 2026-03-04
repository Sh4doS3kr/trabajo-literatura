import Timeline from "@/components/Timeline";
import FloatingQuotes from "@/components/FloatingQuotes";
import FloatingParticles from "@/components/FloatingParticles";
import ScrollProgress from "@/components/ScrollProgress";
import HorizontalScrollHero from "@/components/HorizontalScrollHero";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <FloatingParticles />
      <ScrollProgress />

      {/* Horizontal scroll hero intro */}
      <HorizontalScrollHero />

      {/* Transition section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="max-w-3xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-16 h-px bg-accent/40" />
              <span className="text-accent text-2xl">✦</span>
              <div className="w-16 h-px bg-accent/40" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Empieza el viaje
            </h2>
            <p className="text-muted-foreground text-lg font-body leading-relaxed">
              Haz click en cada tarjeta para desplegar los apuntes completos
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <div className="relative z-10">
        <Timeline />
      </div>

      {/* Floating quotes widget */}
      <FloatingQuotes />

      {/* Footer */}
      <footer className="relative z-10 text-center py-20 border-t border-border">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-border" />
            <span className="text-accent text-sm">✦</span>
            <div className="w-8 h-px bg-border" />
          </div>
          <p className="text-foreground font-display text-lg font-semibold mb-1">
            Hecho por Alejandro Gutiérrez
          </p>
          <p className="text-muted-foreground text-sm font-body">
            Timeline Literario — Trabajo de Literatura
          </p>
        </motion.div>
      </footer>
    </div>
  );
};

export default Index;

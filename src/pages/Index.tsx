import Timeline from "@/components/Timeline";
import FloatingQuotes from "@/components/FloatingQuotes";
import FloatingParticles from "@/components/FloatingParticles";
import ScrollProgress from "@/components/ScrollProgress";
import { BookOpen, Scroll } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <FloatingParticles />
      <ScrollProgress />

      {/* Hero header */}
      <header className="hero-gradient py-24 md:py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />

        <motion.div
          className="relative z-10 max-w-3xl mx-auto px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="flex justify-center mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          >
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-5 border border-primary-foreground/20">
              <Scroll className="w-10 h-10 text-primary-foreground" />
            </div>
          </motion.div>

          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-5 leading-tight">
            Timeline Literario
          </h1>
          <p className="text-primary-foreground/70 text-lg md:text-xl font-body max-w-xl mx-auto leading-relaxed">
            Un recorrido por los grandes períodos de la literatura española,
            desde la Edad Media hasta el Romanticismo
          </p>

          <motion.div
            className="mt-10 flex items-center justify-center gap-3 text-primary-foreground/50 text-sm font-body"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <BookOpen className="w-4 h-4" />
            <span>Haz click en cada tarjeta para ver los apuntes</span>
          </motion.div>

          {/* Decorative bottom ornament */}
          <div className="mt-10 flex items-center justify-center gap-3">
            <div className="w-12 h-px bg-primary-foreground/20" />
            <span className="text-primary-foreground/30 text-lg">✦</span>
            <div className="w-12 h-px bg-primary-foreground/20" />
          </div>
        </motion.div>
      </header>

      {/* Timeline */}
      <div className="relative z-10">
        <Timeline />
      </div>

      {/* Floating quotes widget */}
      <FloatingQuotes />

      {/* Footer */}
      <footer className="relative z-10 text-center py-16 border-t border-border">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="w-8 h-px bg-border" />
          <span className="text-muted-foreground/40 text-sm">✦</span>
          <div className="w-8 h-px bg-border" />
        </div>
        <p className="text-muted-foreground text-sm font-body">
          Timeline Literario — Trabajo de Literatura
        </p>
        <p className="text-muted-foreground/60 text-xs font-body mt-2">
          Hecho por Alejandro Gutiérrez
        </p>
      </footer>
    </div>
  );
};

export default Index;

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

const quotes = [
  { text: "En un lugar de la Mancha, de cuyo nombre no quiero acordarme…", author: "Miguel de Cervantes", work: "Don Quijote" },
  { text: "¿Qué es la vida? Un frenesí. ¿Qué es la vida? Una ilusión, una sombra, una ficción…", author: "Calderón de la Barca", work: "La vida es sueño" },
  { text: "Poderoso caballero es don Dinero.", author: "Francisco de Quevedo", work: "Letrillas satíricas" },
  { text: "Nuestras vidas son los ríos que van a dar en la mar, que es el morir.", author: "Jorge Manrique", work: "Coplas" },
  { text: "Volverán las oscuras golondrinas en tu balcón sus nidos a colgar…", author: "Gustavo A. Bécquer", work: "Rimas" },
  { text: "Con diez cañones por banda, viento en popa, a toda vela…", author: "José de Espronceda", work: "Canción del pirata" },
  { text: "Que toda la vida es sueño, y los sueños, sueños son.", author: "Calderón de la Barca", work: "La vida es sueño" },
  { text: "Érase un hombre a una nariz pegado, érase una nariz superlativa…", author: "Francisco de Quevedo", work: "Sonetos" },
  { text: "Yo soy aquel que ayer no más decía…", author: "Garcilaso de la Vega", work: "Églogas" },
  { text: "Vuelva usted mañana.", author: "Mariano José de Larra", work: "Artículos" },
];

const FloatingQuotes = () => {
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after 3 seconds
    const showTimer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % quotes.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  const q = quotes[current];

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-[220px] hidden md:block">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 12, scale: 0.95 }}
          animate={{ opacity: 0.85, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.95 }}
          transition={{ duration: 0.4 }}
          className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg p-3 shadow-md cursor-pointer hover:opacity-100 transition-opacity"
          onClick={() => setCurrent((prev) => (prev + 1) % quotes.length)}
        >
          <p className="font-display text-[11px] text-foreground/80 italic leading-relaxed mb-1.5">
            «{q.text.length > 80 ? q.text.slice(0, 80) + "…" : q.text}»
          </p>
          <div className="flex items-center justify-between">
            <p className="text-[10px] text-muted-foreground">— {q.author}</p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsVisible(false);
                setTimeout(() => setIsVisible(true), 60000);
              }}
              className="text-[10px] text-muted-foreground/50 hover:text-foreground transition-colors ml-2"
            >
              ✕
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default FloatingQuotes;

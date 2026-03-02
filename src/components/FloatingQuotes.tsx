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
    <div className="fixed bottom-6 right-6 z-50 max-w-xs hidden md:block">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.5 }}
          className="bg-card/95 backdrop-blur-md border border-border rounded-xl p-5 shadow-lg cursor-pointer"
          onClick={() => setCurrent((prev) => (prev + 1) % quotes.length)}
        >
          <Quote className="w-4 h-4 text-accent mb-2" />
          <p className="font-display text-sm text-foreground italic leading-relaxed mb-3">
            «{q.text}»
          </p>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-foreground">{q.author}</p>
              <p className="text-xs text-muted-foreground">{q.work}</p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsVisible(false);
                setTimeout(() => setIsVisible(true), 30000);
              }}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors ml-3"
            >
              ✕
            </button>
          </div>
          <div className="flex gap-1 mt-3 justify-center">
            {quotes.map((_, i) => (
              <div
                key={i}
                className={`w-1 h-1 rounded-full transition-colors ${
                  i === current ? "bg-accent" : "bg-border"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default FloatingQuotes;

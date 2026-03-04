import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

const slides = [
  {
    type: "title" as const,
    content: "Timeline Literario",
    sub: "Un recorrido por la literatura española desde la Edad Media hasta el Romanticismo",
  },
  {
    type: "text" as const,
    content: "Siglo X",
    sub: "Las primeras palabras en castellano se escriben en un monasterio",
  },
  {
    type: "quote" as const,
    content: "«En un lugar de la Mancha, de cuyo nombre no quiero acordarme…»",
    sub: "— Miguel de Cervantes, Don Quijote de la Mancha",
  },
  {
    type: "text" as const,
    content: "De juglares a poetas",
    sub: "La evolución de la tradición oral a la palabra escrita",
  },
  {
    type: "cta" as const,
    content: "Explora el Timeline",
    sub: "Haz scroll para descubrir cada periodo literario",
  },
];

const HorizontalScrollHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(slides.length - 1) * 100}%`]);

  return (
    <div ref={containerRef} style={{ height: `${slides.length * 100}vh` }} className="relative">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />

        {/* Subtle dot indicators */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col gap-2">
          {slides.map((_, i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 rounded-full border border-primary-foreground/20"
              style={{
                backgroundColor: useTransform(
                  scrollYProgress,
                  [(i - 0.3) / slides.length, i / slides.length, (i + 0.3) / slides.length],
                  ["transparent", "hsl(38 55% 55%)", "transparent"]
                ),
              }}
            />
          ))}
        </div>

        <motion.div
          className="flex h-full"
          style={{ x, width: `${slides.length * 100}%` }}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className="w-full h-full flex items-center justify-center px-8 md:px-20"
              style={{ width: `${100 / slides.length}%` }}
            >
              <div className="max-w-xl w-full text-center flex flex-col items-center justify-center">
                {slide.type === "title" ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-px bg-primary-foreground/20" />
                      <span className="text-accent text-sm tracking-widest uppercase font-body">Literatura Española</span>
                      <div className="w-12 h-px bg-primary-foreground/20" />
                    </div>
                    <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-5 leading-tight">
                      {slide.content}
                    </h1>
                    <p className="text-primary-foreground/50 text-base md:text-lg font-body leading-relaxed max-w-md">
                      {slide.sub}
                    </p>
                    <p className="text-primary-foreground/30 text-xs font-body mt-8 tracking-wider uppercase">
                      Alejandro Gutiérrez
                    </p>
                  </motion.div>
                ) : slide.type === "quote" ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center"
                  >
                    <p className="font-display text-xl md:text-2xl lg:text-3xl text-primary-foreground/90 italic leading-relaxed mb-4">
                      {slide.content}
                    </p>
                    <p className="text-primary-foreground/40 text-sm font-body">
                      {slide.sub}
                    </p>
                  </motion.div>
                ) : slide.type === "cta" ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center"
                  >
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-3">
                      {slide.content}
                    </h2>
                    <p className="text-primary-foreground/50 text-base font-body">
                      {slide.sub}
                    </p>
                    <ChevronDown className="w-5 h-5 text-primary-foreground/30 mt-8 animate-bounce" />
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center"
                  >
                    <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-3 leading-tight">
                      {slide.content}
                    </h2>
                    <p className="text-primary-foreground/50 text-base md:text-lg font-body leading-relaxed">
                      {slide.sub}
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-primary-foreground/30"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
        >
          <span className="text-[10px] font-body tracking-[0.2em] uppercase">Scroll</span>
          <ChevronDown className="w-3.5 h-3.5" />
        </motion.div>

        {/* Corner accents */}
        <div className="absolute top-8 left-8 w-12 h-12 border-l border-t border-primary-foreground/10" />
        <div className="absolute top-8 right-8 w-12 h-12 border-r border-t border-primary-foreground/10" />
        <div className="absolute bottom-8 left-8 w-12 h-12 border-l border-b border-primary-foreground/10" />
        <div className="absolute bottom-8 right-8 w-12 h-12 border-r border-b border-primary-foreground/10" />
      </div>
    </div>
  );
};

export default HorizontalScrollHero;

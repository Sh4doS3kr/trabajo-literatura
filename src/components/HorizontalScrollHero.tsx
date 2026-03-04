import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Scroll, ChevronDown } from "lucide-react";

const slides = [
  {
    type: "text" as const,
    content: "Siglo X",
    sub: "Un monje escribe las primeras palabras en castellano…",
    emoji: "📜",
  },
  {
    type: "text" as const,
    content: "800 años después",
    sub: "Seguimos estudiándolo para un trabajo de instituto.",
    emoji: "😅",
  },
  {
    type: "quote" as const,
    content: "«En un lugar de la Mancha, de cuyo nombre no quiero acordarme…»",
    sub: "— Cervantes, inventando la novela moderna mientras tú no encuentras el boli",
    emoji: "✍️",
  },
  {
    type: "text" as const,
    content: "De juglares a poetas malditos",
    sub: "De cantar en plazas a llorar en sonetos. La evolución.",
    emoji: "🎭",
  },
  {
    type: "big" as const,
    content: "Timeline Literario",
    sub: "Un viaje épico por la literatura española que no te puedes perder (literalmente, entra en el examen)",
    emoji: "📚",
  },
];

const HorizontalScrollHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(slides.length - 1) * 100}%`]);
  const bgOpacity = useTransform(scrollYProgress, [0.8, 1], [1, 0.6]);

  return (
    <div ref={containerRef} style={{ height: `${slides.length * 100}vh` }} className="relative">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background pattern */}
        <motion.div
          className="absolute inset-0 hero-gradient"
          style={{ opacity: bgOpacity }}
        />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />

        {/* Scroll progress dots */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-3 hidden md:flex">
          {slides.map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full border border-primary-foreground/30"
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

        {/* Slides container */}
        <motion.div
          className="flex h-full"
          style={{ x, width: `${slides.length * 100}%` }}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className="w-full h-full flex items-center justify-center px-6 md:px-20"
              style={{ width: `${100 / slides.length}%` }}
            >
              <div className="max-w-2xl text-center">
                <motion.div
                  className="text-6xl md:text-8xl mb-6"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                >
                  {slide.emoji}
                </motion.div>

                {slide.type === "big" ? (
                  <>
                    <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
                      {slide.content}
                    </h1>
                    <p className="text-primary-foreground/60 text-lg md:text-xl font-body leading-relaxed max-w-lg mx-auto">
                      {slide.sub}
                    </p>
                  </>
                ) : slide.type === "quote" ? (
                  <>
                    <p className="font-display text-2xl md:text-4xl text-primary-foreground italic leading-snug mb-4">
                      {slide.content}
                    </p>
                    <p className="text-primary-foreground/50 text-sm md:text-base font-body">
                      {slide.sub}
                    </p>
                  </>
                ) : (
                  <>
                    <h2 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-4 leading-tight">
                      {slide.content}
                    </h2>
                    <p className="text-primary-foreground/60 text-lg md:text-xl font-body leading-relaxed">
                      {slide.sub}
                    </p>
                  </>
                )}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scroll hint at bottom */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/40"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-xs font-body tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </motion.div>

        {/* Decorative corner elements */}
        <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-primary-foreground/10 rounded-tl-lg" />
        <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-primary-foreground/10 rounded-tr-lg" />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-primary-foreground/10 rounded-bl-lg" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-primary-foreground/10 rounded-br-lg" />
      </div>
    </div>
  );
};

export default HorizontalScrollHero;

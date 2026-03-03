import { useEffect, useRef, useState } from "react";
import { ChevronDown, BookOpen, Users, Feather } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

interface TimelineCardProps {
  title: string;
  image: string;
  side: "left" | "right";
  index: number;
  period: string;
  context: string;
  characteristics: string[];
  authors: { name: string; works: string }[];
}

const TimelineCard = ({
  title,
  image,
  side,
  index,
  period,
  context,
  characteristics,
  authors,
}: TimelineCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const cardOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const cardY = useTransform(scrollYProgress, [0, 0.4], [80, 0]);
  const cardX = useTransform(
    scrollYProgress,
    [0, 0.4],
    [side === "left" ? -40 : 40, 0]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const cardContent = (mobile?: boolean) => (
    <div
      className="bg-card rounded-xl border border-border overflow-hidden shadow-sm cursor-pointer group relative transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className={`w-full ${mobile ? "h-40" : "h-52"} object-cover transition-transform duration-700 group-hover:scale-110`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
        <span className="absolute bottom-3 right-4 bg-primary/80 text-primary-foreground text-xs font-body px-2.5 py-1 rounded-full backdrop-blur-sm">
          {period}
        </span>
      </div>

      <div className={mobile ? "p-4" : "p-6"}>
        <h3 className={`font-display ${mobile ? "text-lg" : "text-xl"} font-bold text-foreground mb-2 leading-snug`}>
          {title}
        </h3>

        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4">
          {context}
        </p>

        <button className="flex items-center gap-1.5 text-accent text-sm font-medium font-body transition-all hover:gap-2.5">
          {expanded ? "Ocultar apuntes" : "Leer apuntes completos"}
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
          />
        </button>

        {/* Expandable content */}
        <div
          className={`grid transition-all duration-500 ease-in-out ${
            expanded ? "grid-rows-[1fr] opacity-100 mt-5" : "grid-rows-[0fr] opacity-0 mt-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="h-px bg-border mb-5" />

            <div className="mb-5">
              <div className="flex items-center gap-2 mb-2.5">
                <div className="w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center">
                  <BookOpen className="w-3.5 h-3.5 text-accent" />
                </div>
                <h4 className="font-display text-sm font-bold text-foreground">Contexto histórico</h4>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed ml-9">{context}</p>
            </div>

            <div className="mb-5">
              <div className="flex items-center gap-2 mb-2.5">
                <div className="w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Feather className="w-3.5 h-3.5 text-accent" />
                </div>
                <h4 className="font-display text-sm font-bold text-foreground">Características</h4>
              </div>
              <ul className="space-y-2 ml-9">
                {characteristics.map((c, i) => (
                  <li key={i} className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2.5">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent/60 flex-shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2.5">
                <div className="w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Users className="w-3.5 h-3.5 text-accent" />
                </div>
                <h4 className="font-display text-sm font-bold text-foreground">Autores y obras</h4>
              </div>
              <div className="space-y-3 ml-9">
                {authors.map((a, i) => (
                  <div key={i} className="text-sm bg-muted/50 rounded-lg p-3">
                    <span className="font-semibold text-foreground">{a.name}</span>
                    <p className="text-muted-foreground mt-0.5">{a.works}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div ref={ref} className="mb-8 md:mb-12">
      {/* Desktop */}
      <div className={`hidden md:flex w-full items-start ${side === "right" ? "flex-row-reverse" : ""}`}>
        <motion.div
          className="w-[calc(50%-1.5rem)]"
          style={{ opacity: cardOpacity, y: cardY, x: cardX }}
        >
          {cardContent()}
        </motion.div>
        <div className="w-12" />
        <div className="w-[calc(50%-1.5rem)]" />
      </div>

      {/* Mobile */}
      <motion.div
        className="md:hidden"
        style={{ opacity: cardOpacity, y: cardY }}
      >
        {cardContent(true)}
      </motion.div>
    </div>
  );
};

export default TimelineCard;

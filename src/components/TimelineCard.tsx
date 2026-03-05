import { useEffect, useRef, useState } from "react";
import { ChevronDown, BookOpen, Users, Feather } from "lucide-react";
import { motion } from "framer-motion";

interface TimelineCardProps {
  number: string;
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
  number,
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const cardContent = (mobile?: boolean) => (
    <motion.div
      className="bg-card rounded-xl border border-border overflow-hidden shadow-sm cursor-pointer group relative"
      onClick={() => setExpanded(!expanded)}
      whileHover={{ y: -4, boxShadow: "0 20px 40px -12px rgba(0,0,0,0.12)" }}
      transition={{ duration: 0.3 }}
    >
      {/* Chapter number badge */}
      <div className="absolute top-4 left-4 z-20 bg-card/90 backdrop-blur-sm rounded-lg px-3 py-1.5 border border-border shadow-sm">
        <span className="font-display text-sm font-bold text-accent">{number}</span>
      </div>

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

            {/* Context */}
            <div className="mb-5">
              <div className="flex items-center gap-2 mb-2.5">
                <div className="w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center">
                  <BookOpen className="w-3.5 h-3.5 text-accent" />
                </div>
                <h4 className="font-display text-sm font-bold text-foreground">Contexto histórico</h4>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed ml-9">
                {context}
              </p>
            </div>

            {/* Characteristics */}
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

            {/* Authors */}
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
    </motion.div>
  );

  return (
    <div
      ref={ref}
      className={`timeline-card ${visible ? "visible" : ""} flex items-center w-full mb-8 md:mb-12`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Desktop */}
      <div className={`hidden md:flex w-full items-start ${side === "right" ? "flex-row-reverse" : ""}`}>
        <div className="w-[calc(50%-2.5rem)]">{cardContent()}</div>
        <div className="flex flex-col items-center w-20 relative pt-6">
          <div className="timeline-dot w-12 h-12 rounded-full flex items-center justify-center z-10 animate-pulse-glow">
            <span className="font-display text-sm font-bold text-card">{number}</span>
          </div>
        </div>
        <div className="w-[calc(50%-2.5rem)]" />
      </div>

      {/* Mobile */}
      <div className="md:hidden flex items-start w-full">
        <div className="flex flex-col items-center mr-3 pt-1">
          <div className="timeline-dot w-8 h-8 rounded-full flex items-center justify-center z-10 animate-pulse-glow flex-shrink-0">
            <span className="font-display text-[10px] font-bold text-card">{number}</span>
          </div>
        </div>
        <div className="flex-1">{cardContent(true)}</div>
      </div>
    </div>
  );
};

export default TimelineCard;

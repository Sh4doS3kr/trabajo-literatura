import { useEffect, useRef, useState } from "react";
import { ChevronDown, BookOpen, Users, Feather } from "lucide-react";

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
    <div
      className="card-hover bg-card rounded-lg border border-border overflow-hidden shadow-sm cursor-pointer group"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className={`w-full ${mobile ? "h-36" : "h-48"} object-cover transition-transform duration-500 group-hover:scale-105`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
        <span className={`absolute bottom-3 left-4 section-number ${mobile ? "text-sm" : "text-lg"} opacity-80`}>
          {number}
        </span>
        <span className="absolute top-3 right-3 bg-primary/80 text-primary-foreground text-xs font-body px-2.5 py-1 rounded-full backdrop-blur-sm">
          {period}
        </span>
      </div>

      <div className={mobile ? "p-4" : "p-6"}>
        <h3 className={`font-display ${mobile ? "text-lg" : "text-xl"} font-bold text-foreground mb-2 leading-snug`}>
          {title}
        </h3>

        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-3">
          {context}
        </p>

        {/* Expand button */}
        <button className="flex items-center gap-1.5 text-accent text-sm font-medium font-body transition-colors hover:text-accent/80">
          {expanded ? "Ver menos" : "Ver apuntes completos"}
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
          />
        </button>

        {/* Expandable content */}
        <div
          className={`grid transition-all duration-500 ease-in-out ${
            expanded ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 mt-0"
          }`}
        >
          <div className="overflow-hidden">
            {/* Context */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-4 h-4 text-accent" />
                <h4 className="font-display text-sm font-bold text-foreground">Contexto histórico</h4>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed pl-6">
                {context}
              </p>
            </div>

            {/* Characteristics */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <Feather className="w-4 h-4 text-accent" />
                <h4 className="font-display text-sm font-bold text-foreground">Características</h4>
              </div>
              <ul className="space-y-1.5 pl-6">
                {characteristics.map((c, i) => (
                  <li key={i} className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                    <span className="text-accent mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            {/* Authors */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-4 h-4 text-accent" />
                <h4 className="font-display text-sm font-bold text-foreground">Autores y obras</h4>
              </div>
              <div className="space-y-2 pl-6">
                {authors.map((a, i) => (
                  <div key={i} className="text-sm">
                    <span className="font-semibold text-foreground">{a.name}</span>
                    <span className="text-muted-foreground"> — {a.works}</span>
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
    <div
      ref={ref}
      className={`timeline-card ${visible ? "visible" : ""} flex items-center w-full mb-12 md:mb-16`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Desktop */}
      <div className={`hidden md:flex w-full items-start ${side === "right" ? "flex-row-reverse" : ""}`}>
        <div className="w-[calc(50%-2rem)]">{cardContent()}</div>
        <div className="flex items-center justify-center w-16 relative mt-6">
          <div className="timeline-dot w-4 h-4 rounded-full z-10 animate-pulse-glow" />
        </div>
        <div className="w-[calc(50%-2rem)]" />
      </div>

      {/* Mobile */}
      <div className="md:hidden flex items-start w-full">
        <div className="flex flex-col items-center mr-4 mt-2">
          <div className="timeline-dot w-3 h-3 rounded-full z-10" />
        </div>
        <div className="flex-1">{cardContent(true)}</div>
      </div>
    </div>
  );
};

export default TimelineCard;

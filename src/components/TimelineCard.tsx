import { useEffect, useRef, useState } from "react";

interface TimelineCardProps {
  number: string;
  title: string;
  image: string;
  side: "left" | "right";
  index: number;
}

const TimelineCard = ({ number, title, image, side, index }: TimelineCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

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

  return (
    <div
      ref={ref}
      className={`timeline-card ${visible ? "visible" : ""} flex items-center w-full mb-12 md:mb-16`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Desktop layout: alternating */}
      <div className={`hidden md:flex w-full items-center ${side === "right" ? "flex-row-reverse" : ""}`}>
        {/* Card */}
        <div className="w-[calc(50%-2rem)]">
          <div className="card-hover bg-card rounded-lg border border-border overflow-hidden shadow-sm">
            {/* <!-- IMAGEN: Cambia la imagen de este período aquí --> */}
            <div className="relative overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
              <span className="absolute bottom-3 left-4 section-number text-lg opacity-80">
                {number}
              </span>
            </div>

            <div className="p-6">
              {/* <!-- TÍTULO: Modifica el título aquí --> */}
              <h3 className="font-display text-xl font-bold text-foreground mb-3 leading-snug">
                {title}
              </h3>

              {/* <!-- CONTENIDO: Escribe tus apuntes aquí --> */}
              <div className="text-muted-foreground text-sm leading-relaxed space-y-2 border-l-2 border-accent/40 pl-4">
                <p className="italic">
                  [INSERTA AQUÍ TUS APUNTES: Contexto histórico, características principales, autores más importantes y sus obras destacadas]
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Spacer + dot */}
        <div className="flex items-center justify-center w-16 relative">
          <div className="timeline-dot w-4 h-4 rounded-full z-10 animate-pulse-glow" />
        </div>

        {/* Empty space on opposite side */}
        <div className="w-[calc(50%-2rem)]" />
      </div>

      {/* Mobile layout: single column */}
      <div className="md:hidden flex items-start w-full">
        <div className="flex flex-col items-center mr-4 mt-2">
          <div className="timeline-dot w-3 h-3 rounded-full z-10" />
        </div>
        <div className="flex-1">
          <div className="card-hover bg-card rounded-lg border border-border overflow-hidden shadow-sm">
            <div className="relative overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full h-36 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
              <span className="absolute bottom-2 left-3 section-number text-sm opacity-80">
                {number}
              </span>
            </div>
            <div className="p-4">
              <h3 className="font-display text-lg font-bold text-foreground mb-2 leading-snug">
                {title}
              </h3>
              <div className="text-muted-foreground text-sm leading-relaxed space-y-2 border-l-2 border-accent/40 pl-3">
                <p className="italic">
                  [INSERTA AQUÍ TUS APUNTES: Contexto, características, autores principales y obras]
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;

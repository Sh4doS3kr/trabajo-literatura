import TimelineCard from "./TimelineCard";

import medievalImg from "@/assets/medieval.jpg";
import sigloXvImg from "@/assets/siglo-xv.jpg";
import renacimientoImg from "@/assets/renacimiento.jpg";
import quijoteImg from "@/assets/quijote.jpg";
import poesiaBarrocaImg from "@/assets/poesia-barroca.jpg";
import teatroBarrocoImg from "@/assets/teatro-barroco.jpg";
import sigloXviiiImg from "@/assets/siglo-xviii.jpg";
import romanticismoImg from "@/assets/romanticismo.jpg";

/*
 * ============================================
 * DATOS DEL TIMELINE
 * ============================================
 * Modifica los títulos y añade más períodos
 * si lo necesitas. Las imágenes se importan
 * arriba y se pueden cambiar reemplazando
 * los archivos en src/assets/
 * ============================================
 */
const timelineData = [
  {
    number: "4.2",
    title: "La literatura medieval",
    image: medievalImg,
  },
  {
    number: "4.3",
    title: "La literatura del siglo XV",
    image: sigloXvImg,
  },
  {
    number: "4.4",
    title: "La literatura renacentista",
    image: renacimientoImg,
  },
  {
    number: "4.5",
    title: "Cervantes y el Quijote",
    image: quijoteImg,
  },
  {
    number: "4.6",
    title: "La poesía y la prosa barrocas",
    image: poesiaBarrocaImg,
  },
  {
    number: "4.7",
    title: "El teatro barroco",
    image: teatroBarrocoImg,
  },
  {
    number: "4.8",
    title: "La literatura del siglo XVIII",
    image: sigloXviiiImg,
  },
  {
    number: "4.9",
    title: "El Romanticismo",
    image: romanticismoImg,
  },
];

const Timeline = () => {
  return (
    <section className="relative max-w-5xl mx-auto px-4 py-16">
      {/* Vertical line - desktop */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 timeline-line-gradient" />

      {/* Vertical line - mobile */}
      <div className="md:hidden absolute left-[1.35rem] top-0 bottom-0 w-[2px] timeline-line-gradient" />

      {timelineData.map((item, i) => (
        <TimelineCard
          key={item.number}
          number={item.number}
          title={item.title}
          image={item.image}
          side={i % 2 === 0 ? "left" : "right"}
          index={i}
        />
      ))}
    </section>
  );
};

export default Timeline;

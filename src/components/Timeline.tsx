import TimelineCard from "./TimelineCard";
import ChapterReveal from "./ChapterReveal";

import medievalImg from "@/assets/medieval.jpg";
import sigloXvImg from "@/assets/siglo-xv.jpg";
import renacimientoImg from "@/assets/renacimiento.jpg";
import quijoteImg from "@/assets/quijote.jpg";
import poesiaBarrocaImg from "@/assets/poesia-barroca.jpg";
import teatroBarrocoImg from "@/assets/teatro-barroco.jpg";
import sigloXviiiImg from "@/assets/siglo-xviii.jpg";
import romanticismoImg from "@/assets/romanticismo.jpg";

const timelineData = [
  {
    number: "4.2",
    title: "La literatura medieval",
    image: medievalImg,
    period: "Siglos X–XIV",
    context:
      "La literatura medieval española nace en una península marcada por la convivencia de tres culturas (cristiana, musulmana y judía) y la Reconquista. La lengua castellana comienza a usarse como vehículo literario frente al latín. La sociedad feudal, profundamente religiosa y guerrera, marca los temas: la fe, el honor, la muerte y las hazañas bélicas.",
    characteristics: [
      "Transmisión oral: juglares recitaban poemas en plazas y castillos (mester de juglaría).",
      "Anonimato frecuente: muchas obras carecen de autor conocido.",
      "Mester de clerecía: obras cultas escritas por clérigos con métrica regular (cuaderna vía, versos alejandrinos).",
      "Didactismo y moralización: la literatura busca enseñar y transmitir valores religiosos o morales.",
      "Convivencia de prosa y verso: surgen las primeras grandes obras narrativas en prosa castellana.",
    ],
    authors: [
      { name: "Anónimo", works: "Cantar de Mio Cid (h. 1200), primer gran poema épico castellano." },
      { name: "Gonzalo de Berceo", works: "Milagros de Nuestra Señora, primer poeta castellano de nombre conocido." },
      { name: "Alfonso X el Sabio", works: "Impulsó la prosa castellana: Estoria de España, General Estoria, Cantigas de Santa María." },
      { name: "Don Juan Manuel", works: "El Conde Lucanor (1335), colección de cuentos con moraleja." },
      { name: "Juan Ruiz, Arcipreste de Hita", works: "Libro de Buen Amor (1330/1343), mezcla de narrativa, lírica y didáctica." },
    ],
  },
  {
    number: "4.3",
    title: "La literatura del siglo XV",
    image: sigloXvImg,
    period: "Siglo XV",
    context:
      "El siglo XV es un período de transición entre la Edad Media y el Renacimiento. La nobleza vive en una época de crisis y guerras civiles, pero también de refinamiento cortesano. Llega la imprenta a España (1472) y se produce un auge de la poesía de cancionero. El reinado de los Reyes Católicos (1474-1516) unifica territorios y culmina la Reconquista con la toma de Granada (1492).",
    characteristics: [
      "Poesía de cancionero: lírica cortesana refinada sobre el amor, recogida en cancioneros como el de Baena o el General.",
      "Romancero: poemas narrativos breves de tradición oral, anónimos, con temas épicos, históricos y novelescos.",
      "Novela sentimental: relatos sobre amores desdichados con tono elegíaco (Cárcel de amor, de Diego de San Pedro).",
      "Humanismo incipiente: influencia de autores italianos y clásicos grecolatinos.",
      "Temas del paso del tiempo, la muerte igualadora y la fugacidad de la vida (tempus fugit, ubi sunt).",
    ],
    authors: [
      { name: "Jorge Manrique", works: "Coplas a la muerte de su padre (h. 1476), una de las elegías más importantes de la literatura española." },
      { name: "Marqués de Santillana", works: "Serranillas, Sonetos fechos al itálico modo; impulsó la poesía culta." },
      { name: "Juan de Mena", works: "Laberinto de Fortuna (1444), poema alegórico de gran ambición literaria." },
      { name: "Fernando de Rojas", works: "La Celestina (1499), tragicomedia que retrata el amor trágico de Calisto y Melibea con un lenguaje magistral." },
    ],
  },
  {
    number: "4.4",
    title: "La literatura renacentista",
    image: renacimientoImg,
    period: "Siglo XVI",
    context:
      "El Renacimiento llega a España en el siglo XVI con el reinado de Carlos I y Felipe II. España se convierte en la mayor potencia mundial. El humanismo sitúa al ser humano en el centro de la reflexión. Se adoptan modelos literarios italianos (Petrarca, Garcilaso) y clásicos grecolatinos. La Contrarreforma marca la segunda mitad del siglo con una literatura religiosa intensa.",
    characteristics: [
      "Imitación de modelos clásicos e italianos: sonetos, églogas, epístolas.",
      "Introducción del verso endecasílabo y las estrofas italianas (soneto, lira, octava real).",
      "Temas: amor idealizado (petrarquismo), naturaleza idealizada (locus amoenus), mitología, carpe diem.",
      "Dos etapas: poesía profana (primer Renacimiento) y poesía religiosa/mística (segundo Renacimiento).",
      "Nacimiento de la novela picaresca con el Lazarillo de Tormes (1554): realismo, antihéroe, crítica social.",
      "Mística y ascética: búsqueda de la unión del alma con Dios mediante la contemplación.",
    ],
    authors: [
      { name: "Garcilaso de la Vega", works: "Églogas, Sonetos; renovó la poesía española con el estilo italiano." },
      { name: "Fray Luis de León", works: "Oda a la vida retirada, De los nombres de Cristo; poesía ascética y humanista." },
      { name: "San Juan de la Cruz", works: "Noche oscura del alma, Cántico espiritual; cumbre de la poesía mística." },
      { name: "Santa Teresa de Jesús", works: "Las moradas, Camino de perfección; mística y autobiografía espiritual." },
      { name: "Anónimo", works: "Lazarillo de Tormes (1554), primera novela picaresca." },
    ],
  },
  {
    number: "4.5",
    title: "Cervantes y el Quijote",
    image: quijoteImg,
    period: "1547–1616",
    context:
      "Miguel de Cervantes Saavedra (1547-1616) es considerado la figura más importante de la literatura española y uno de los mayores escritores universales. Vivió una vida azarosa: soldado en Lepanto (1571), cautivo en Argel durante cinco años, recaudador de impuestos y preso en varias ocasiones. Su obra maestra, Don Quijote de la Mancha (1605 y 1615), marca el nacimiento de la novela moderna.",
    characteristics: [
      "Don Quijote: parodia de las novelas de caballerías que se convierte en una reflexión profunda sobre la realidad, la ficción y la libertad.",
      "Estructura innovadora: novela dentro de la novela, múltiples narradores, historias intercaladas.",
      "Personajes complejos y en evolución: Don Quijote (idealismo) y Sancho Panza (realismo pragmático) se influyen mutuamente.",
      "Ironía, humor y profundidad filosófica conviven en toda la obra.",
      "Cervantes cultivó todos los géneros: poesía, teatro, novela corta (Novelas ejemplares) y novela larga.",
      "Influencia universal: considerada la primera novela moderna de la historia de la literatura.",
    ],
    authors: [
      { name: "Miguel de Cervantes", works: "Don Quijote de la Mancha (Parte I: 1605, Parte II: 1615)." },
      { name: "Cervantes (novela corta)", works: "Novelas ejemplares (1613): 12 relatos como Rinconete y Cortadillo, El licenciado Vidriera, La gitanilla." },
      { name: "Cervantes (teatro)", works: "Entremeses, Numancia; aunque fue eclipsado en teatro por Lope de Vega." },
      { name: "Cervantes (novela)", works: "La Galatea (1585, novela pastoril), Los trabajos de Persiles y Sigismunda (1617, póstuma)." },
    ],
  },
  {
    number: "4.6",
    title: "La poesía y la prosa barrocas",
    image: poesiaBarrocaImg,
    period: "Siglo XVII",
    context:
      "El Barroco español (siglo XVII) coincide con la decadencia política y económica del Imperio. La sociedad vive el desengaño: la realidad es inestable, el mundo es apariencia y engaño. El arte reacciona con complejidad formal, contrastes violentos y una visión pesimista de la existencia. España vive su Siglo de Oro literario a pesar de la crisis.",
    characteristics: [
      "Dos grandes corrientes poéticas: conceptismo (ingenio, juegos de palabras, doble sentido) y culteranismo (belleza formal, latinismos, metáforas complejas).",
      "Temas: desengaño, fugacidad de la vida, vanitas, sueño vs realidad, la muerte omnipresente.",
      "Estilo recargado, artificioso, lleno de antítesis, hipérboles y metáforas extremas.",
      "Prosa satírica y moral: reflexión crítica sobre la sociedad, la política y la condición humana.",
      "La novela picaresca alcanza su apogeo con obras más amargas y críticas.",
    ],
    authors: [
      { name: "Luis de Góngora", works: "Soledades, Fábula de Polifemo y Galatea; máximo representante del culteranismo." },
      { name: "Francisco de Quevedo", works: "Poesía amorosa, satírica y moral; El Buscón (novela picaresca); Los Sueños (prosa satírica). Líder del conceptismo." },
      { name: "Baltasar Gracián", works: "El Criticón (novela alegórica), Oráculo manual y arte de prudencia; prosa filosófica conceptista." },
      { name: "Mateo Alemán", works: "Guzmán de Alfarache (1599-1604), novela picaresca de gran éxito." },
    ],
  },
  {
    number: "4.7",
    title: "El teatro barroco",
    image: teatroBarrocoImg,
    period: "Siglo XVII",
    context:
      "El teatro fue el gran espectáculo de masas del Barroco español. Se representaba en corrales de comedias (patios interiores de manzanas de casas) ante un público diverso: desde el pueblo llano hasta la nobleza. Lope de Vega revolucionó el teatro creando la 'comedia nueva', que rompía las reglas clásicas. El teatro era negocio, entretenimiento y vehículo ideológico.",
    characteristics: [
      "La 'comedia nueva' de Lope: mezcla de lo trágico y lo cómico, ruptura de las tres unidades clásicas (acción, tiempo, lugar).",
      "Estructura en tres actos (jornadas) en lugar de cinco.",
      "Temas principales: el honor, la honra villana, el amor, la religión, la historia y la mitología.",
      "Personajes tipo: el galán, la dama, el gracioso (criado cómico), el padre/rey que restaura el honor.",
      "Verso polimétrico: se adapta la métrica al contenido de cada escena.",
      "Auto sacramental: pieza teatral alegórica de tema eucarístico, representada en la fiesta del Corpus Christi.",
    ],
    authors: [
      { name: "Lope de Vega", works: "Fuenteovejuna, El caballero de Olmedo, El perro del hortalano; escribió más de 400 comedias." },
      { name: "Pedro Calderón de la Barca", works: "La vida es sueño, El alcalde de Zalamea, El gran teatro del mundo (auto sacramental)." },
      { name: "Tirso de Molina", works: "El burlador de Sevilla (origen del mito de Don Juan), El condenado por desconfiado." },
      { name: "Guillén de Castro", works: "Las mocedades del Cid, que inspiró Le Cid de Corneille." },
    ],
  },
  {
    number: "4.8",
    title: "La literatura del siglo XVIII",
    image: sigloXviiiImg,
    period: "Siglo XVIII",
    context:
      "El siglo XVIII, el Siglo de las Luces, trae la Ilustración a España con la dinastía borbónica. Se impone la razón sobre la fe y la tradición. Se crean instituciones como la Real Academia Española (1713) y se busca el progreso a través de la educación y la ciencia. La literatura tiene una función didáctica y utilitaria: debe enseñar y ser útil a la sociedad.",
    characteristics: [
      "Neoclasicismo: vuelta a las reglas clásicas (unidades de acción, tiempo y lugar en el teatro), equilibrio, contención.",
      "Función didáctica: la literatura debe instruir y moralizar ('enseñar deleitando').",
      "Predominio del ensayo y la prosa de ideas sobre la poesía y la ficción.",
      "Preocupación por la lengua: se publica el primer Diccionario de la RAE, Ortografía y Gramática.",
      "Crítica social: los escritores denuncian la superstición, la ignorancia y los privilegios de la nobleza ociosa.",
      "A finales de siglo surge el prerromanticismo con expresión de sentimientos y melancolía.",
    ],
    authors: [
      { name: "Benito Jerónimo Feijoo", works: "Teatro crítico universal, Cartas eruditas; combatió supersticiones con la razón." },
      { name: "José Cadalso", works: "Cartas marruecas (crítica social), Noches lúgubres (prerromanticismo)." },
      { name: "Gaspar Melchor de Jovellanos", works: "Informe sobre la Ley Agraria, Memoria sobre espectáculos; reformista ilustrado." },
      { name: "Leandro Fernández de Moratín", works: "El sí de las niñas (1806), comedia neoclásica contra los matrimonios concertados." },
      { name: "Tomás de Iriarte y Félix M. Samaniego", works: "Fábulas literarias y Fábulas morales, respectivamente; didáctica en verso." },
    ],
  },
  {
    number: "4.9",
    title: "El Romanticismo",
    image: romanticismoImg,
    period: "1ª mitad s. XIX",
    context:
      "El Romanticismo llega a España con retraso respecto a Europa (hacia 1833, tras la muerte de Fernando VII). Reacciona contra el racionalismo ilustrado y exalta el sentimiento, la libertad individual, la pasión y la rebeldía. El contexto histórico está marcado por la Guerra de Independencia (1808-1814), el absolutismo y las guerras carlistas. Los románticos buscan lo nacional, lo medieval y lo exótico.",
    characteristics: [
      "Subjetivismo e individualismo: el 'yo' del artista y sus emociones son el centro de la obra.",
      "Rebeldía y libertad: rechazo de las normas clásicas, mezcla de géneros y estilos.",
      "Temas: amor imposible/trágico, la muerte, la libertad, el destino, la soledad, lo sobrenatural, el pasado medieval.",
      "Ambientaciones nocturnas, ruinas, cementerios, paisajes tormentosos que reflejan el estado de ánimo.",
      "Nacionalismo y costumbrismo: recuperación de tradiciones, leyendas y folklore español.",
      "Evasión en el tiempo (Edad Media) y en el espacio (Oriente, tierras exóticas).",
    ],
    authors: [
      { name: "José de Espronceda", works: "La canción del pirata, El estudiante de Salamanca, El diablo mundo; poesía rebelde y apasionada." },
      { name: "Gustavo Adolfo Bécquer", works: "Rimas (poesía intimista y sentimental), Leyendas (relatos fantásticos). Romántico tardío." },
      { name: "Rosalía de Castro", works: "Cantares gallegos, En las orillas del Sar; poesía melancólica y reivindicativa." },
      { name: "Duque de Rivas", works: "Don Álvaro o la fuerza del sino (1835), drama romántico por excelencia." },
      { name: "José Zorrilla", works: "Don Juan Tenorio (1844), versión romántica del mito de Don Juan." },
      { name: "Mariano José de Larra", works: "Artículos periodísticos (Vuelva usted mañana, El castellano viejo); crítica social mordaz." },
    ],
  },
];

interface TimelineProps {
  isReady: boolean;
}

const Timeline = ({ isReady }: TimelineProps) => {
  if (!isReady) return null;

  return (
    <section className="relative max-w-5xl mx-auto px-4 py-8">
      {timelineData.map((item, i) => (
        <div key={item.number}>
          {/* Chapter reveal divider */}
          <ChapterReveal
            number={item.number}
            title={item.title}
            period={item.period}
            index={i}
            isActive={isReady}
          />

          {/* Card */}
          <TimelineCard
            number={item.number}
            title={item.title}
            image={item.image}
            side={i % 2 === 0 ? "left" : "right"}
            index={i}
            period={item.period}
            context={item.context}
            characteristics={item.characteristics}
            authors={item.authors}
          />
        </div>
      ))}
    </section>
  );
};

export default Timeline;

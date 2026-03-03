import TimelineCard from "./TimelineCard";
import SVGReveal from "./SVGReveal";

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
    title: "La literatura del siglo XV",
    image: sigloXvImg,
    period: "Siglo XV",
    context:
      "El siglo XV es un período de transición entre la Edad Media y el Renacimiento. La nobleza vive en una época de crisis y guerras civiles, pero también de refinamiento cortesano. Llega la imprenta a España (1472) y se produce un auge de la poesía de cancionero.",
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
      { name: "Fernando de Rojas", works: "La Celestina (1499), tragicomedia que retrata el amor trágico de Calisto y Melibea." },
    ],
  },
  {
    title: "La literatura renacentista",
    image: renacimientoImg,
    period: "Siglo XVI",
    context:
      "El Renacimiento llega a España en el siglo XVI con el reinado de Carlos I y Felipe II. España se convierte en la mayor potencia mundial. El humanismo sitúa al ser humano en el centro de la reflexión.",
    characteristics: [
      "Imitación de modelos clásicos e italianos: sonetos, églogas, epístolas.",
      "Introducción del verso endecasílabo y las estrofas italianas (soneto, lira, octava real).",
      "Temas: amor idealizado (petrarquismo), naturaleza idealizada (locus amoenus), mitología, carpe diem.",
      "Dos etapas: poesía profana (primer Renacimiento) y poesía religiosa/mística (segundo Renacimiento).",
      "Nacimiento de la novela picaresca con el Lazarillo de Tormes (1554).",
      "Mística y ascética: búsqueda de la unión del alma con Dios.",
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
    title: "Cervantes y el Quijote",
    image: quijoteImg,
    period: "1547–1616",
    context:
      "Miguel de Cervantes Saavedra es considerado la figura más importante de la literatura española. Su obra maestra, Don Quijote de la Mancha (1605 y 1615), marca el nacimiento de la novela moderna.",
    characteristics: [
      "Don Quijote: parodia de las novelas de caballerías que se convierte en reflexión sobre la realidad y la ficción.",
      "Estructura innovadora: novela dentro de la novela, múltiples narradores, historias intercaladas.",
      "Personajes complejos: Don Quijote (idealismo) y Sancho Panza (realismo pragmático) se influyen mutuamente.",
      "Ironía, humor y profundidad filosófica conviven en toda la obra.",
      "Cervantes cultivó todos los géneros: poesía, teatro, novela corta y novela larga.",
      "Influencia universal: considerada la primera novela moderna.",
    ],
    authors: [
      { name: "Miguel de Cervantes", works: "Don Quijote de la Mancha (Parte I: 1605, Parte II: 1615)." },
      { name: "Cervantes (novela corta)", works: "Novelas ejemplares (1613): Rinconete y Cortadillo, La gitanilla, etc." },
      { name: "Cervantes (teatro)", works: "Entremeses, Numancia; eclipsado por Lope de Vega." },
      { name: "Cervantes (novela)", works: "La Galatea (1585), Los trabajos de Persiles y Sigismunda (1617, póstuma)." },
    ],
  },
  {
    title: "La poesía y la prosa barrocas",
    image: poesiaBarrocaImg,
    period: "Siglo XVII",
    context:
      "El Barroco español coincide con la decadencia del Imperio. La sociedad vive el desengaño. El arte reacciona con complejidad formal y una visión pesimista. España vive su Siglo de Oro literario a pesar de la crisis.",
    characteristics: [
      "Conceptismo (ingenio, juegos de palabras) y culteranismo (belleza formal, latinismos, metáforas complejas).",
      "Temas: desengaño, fugacidad de la vida, vanitas, sueño vs realidad, la muerte omnipresente.",
      "Estilo recargado, artificioso, lleno de antítesis, hipérboles y metáforas extremas.",
      "Prosa satírica y moral: reflexión crítica sobre la sociedad y la condición humana.",
      "La novela picaresca alcanza su apogeo con obras más amargas y críticas.",
    ],
    authors: [
      { name: "Luis de Góngora", works: "Soledades, Fábula de Polifemo y Galatea; máximo representante del culteranismo." },
      { name: "Francisco de Quevedo", works: "Poesía amorosa, satírica y moral; El Buscón; Los Sueños. Líder del conceptismo." },
      { name: "Baltasar Gracián", works: "El Criticón, Oráculo manual y arte de prudencia; prosa filosófica conceptista." },
      { name: "Mateo Alemán", works: "Guzmán de Alfarache (1599-1604), novela picaresca de gran éxito." },
    ],
  },
  {
    title: "El teatro barroco",
    image: teatroBarrocoImg,
    period: "Siglo XVII",
    context:
      "El teatro fue el gran espectáculo de masas del Barroco. Se representaba en corrales de comedias. Lope de Vega revolucionó el teatro creando la 'comedia nueva'.",
    characteristics: [
      "La 'comedia nueva': mezcla de lo trágico y lo cómico, ruptura de las tres unidades clásicas.",
      "Estructura en tres actos (jornadas) en lugar de cinco.",
      "Temas: el honor, la honra villana, el amor, la religión, la historia y la mitología.",
      "Personajes tipo: el galán, la dama, el gracioso, el padre/rey que restaura el honor.",
      "Verso polimétrico: se adapta la métrica al contenido de cada escena.",
      "Auto sacramental: pieza teatral alegórica de tema eucarístico.",
    ],
    authors: [
      { name: "Lope de Vega", works: "Fuenteovejuna, El caballero de Olmedo, El perro del hortalano; más de 400 comedias." },
      { name: "Calderón de la Barca", works: "La vida es sueño, El alcalde de Zalamea, El gran teatro del mundo." },
      { name: "Tirso de Molina", works: "El burlador de Sevilla (origen del mito de Don Juan)." },
      { name: "Guillén de Castro", works: "Las mocedades del Cid, que inspiró Le Cid de Corneille." },
    ],
  },
  {
    title: "La literatura del siglo XVIII",
    image: sigloXviiiImg,
    period: "Siglo XVIII",
    context:
      "El Siglo de las Luces trae la Ilustración a España. Se impone la razón sobre la fe y la tradición. Se crean instituciones como la RAE (1713). La literatura tiene función didáctica y utilitaria.",
    characteristics: [
      "Neoclasicismo: vuelta a las reglas clásicas, equilibrio, contención.",
      "Función didáctica: la literatura debe instruir y moralizar ('enseñar deleitando').",
      "Predominio del ensayo y la prosa de ideas sobre la poesía y la ficción.",
      "Preocupación por la lengua: primer Diccionario de la RAE, Ortografía y Gramática.",
      "Crítica social: denuncia de la superstición, ignorancia y privilegios.",
      "A finales de siglo surge el prerromanticismo.",
    ],
    authors: [
      { name: "Benito J. Feijoo", works: "Teatro crítico universal, Cartas eruditas; combatió supersticiones con la razón." },
      { name: "José Cadalso", works: "Cartas marruecas (crítica social), Noches lúgubres (prerromanticismo)." },
      { name: "Jovellanos", works: "Informe sobre la Ley Agraria; reformista ilustrado." },
      { name: "Leandro F. de Moratín", works: "El sí de las niñas (1806), comedia neoclásica contra los matrimonios concertados." },
      { name: "Iriarte y Samaniego", works: "Fábulas literarias y Fábulas morales; didáctica en verso." },
    ],
  },
  {
    title: "El Romanticismo",
    image: romanticismoImg,
    period: "1ª mitad s. XIX",
    context:
      "El Romanticismo llega a España hacia 1833. Reacciona contra el racionalismo ilustrado y exalta el sentimiento, la libertad individual, la pasión y la rebeldía.",
    characteristics: [
      "Subjetivismo e individualismo: el 'yo' del artista es el centro de la obra.",
      "Rebeldía y libertad: rechazo de las normas clásicas, mezcla de géneros y estilos.",
      "Temas: amor imposible, la muerte, la libertad, el destino, la soledad, lo sobrenatural.",
      "Ambientaciones nocturnas, ruinas, cementerios, paisajes tormentosos.",
      "Nacionalismo y costumbrismo: recuperación de tradiciones y leyendas.",
      "Evasión en el tiempo (Edad Media) y en el espacio (Oriente, tierras exóticas).",
    ],
    authors: [
      { name: "José de Espronceda", works: "La canción del pirata, El estudiante de Salamanca; poesía rebelde y apasionada." },
      { name: "Gustavo A. Bécquer", works: "Rimas (poesía intimista), Leyendas (relatos fantásticos). Romántico tardío." },
      { name: "Rosalía de Castro", works: "Cantares gallegos, En las orillas del Sar; poesía melancólica." },
      { name: "Duque de Rivas", works: "Don Álvaro o la fuerza del sino (1835), drama romántico." },
      { name: "José Zorrilla", works: "Don Juan Tenorio (1844), versión romántica del mito de Don Juan." },
      { name: "Mariano J. de Larra", works: "Vuelva usted mañana, El castellano viejo; crítica social mordaz." },
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
        <div key={i}>
          {/* SVG reveal divider */}
          <SVGReveal
            index={i}
            title={item.title}
            period={item.period}
          />

          {/* Card */}
          <TimelineCard
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

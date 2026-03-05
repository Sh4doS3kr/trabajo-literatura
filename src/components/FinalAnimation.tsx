import { motion } from "framer-motion";
import { Sparkles, BookOpen, Heart, Github } from "lucide-react";

const FinalAnimation = () => {
  const famousQuotes = [
    "Los libros son la voz de los que ya no pueden hablar.",
    "Leer es viajar sin moverse de casa.",
    "Un libro es un sueño que llevas en la mano.",
    "La literatura es el arte de poner palabras en los sentimientos."
  ];

  const currentQuote = famousQuotes[Math.floor(Math.random() * famousQuotes.length)];

  return (
    <motion.div
      className="relative overflow-hidden py-8 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2 }}
    >
      {/* Partículas flotantes de fondo */}
      <div className="absolute inset-0 flex justify-center items-center gap-8 opacity-20">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="relative"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          >
            {i % 3 === 0 && <Sparkles className="w-4 h-4 text-primary" />}
            {i % 3 === 1 && <BookOpen className="w-4 h-4 text-primary" />}
            {i % 3 === 2 && <Heart className="w-4 h-4 text-primary" />}
          </motion.div>
        ))}
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut",
            delay: 0.3
          }}
          className="space-y-4"
        >
          {/* Línea decorativa superior */}
          <motion.div
            className="flex items-center justify-center gap-3"
            initial={{ width: 0 }}
            whileInView={{ width: "auto" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div 
              className="h-px bg-gradient-to-r from-transparent via-primary to-transparent"
              initial={{ width: 0 }}
              whileInView={{ width: "60px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            />
            <motion.span
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="text-2xl text-primary"
            >
              ✦
            </motion.span>
            <motion.div 
              className="h-px bg-gradient-to-r from-transparent via-primary to-transparent"
              initial={{ width: 0 }}
              whileInView={{ width: "60px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
            />
          </motion.div>

          {/* Frase famosa con animación de escritura */}
          <motion.h2
            className="font-display text-xl md:text-2xl text-primary-foreground italic leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <motion.span
              className="inline-block"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 1.3, ease: "easeInOut" }}
              style={{ overflow: "hidden", whiteSpace: "nowrap" }}
            >
              "{currentQuote}"
            </motion.span>
          </motion.h2>

          {/* Mensaje final */}
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 2.5 }}
          >
            <motion.p
              className="text-primary-foreground/50 text-xs md:text-sm font-body"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Alejandro Gutiérrez
            </motion.p>
            
            <motion.p
              className="text-muted-foreground text-sm font-display italic"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 3.2 }}
            >
              "Ser o no ser, esa es la cuestión"
            </motion.p>
            
            <motion.p
              className="text-muted-foreground text-sm font-display"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 3.5 }}
            >
              - William Shakespeare
            </motion.p>
            
            <motion.p
              className="text-muted-foreground/60 text-xs font-display mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 3.8 }}
            >
              Imágenes hechas con IA (Gemini Banana)
            </motion.p>
            
            <motion.a
              href="https://github.com/Sh4doS3kr/trabajo-literatura"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground/60 text-xs font-display mt-6 hover:text-muted-foreground transition-colors"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 4.1 }}
            >
              <Github className="w-3 h-3" />
              Ver código fuente en GitHub
            </motion.a>
          </motion.div>

          {/* Línea decorativa inferior */}
          <motion.div
            className="flex items-center justify-center gap-3 mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 3 }}
          >
            <motion.div 
              className="w-8 h-px bg-primary/30"
              animate={{
                scaleX: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div 
              className="w-8 h-px bg-primary/30"
              animate={{
                scaleX: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
          </motion.div>
        </motion.div>

        {/* Efecto de brillo sutil */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"
          animate={{
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  );
};

export default FinalAnimation;

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const descriptions = [
  "A passionate Full-Stack Developer with a strong interest in Artificial Intelligence. I specialize in building intelligent, data-driven web applications that leverage the power of AI to deliver personalized and cutting-edge user experiences.",
  "Expert in the MERN stack and modern frontend frameworks, with a growing proficiency in AI and Machine Learning. I enjoy integrating AI models into applications to create smarter, more efficient, and interactive solutions.",
  "From architecting robust and scalable backend systems to deploying machine learning models, my expertise covers the full spectrum of development. I am driven by the challenge of solving complex problems with innovative and intelligent software.",
  "A versatile developer with a passion for turning complex data into beautiful and functional user interfaces. I am always exploring new ways to combine my skills in web development and AI to build the next generation of intelligent applications."
];

const nameVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const name = "Kalpesh Dalal";

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % descriptions.length);
    }, 6000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
          initial="hidden"
          animate="visible"
        >
          {name.split("").map((char, i) => (
            <motion.span key={i} variants={nameVariants} custom={i}>
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <p className="text-xl md:text-2xl text-primary font-mono mb-12">
          &lt;Full-Stack Developer /&gt;
        </p>
        <div className="h-32">
          <AnimatePresence mode="wait">
            <motion.p
              key={descriptions[index]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-base md:text-lg text-gray-300"
            >
              {descriptions[index]}
            </motion.p>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
} 
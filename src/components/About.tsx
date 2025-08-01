import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.h2
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            About <span className="text-accent">Me</span>
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
                className="flex-shrink-0"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                 viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <img src="/img/1710506714139.jpeg" alt="Kalpesh Dalal" className="w-64 h-64 rounded-full border-4 border-accent object-cover shadow-lg" />
            </motion.div>
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                 viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <p className="text-lg text-gray-300 leading-relaxed">
                   I am a Full Stack Developer with 1.5 years of experience, specializing in developing robust and innovative web solutions. My expertise spans across frontend and backend development, where I leverage modern technologies to deliver high-quality software tailored to client needs. [cite_start]I am adept at integrating cutting-edge technologies to enhance product functionality and user experience. [cite: 25]
                </p>
                 <a href="/img/Kalpesh_Dalal_7038344755.pdf" download className="mt-6 inline-block px-6 py-2 bg-accent text-white font-bold rounded-full hover:bg-red-700 transition-all duration-300">
                    Download Resume
                </a>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
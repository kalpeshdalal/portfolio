import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        company: "SDLC Corp",
        role: "Full Stack Developer",
        duration: "June 2023 – Present",
        description: "Led the development of key projects including the Wadiaa Fintech Application, Artyfact NFT-Based Web3 Gaming Web App, and The Snuslife E-Commerce Delivery App."
    },
    {
        company: "Thetavega Tech Pvt Ltd",
        role: "Software Developer Intern",
        duration: "January 2023 – May 2023",
        description: "Designed and developed Thetavega Tech’s official website, incorporating modern technologies for a user-friendly and responsive design."
    }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Work <span className="text-accent">Experience</span></h2>
        <div className="relative wrap overflow-hidden p-10 h-full">
            <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{left: '50%'}}></div>
            {experiences.map((exp, index) => (
                 <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse left-timeline' : 'right-timeline'}`}>
                    <div className="order-1 w-5/12"></div>
                    <div className="z-20 flex items-center order-1 bg-accent shadow-xl w-8 h-8 rounded-full">
                        <h1 className="mx-auto font-semibold text-lg text-white">{index + 1}</h1>
                    </div>
                    <motion.div
                        className="order-1 bg-secondary rounded-lg shadow-xl w-5/12 px-6 py-4"
                        initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="font-bold text-white text-xl">{exp.role}</h3>
                        <p className="text-sm font-medium text-accent">{exp.company} | {exp.duration}</p>
                        <p className="text-sm leading-snug tracking-wide text-gray-300 mt-2">
                           [cite_start]{exp.description} [cite: 25]
                        </p>
                    </motion.div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
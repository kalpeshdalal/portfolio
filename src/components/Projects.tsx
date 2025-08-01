import React from 'react';
import { motion } from 'framer-motion';

const projectData = [
    { title: "Mair Group - Corporate Website", image: "/img/mair-logo.png", link: "https://www.mairgroup.com/en" },
    { title: "Wadiaa - Fintech Application", image: "/img/wadiaa-logo.png", link: "https://wadiaa.io/" },
    { title: "Artyfact - Gaming Store", image: "/img/artyfact-logo.png", link: "https://artyfact.game/" },
    { title: "The Snuslife - E-commerce", image: "/img/thesnuslife-logo.png", link: "https://thesnuslife.com/" },
    { title: "Bandog - NFT Marketplace", image: "/img/bandog-logo1.png", link: "https://test.bandogadvisor.com/" },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Recent <span className="text-accent">Projects</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projectData.map((project, index) => (
                <motion.div
                    key={index}
                    className="bg-primary rounded-lg overflow-hidden group"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -10 }}
                >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <div className="relative h-56">
                            <img src={project.image} alt={project.title} className="w-full h-full object-contain p-4"/>
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h3 className="text-white text-2xl font-bold">{project.title}</h3>
                            </div>
                        </div>
                    </a>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { projects } from "../data/projects";
import { Helmet } from "react-helmet-async";
export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <Helmet>
        <title>Projects Showcase | Kalpesh Dalal</title>
        <meta name="description" content="A showcase of my projects, including corporate websites, fintech apps, NFT marketplaces, and e-commerce platforms." />
      </Helmet>
      <h2 className="mb-16 text-center text-4xl font-bold">
        Projects <span className="text-[rgb(var(--color-primary))]">Showcase</span>
      </h2>
      <div className="mx-auto grid max-w-7xl gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Tilt scale={1.1} tiltMaxAngleX={30} tiltMaxAngleY={30} glareEnable={true} glareMaxOpacity={0.5} glareBorderRadius="16px" glareColor="rgb(var(--color-primary))" >
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-2xl bg-surface/50 backdrop-blur"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="absolute bottom-4 left-4 text-xl font-bold text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  {p.title}
                </h3>
              </a>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
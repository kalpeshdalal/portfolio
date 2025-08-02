import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <h2 className="mb-12 text-center text-3xl font-bold">
        Projects <span className="text-[rgb(var(--color-primary))]">Showcase</span>
      </h2>
      <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8}>
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
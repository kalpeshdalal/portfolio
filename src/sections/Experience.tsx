import { motion } from "framer-motion";
import { experiences } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="container mx-auto overflow-hidden">
        <h2 className="mb-16 text-center text-3xl md:text-4xl font-bold">
          My Professional <span className="text-[rgb(var(--color-primary))]">Journey</span>
        </h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute z-50 top-0 left-1/2 h-full w-1 -translate-x-1/2 bg-primary/30" />
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute top-0 left-1/2 h-full w-1 -translate-x-1/2 bg-primary"
          />
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`mb-12 flex items-center w-full ${i % 2 ? 'flex-row-reverse justify-end' : 'justify-start'}`}
            >
              <div className="w-full md:w-5/12">
                <div className={`p-6 rounded-lg shadow-2xl bg-surface/80 backdrop-blur-xl ${i % 2 ? 'text-left' : 'md:text-right'}`}>
                  <h3 className="font-bold text-xl">{exp.role}</h3>
                  <p className="text-md text-primary">{exp.company}</p>
                  <p className="text-xs text-gray-400 mb-4">{exp.duration}</p>
                  <p className="text-sm text-gray-300">{exp.description}</p>
                </div>
              </div>
              <div className="hidden md:flex w-2/12 justify-center">
                <div className="h-5 w-5 rounded-full bg-primary ring-4 ring-primary/30" />
              </div>
               <div className="hidden md:block w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
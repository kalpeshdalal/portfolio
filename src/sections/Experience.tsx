import { motion } from "framer-motion";
import { experiences } from "../data/experience";
import { Helmet } from "react-helmet-async";
export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6">
      <Helmet>
        <title>My Experience | Kalpesh Dalal</title>
        <meta name="description" content="My professional journey as a Full-Stack Developer, including my roles at D3V Technology Solutions, SDLC Corp, and Thetavega Tech." />
      </Helmet>
      <div className="container mx-auto overflow-hidden">
        <h2 className="mb-16 text-center text-3xl md:text-4xl font-bold">
          My Professional <span className="text-[rgb(var(--color-primary))]">Journey</span>
        </h2>
        <div className="relative max-w-4xl mx-auto">
          {/* Background line - place it at the back */}
          <div className="absolute z-0 top-0 left-1/2 h-full w-1 -translate-x-1/2 bg-primary/30" />

          {/* Animated line - place it above the background line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute z-10 top-0 left-1/2 h-full w-1 -translate-x-1/2 bg-primary"
          />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              // CHANGED: Add `relative` and a higher `z-index` to the item container
              className={`relative z-20 mb-12 flex items-center w-full ${i % 2 ? "flex-row-reverse justify-end" : "justify-start"}`}
            >
              <div className="w-full px-1 md:w-5/12">
                <div
                  style={{ boxShadow: "0px 0px 1px rgb(0,245,212)" }}
                  className={`p-6 rounded-lg backdrop-blur-md ${i % 2 ? "text-left" : "md:text-left"}`}
                >
                  <h3 className="font-bold text-xl">{exp.role}</h3>
                  <p className="text-md text-primary">{exp.company}</p>
                  <p className="text-xs text-gray-400 mb-4">{exp.duration}</p>
                  <div
                    className="text-sm text-gray-300 [&>ul]:list-disc [&>ul]:pl-4 [&>ul>li]:mb-2"
                    dangerouslySetInnerHTML={{ __html: exp.description }}
                  />
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
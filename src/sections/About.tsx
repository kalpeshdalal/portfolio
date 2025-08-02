import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../lib/variants";

export default function About() {
  return (
    <section id="about" className="py-28 px-6 overflow-hidden">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="container   mx-auto max-w-6xl grid gap-16 md:grid-cols-5 items-center"
      >
        <motion.div
          variants={fadeIn("right")}
          className="md:col-span-2"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src="/img/Image_20250802_153528_524.jpeg"
            alt="Kalpesh Dalal"
            className="rounded-lg object-cover shadow-2xl w-full"
          />
        </motion.div>
        <motion.div variants={fadeIn("left")} className="md:col-span-3 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            A Passionate <span className="text-primary">Full-Stack</span> Developer.
          </h2>
          <p className="text-gray-300 leading-relaxed text-md">
            With over 2.5 years of hands-on experience, I have a proven track record of designing, developing, and deploying robust, scalable, and secure web applications. My expertise spans the entire development lifecycle, from translating intricate UI/UX designs into pixel-perfect, interactive frontends to architecting and optimizing high-performance backend systems and RESTful APIs.
          </p>
           <p className="text-gray-300 leading-relaxed text-md">
           I am a firm believer in the power of AI and am passionate about integrating intelligent, data-driven features into my projects. I thrive in collaborative, agile environments and am dedicated to leveraging cutting-edge technologies like React, Node.js, and Python to solve complex problems and deliver exceptional user-first experiences. My goal is to not just write code, but to build digital solutions that make a tangible impact.
          </p>
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 16px rgb(0,245,212)" }}
            whileTap={{ scale: 0.95 }}
            style={{boxShadow: "0px 0px 4px rgb(0,245,212)"}}
            href="/Kalpesh-Dalal.pdf"
            download
            className="inline-block rounded-full bg-primary px-10 py-4 font-bold text-pretty text-lg"
          >
            Download My CV
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
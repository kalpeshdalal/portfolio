import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

export default function Contact() {
  return (
    <section className="py-32 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-xl text-center"
      >
        <h2 className="text-4xl font-bold">
          Let’s <span className="text-[rgb(var(--color-primary))]">Connect</span>
        </h2>
        <p className="my-4 text-gray-300">
          I’m currently accepting freelance & full-time opportunities.
        </p>
        <div className="flex items-center justify-center gap-4">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="mailto:kalpeshdalal305@gmail.com"
            className="rounded-full bg-[rgb(var(--color-primary))] p-4 text-black"
          >
            <FiMail size={24} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="https://github.com/kalpeshdalal"
            target="_blank"
            className="rounded-full bg-surface/50 p-4 text-white"
          >
            <FiGithub size={24} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="https://linkedin.com/in/kalpesh-dalal"
            target="_blank"
            className="rounded-full bg-surface/50 p-4 text-white"
          >
            <FiLinkedin size={24} />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
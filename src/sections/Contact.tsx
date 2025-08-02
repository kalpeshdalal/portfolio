import { motion } from "framer-motion";
import { useState } from "react";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import HireMeModal from "../components/HireMeModal";
import { Helmet } from "react-helmet-async";
// Define animation variants for a cleaner component structure
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Time delay between each child animation
    },
  },
};

const textVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
    },
  },
};

const iconVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  return (
    <section className="py-32 px-6">
      {/* Main container to orchestrate the animations */}
      <Helmet>
        <title>Contact Me | Kalpesh Dalal</title>
        <meta name="description" content="Let's connect! I'm currently accepting freelance and full-time opportunities. You can reach out to me via email or connect with me on GitHub and LinkedIn." />
      </Helmet>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="mx-auto max-w-xl text-center"
      >
        {/* Animated Heading */}
        <motion.h2 variants={textVariants} className="text-4xl font-bold">
          Let’s <span className="text-[rgb(var(--color-primary))]">Connect</span>
        </motion.h2>

        {/* Animated Paragraph */}
        <motion.p variants={textVariants} className="my-4 text-gray-300">
          I’m currently accepting freelance & full-time opportunities.
        </motion.p>

        {/* Animated container for social icons, also staggered */}
        <motion.div
          variants={containerVariants}
          className="flex items-center justify-center gap-4"
        >
          {/* Animated Icons with enhanced hover effect */}
          <motion.a
            variants={iconVariants}
            whileHover={{ scale: 1.15, y: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={openModal}
            className="rounded-full p-4 text-white"
          >
            <FiMail size={24} />
          </motion.a>

          <motion.a
            variants={iconVariants}
            whileHover={{ scale: 1.15, y: -5 }}
            whileTap={{ scale: 0.9 }}
            href="https://github.com/kalpeshdalal"
            target="_blank"
            className="rounded-full bg-surface/50 p-4 text-white"
          >
            <FiGithub size={24} />
          </motion.a>

          <motion.a
            variants={iconVariants}
            whileHover={{ scale: 1.15, y: -5 }}
            whileTap={{ scale: 0.9 }}
            href="https://linkedin.com/in/kalpesh-dalal"
            target="_blank"
            className="rounded-full bg-surface/50 p-4 text-white"
          >
            <FiLinkedin size={24} />
          </motion.a>
        </motion.div>
      </motion.div>
      <HireMeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </section>
  );
}
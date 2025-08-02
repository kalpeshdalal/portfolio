import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-surface/80 backdrop-blur-lg shadow-lg"
        style={{
          WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
        }}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            whileHover={{ rotateY: 180 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-primary"
          >
            <a href="#">KD.</a>

          </motion.div>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover="hover"
                className="relative"
              >
                <span
                  className="relative  z-10 text-primary hover:text-gray-300 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                  {link.name}
                </span>
                <motion.div
                  variants={{ hover: { scaleX: 1 } }}
                  initial={{ scaleX: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-[-4px] left-0 right-0 h-0.5 bg-primary origin-left"
                />
              </motion.a>
            ))}
          </nav>
          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgb(var(--color-primary) / 0.1)",
              boxShadow: "0 0 20px rgb(var(--color-primary) / 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:inline-block border-2 border-primary text-primary font-bold py-2 px-6 rounded-full transition-all"
          >
            Hire Me
          </motion.a>

          <div className="md:hidden">
            <motion.button
              onClick={toggleMenu}
              className="z-50 relative w-8 h-8 text-primary"
              animate={isMenuOpen ? "open" : "closed"}
              initial="closed"
            >
              {/* Top line */}
              <motion.span
                variants={{
                  closed: { y: -6, rotate: 0 },
                  open: { y: 0, rotate: 45 },
                }}
                className="absolute h-0.5 w-6 bg-current rounded-full"
                style={{ top: '50%', left: '50%', translateX: '-50%', translateY: '-50%' }}
              />
              {/* Middle line */}
              <motion.span
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                transition={{ duration: 0.1 }}
                className="absolute h-0.5 w-6 bg-current rounded-full"
                style={{ top: '50%', left: '50%', translateX: '-50%', translateY: '-50%' }}
              />
              {/* Bottom line */}
              <motion.span
                variants={{
                  closed: { y: 6, rotate: 0 },
                  open: { y: 0, rotate: -45 },
                }}
                className="absolute h-0.5 w-6 bg-current rounded-full"
                style={{ top: '50%', left: '50%', translateX: '-50%', translateY: '-50%' }}
              />
            </motion.button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-surface/95 backdrop-blur-lg"
          >
            <motion.div
              initial={{ y: "-100vh" }}
              animate={{ y: 0 }}
              exit={{ y: "-100vh" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="h-full flex flex-col items-center justify-center gap-8"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-3xl text-primary"
                  onClick={toggleMenu}
                >
                  {link.name}

                </a>
              ))}
              <motion.a
                href="#contact"
                onClick={toggleMenu}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgb(var(--color-primary) / 0.1)",
                  boxShadow: "0 0 20px rgb(var(--color-primary) / 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 border-2 border-primary text-primary font-bold py-3 px-8 rounded-full transition-all"
              >
                Hire Me
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence >
    </>
  );
}
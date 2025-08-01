import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Get In <span className="text-accent">Touch</span></h2>
        <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
        </motion.p>
        <motion.a
            href="mailto:kalpeshdalal305@gmail.com"
            className="inline-block px-10 py-4 bg-accent text-white font-bold rounded-full hover:bg-red-700 transition-all duration-300 transform hover:scale-110"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
        >
            Say Hello
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;
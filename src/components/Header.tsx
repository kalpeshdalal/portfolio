import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                scrolled ? 'bg-secondary shadow-lg' : 'bg-transparent'
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto flex justify-between items-center p-4 text-gray-200">
                <a href="#hero" className="text-2xl font-bold">
                    <h1><span>K</span>alpesh <span>D</span>alal</h1>
                </a>
                <nav className="hidden md:flex space-x-6">
                    <a href="#about" className="hover:text-accent transition-colors">About</a>
                    <a href="#experience" className="hover:text-accent transition-colors">Experience</a>
                    <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
                    <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
                </nav>
            </div>
        </motion.header>
    );
};

export default Header;
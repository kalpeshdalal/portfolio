import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id='contact' className="bg-secondary py-6">
      <div className="container mx-auto text-center text-gray-400">
        <p>Copyright © 2024 Kalpesh Dalal. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
            <a href="https://github.com/kalpeshdalal" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                GitHub
            </a>
            <a href="https://www.linkedin.com/in/kalpesh-dalal-2a4557208/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                LinkedIn
            </a>
            <a href="https://www.instagram.com/kalpesh_jain.10/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                Instagram
            </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
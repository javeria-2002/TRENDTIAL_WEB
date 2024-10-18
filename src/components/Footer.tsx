import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 relative overflow-hidden">
      <div className="container mx-auto px-8 relative z-10">
        {/* Top Section with Logo and Social Links */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          {/* Logo */}
          <motion.div
            className="mb-4 md:mb-0 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#" aria-label="Trendtial" className="text-3xl font-extrabold tracking-widest uppercase">
              <span className="text-white">Tr</span>
              <span className="text-red-500">e</span>
              <span className="text-white">ndtial</span>
            </a>
            <p className="mt-1 text-gray-400 text-base">Your vision, our execution</p>
          </motion.div>
          
          {/* Social Media Icons */}
          <motion.div
            className="flex space-x-6 text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a href="#" className="hover:text-red-500 transition-all duration-300 ease-in-out">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-red-500 transition-all duration-300 ease-in-out">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-red-500 transition-all duration-300 ease-in-out">
              <FaInstagram />
            </a>
          </motion.div>
        </div>

        {/* Navigation Links */}
        <motion.nav
          className="flex justify-center space-x-8 text-sm mb-4 md:mb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          aria-label="Footer Navigation"
        >
          <a href="#" className="hover:text-red-500 transition-colors duration-300 ease-in-out">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-red-500 transition-colors duration-300 ease-in-out">
            Terms of Service
          </a>
          <a href="#" className="hover:text-red-500 transition-colors duration-300 ease-in-out">
            Contact
          </a>
        </motion.nav>

        {/* Copyright */}
        <motion.div
          className="mt-6 text-center text-gray-400 text-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          © {new Date().getFullYear()} Trendtial. All rights reserved.
        </motion.div>
      </div>

      {/* Gradient Line */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 shadow-md"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </footer>
  );
};

export default Footer;

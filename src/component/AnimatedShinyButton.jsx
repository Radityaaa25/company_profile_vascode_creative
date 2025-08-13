import { motion } from 'framer-motion';
import './animatedShinyButton.css';

// --- VARIAN INI TELAH DIPERBAIKI ---
// Sekarang hanya mengatur opacity dan delay, TANPA gerakan 'y'
const buttonContainerVariants = {
  hidden: { opacity: 0 }, // Mulai dari tidak terlihat
  visible: {
    opacity: 1, // Menjadi terlihat
    transition: {
      duration: 0.5,
      delay: 1.5,          // Waktu kapan tombol mulai muncul
      staggerChildren: 0.1, // Jeda untuk setiap kata di dalamnya
    },
  },
};

// Varian untuk teks blur tetap sama
const buttonTextVariants = {
  hidden: { opacity: 0, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.6 },
  },
};

const AnimatedShinyButton = ({ href, className, text, children }) => {
  const words = text.split(" ");

  return (
    <motion.a
      href={href}
      className={`${className} animated-shiny-button`}
      variants={buttonContainerVariants}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span key={index} variants={buttonTextVariants}>
          {word}
        </motion.span>
      ))}
      {children}
    </motion.a>
  );
};

export default AnimatedShinyButton;
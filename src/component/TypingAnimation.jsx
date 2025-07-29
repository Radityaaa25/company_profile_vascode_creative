import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TypingAnimation = ({ texts }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[textIndex];
      
      if (isDeleting) {
        setDisplayedText(currentText.substring(0, displayedText.length - 1));
      } else {
        setDisplayedText(currentText.substring(0, displayedText.length + 1));
      }

      if (!isDeleting && displayedText === currentText) {
        setTimeout(() => setIsDeleting(true), 2000); 
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    };

    const typingSpeed = isDeleting ? 100 : 200;
    const timeout = setTimeout(handleTyping, typingSpeed);
    
    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, textIndex, texts]);

  const cursorVariants = {
    blinking: {
      opacity: [0, 1, 0],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatDelay: 0,
        ease: "linear",
        times: [0, 0.5, 1]
      }
    }
  };

  return (
    // PERUBAHAN DI SINI: Hapus semua tinggi (h-, min-h-) dan ganti dengan margin-bottom
    <h1 className="lg:text-4xl/tight text-2xl font-medium mb-4">
      <span>Kami Melayani </span>
      <span className="font-bold text-sky-400">{displayedText}</span>
      <motion.span
        variants={cursorVariants}
        animate="blinking"
        className="inline-block h-10 w-1 bg-sky-400 ml-1 translate-y-2"
      />
    </h1>
  );
};

export default TypingAnimation;
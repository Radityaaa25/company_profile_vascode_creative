import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollRevealParagraph = ({ text }) => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // --- PERUBAHAN UNTUK MEMPERLAMBAT ANIMASI ---
    // Animasi sekarang berjalan di rentang yang lebih panjang (dari 90% ke 20%)
    // Ini akan membuat efek munculnya teks terasa lebih lambat dan halus
    offset: ["start 70%", "start 10%"] 
  });

  const words = text.split(" ");

  return (
    <p
      ref={containerRef}
      // --- PERUBAHAN UNTUK UKURAN FONT ---
      className="text-center text-lg md:text-xl lg:text-2xl/relaxed max-w-5xl mx-auto mt-12 flex flex-wrap"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        
        return (
          <Word key={i} scrollYProgress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};

const Word = ({ children, scrollYProgress, range }) => {
  const opacity = useTransform(scrollYProgress, range, [0.2, 1]);
  
  return (
    <motion.span 
      className="mr-3 mt-3"
      style={{ opacity: opacity }}
    >
      {children}
    </motion.span>
  );
};

export default ScrollRevealParagraph;
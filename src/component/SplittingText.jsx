import { motion } from 'framer-motion';

// Varian untuk kontainer utama
const containerVariants = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
  }),
};

// Varian untuk setiap kata
const wordVariants = {
  hidden: {
    opacity: 0,
    y: "100%",
  },
  visible: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const SplittingText = ({ text }) => {
  const words = text.split(" ");

  return (
    <motion.h1
      className='text-center lg:text-5xl/tight text-3xl font-medium mb-7 overflow-hidden'
      variants={containerVariants}
      initial="hidden"
      // --- PERUBAHAN UTAMA ADA DI SINI ---
      whileInView="visible" // Memicu animasi saat elemen terlihat
      viewport={{ once: true }} // Menjalankan animasi hanya sekali
    >
      {words.map((word, index) => (
        <span key={index} className="inline-block mr-4" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}>
          <motion.span
            className="inline-block"
            variants={wordVariants}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.h1>
  );
};

export default SplittingText;
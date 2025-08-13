import { useRef } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from 'framer-motion';
import { wrap } from '@motionone/utils';

const VelocityText = ({ children, baseVelocity = 100 }) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  // --- PERUBAHAN UTAMA ADA DI SINI ---
  // Kita ubah nilai kecepatan scroll menjadi nilai kemiringan (skew)
  // Semakin cepat scroll, semakin miring teksnya
  const skewX = useTransform(
    smoothVelocity,
    [-1500, 1500], // Rentang kecepatan scroll (bisa disesuaikan)
    [-15, 15]      // Rentang kemiringan dalam derajat
  );
  // ------------------------------------

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="w-full overflow-hidden whitespace-nowrap flex">
      <motion.div
        className="font-bold uppercase text-4xl md:text-6xl lg:text-8xl tracking-tighter"
        // Terapkan nilai kemiringan di sini
        style={{ x, skew: skewX }}
      >
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
};

export default VelocityText;
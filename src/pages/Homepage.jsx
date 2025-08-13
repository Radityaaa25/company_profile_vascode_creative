import Heroimage from '../assets/images/hero.svg';
import Proyek1 from '../assets/images/proyek-1.webp';
import Proyek2 from '../assets/images/proyek-2.webp';
import Proyek3 from '../assets/images/proyek-3.webp';
import Proyek4 from '../assets/images/proyek-4.webp';
import Proyek5 from '../assets/images/proyek-5.webp';

import { motion } from 'framer-motion';
import TypingAnimation from '../component/TypingAnimation';
import VelocityText from '../component/VelocityText';
import SplittingText from '../component/SplittingText';
import ShinyButton from '../component/ShinyButton';
import AnimatedShinyButton from '../component/AnimatedShinyButton';
import ScrollRevealParagraph from '../component/ScrollRevealParagraph';

// --- VARIAN ANIMASI BARU UNTUK EFEK BLUR ---
const blurTitleContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }, // Jeda antar kata
  },
};

const blurTitleWord = {
  hidden: { opacity: 0, filter: 'blur(10px)' }, // Mulai dengan blur
  visible: {
    opacity: 1,
    filter: 'blur(0px)', // Hilangkan blur
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};
// ---------------------------------------------


const HomePage = () => {
  const servicesText = ["Desain Grafis", "Web Development", "Video/Fotografi", "Editing Video"];
  const mainTitle = "Selamat Datang di Company Profile Kami Vascode Creative".split(" ");

  return (
    <div className="homepage pb-10 relative">
      <div className="container mx-auto px-4">
        {/* HERO SECTION */}
        <div className="hero grid md:grid-cols-2 grid-cols-1 items-center gap-24 pt-32">
          <div className="box">

            {/* --- JUDUL UTAMA DENGAN ANIMASI BLUR --- */}
            <motion.h1
              className='lg:text-5xl/tight text-3xl font-medium mb-4'
              variants={blurTitleContainer}
              initial="hidden"
              animate="visible"
            >
              {mainTitle.map((word, index) => (
                <motion.span
                  key={index}
                  className={`inline-block mr-3 ${word === 'Vascode' || word === 'Creative' ? 'font-bold text-sky-400 underline' : ''}`}
                  variants={blurTitleWord}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }} // Delay disesuaikan
            >
              <TypingAnimation texts={servicesText} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.7 }} // Delay disesuaikan
            >
              <AnimatedShinyButton
              href="#about"
              className='py-3 px-6 text-lg text-white shadow rounded-full bg-sky-400 hover:bg-sky-500 transition-all'
              text="Tentang Kami"
            >
              <motion.i
                className="ri-eye-line"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.1 }}
              />
            </AnimatedShinyButton>
            </motion.div>

          </div>

          <motion.div
            className="box"
            variants={blurTitleWord} // Menggunakan varian blur yang sama dengan kata
            initial="hidden"
            animate="visible"
          >
            <img src={Heroimage} alt="Hero Image" className='md:w-full w-[400px] mx-auto md:m-0' />
          </motion.div>
        </div>
      </div>

      {/* === BAGIAN TENTANG KAMI === */}
      <div className="about md:pt-48 pt-32 relative" id='about'>
        <div className="container mx-auto px-4">
           <SplittingText text="Tentang Kami" />
        </div>

        <VelocityText baseVelocity={-2}>FOTO/VIDEOGRAFI & EDITING FOTO/VIDEO</VelocityText>
        <VelocityText baseVelocity={2}>DESAIN GRAFIS & WEB DEVELOPMENT</VelocityText>

        <div className="container mx-auto px-4">
          <ScrollRevealParagraph 
            // --- GANTI TEKS DI SINI DENGAN YANG LEBIH PANJANG ---
            text="Vascode Creative adalah agensi kreatif yang berdedikasi untuk memberikan solusi digital inovatif. Kami menggabungkan keahlian teknis dengan visi artistik untuk menghasilkan karya yang tidak hanya menarik secara visual, tetapi juga fungsional dan berdampak. Tim kami terdiri dari para profesional berpengalaman di bidang desain, pengembangan, dan strategi digital, yang siap membantu merek Anda tumbuh dan bersinar di tengah persaingan yang ketat. Kami percaya bahwa setiap proyek adalah kesempatan untuk menciptakan sesuatu yang luar biasa."
          />
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* === BAGIAN LAYANAN === */}
        <div className="services pt-32 relative" id='services'>
          <h1 className='text-center lg:text-5xl/tight text-3xl font-medium mb-2'>Layanan</h1>
          <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
          <div className="service-box pt-12 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            <div className="box bg-sky-400 rounded-lg shadow p-4">
              <i className="ri-number-1 text-3xl text-white"></i>
              <h3 className='text-xl font-bold text-white mt-6 mb-2'>Service Name 1</h3>
              <p className='text-white text-base/loose'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid quaerat laborum nobis doloribus neque expedita?</p>
            </div>
            <div className="box bg-sky-400 rounded-lg shadow p-4">
              <i className="ri-number-2 text-3xl text-white"></i>
              <h3 className='text-xl font-bold text-white mt-6 mb-2'>Service Name 2</h3>
              <p className='text-white text-base/loose'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid quaerat laborum nobis doloribus neque expedita?</p>
            </div>
            <div className="box bg-sky-400 rounded-lg shadow p-4">
              <i className="ri-number-3 text-3xl text-white"></i>
              <h3 className='text-xl font-bold text-white mt-6 mb-2'>Service Name 3</h3>
              <p className='text-white text-base/loose'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid quaerat laborum nobis doloribus neque expedita?</p>
            </div>
          </div>
        </div>

        {/* === BAGIAN PROYEK === */}
        <div className="proyek pt-32 relative" id='proyek'>
          <h1 className='text-center lg:text-5xl/tight text-3xl font-medium mb-2'>Proyek</h1>
          <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
          <div className="proyek-box pt-12 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            <div className="box p-2 bg-white shadow">
              <img src={Proyek1} alt="Proyek Image" className='w-full h-[220px]' />
              <h3 className='text-xl font-bold mt-6 mb-2'>Proyek Name 1</h3>
              <p className='text-base/loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil accusamus quia adipisci ad tempore libero!</p>
            </div>
            <div className="box p-2 bg-white shadow">
              <img src={Proyek2} alt="Proyek Image" className='w-full h-[220px]' />
              <h3 className='text-xl font-bold mt-6 mb-2'>Proyek Name 2</h3>
              <p className='text-base/loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil accusamus quia adipisci ad tempore libero!</p>
            </div>
            <div className="box p-2 bg-white shadow">
              <img src={Proyek3} alt="Proyek Image" className='w-full h-[220px]' />
              <h3 className='text-xl font-bold mt-6 mb-2'>Proyek Name 3</h3>
              <p className='text-base/loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil accusamus quia adipisci ad tempore libero!</p>
            </div>
            <div className="box p-2 bg-white shadow">
              <img src={Proyek4} alt="Proyek Image" className='w-full h-[220px]' />
              <h3 className='text-xl font-bold mt-6 mb-2'>Proyek Name 4</h3>
              <p className='text-base/loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil accusamus quia adipisci ad tempore libero!</p>
            </div>
            <div className="box p-2 bg-white shadow">
              <img src={Proyek5} alt="Proyek Image" className='w-full h-[220px]' />
              <h3 className='text-xl font-bold mt-6 mb-2'>Proyek Name 5</h3>
              <p className='text-base/loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil accusamus quia adipisci ad tempore libero!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;
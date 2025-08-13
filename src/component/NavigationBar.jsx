import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ShinyText from "./ShinyText";
import ShinyButton from './ShinyButton';

const navLinks = [
  { href: "#home", text: "Beranda", icon: "ri-home-2-line" },
  { href: "#about", text: "Tentang Kami", icon: "ri-information-line" },
  { href: "#services", text: "Layanan", icon: "ri-customer-service-line" },
  { href: "#proyek", text: "Proyek", icon: "ri-image-line" },
  { href: "#kontak", text: "Kontak", icon: "ri-phone-line" },
];

// Varian animasi dengan durasi lebih lama
const navContainerVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8, // Durasi kontainer diperpanjang
      ease: "easeOut",
      staggerChildren: 0.2, // Jeda antar elemen diperpanjang
    },
  },
};

const navItemVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6, // Durasi setiap item diperpanjang
      ease: "easeOut",
    },
  },
};

const NavigationBar = () => {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  const handleClick = () => {
    setShow(!show);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 5);
      if (window.scrollY < 200) {
        setActiveSection("#home");
      }
    };

    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && window.scrollY >= 200) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    navLinks.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollActive = scroll
    ? "py-4 mt-2 bg-white/50 dark:bg-slate-80/80 backdrop-blur-lg shadow-md border-b border-x border-slate-200/80 rounded-b-3xl"
    : "py-6";

  const menuActive = show ? "left-0" : "-left-full";

  return (
    <motion.div
      className={`navbar fixed w-full transition-all duration-300 z-50 ${scrollActive}`}
      variants={navContainerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4">
        <div className="navbar-box flex items-center justify-between">
          <motion.div className="logo" variants={navItemVariants}>
            <ShinyText>
            <h1 className="text-2xl font-black">Vascode</h1>
            </ShinyText>
          </motion.div>
          <ul
            className={`flex lg:gap-12 md:static md:flex-row md:shadow-none md:bg-transparent md:w-auto md:h-full md:translate-y-0 md:text-black md:p-0 md:m-0 md:transition-none gap-8 fixed ${menuActive} top-1/2 -translate-y-1/2 flex-col px-8 py-6 rounded shadow-lg shadow-slate-300 bg-sky-400 font-bold text-white transition-all`}
          >
            {navLinks.map((link) => (
              <motion.li
                key={link.href}
                className="flex items-center gap-3"
                variants={navItemVariants}
              >
                <i className={`${link.icon} text-2xl md:hidden block`}></i>
                <a
                  href={link.href}
                  onClick={() => setActiveSection(link.href)}
                  className={`
                    font-medium transition-all duration-300
                    hover:font-bold hover:opacity-100
                    ${
                      activeSection === link.href
                        ? "font-bold opacity-100 underline decoration-sky-400 decoration-2 underline-offset-8"
                        : "opacity-75"
                    }
                  `}
                >
                  {link.text}
                </a>
              </motion.li>
            ))}
          </ul>
          <motion.div
            className="social flex items-center gap-2"
            variants={navItemVariants}
          >
            <ShinyButton
              href="#social"
              className="bg-sky-400 px-4 py-2 rounded-full text-white font-bold hover:bg-sky-500 transition-all"
            >
              Social Media
            </ShinyButton>
            <i
              className="ri-menu-3-line text-3xl md:hidden block"
              onClick={handleClick}
            ></i>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default NavigationBar;
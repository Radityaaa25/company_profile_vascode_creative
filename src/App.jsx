import Navbar from "./component/NavigationBar";
import Footer from "./component/Footer";
import Homepages from "./pages/Homepage";
import { motion } from 'framer-motion';

function App() {
  return (
     <div>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Navbar/>
      </motion.div>

      {/* Content */}
      <Homepages/>

      {/* Footer */}
      <Footer/>

    </div>
  );
}

export default App;
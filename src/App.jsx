import Navbar from "./component/NavigationBar";
import Footer from "./component/Footer";
import Homepages from "./pages/Homepage";
// Hapus import motion
// import { motion } from 'framer-motion';

function App() {
  return (
     <div>
      {/* Hapus motion.div wrapper di sini */}
      <Navbar/>

      {/* Content */}
      <Homepages/>

      {/* Footer */}
      <Footer/>

    </div>
  );
}

export default App;
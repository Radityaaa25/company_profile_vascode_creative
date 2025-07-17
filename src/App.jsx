import Navbar from "./component/navbar";
import Footer from "./component/footer";
import Homepages from "./pages/homepages";

function App() {
  return (
     <div>
      
      {/* Navbar */}
      <Navbar/>


      {/* Content */}
      <Homepages/>
      

      {/* Footer */}
      <Footer/>


    </div>
  );
}

export default App;
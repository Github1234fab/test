import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Logement from "./pages/Logement/Logement";
import Erreur from "./pages/Erreur/Erreur";
import Footer from "./components/Footer/Footer";

function router (){

        return (
            <Router>
              <Header />
              <Routes>
                <Route path="/" element={<Home />}></Route>   
                <Route path="/a_propos/" element={<About />}></Route>   
                <Route path="/logements/:id" element={<Logement />}></Route>   
                <Route path="*" element={<Erreur/>}></Route>   
              </Routes>
              <Footer />
          </Router>
          
          );

}

export default router;
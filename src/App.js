import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Tarifs from './pages/Tarifs';
import Contact from './pages/Contact';
import Reservation from './pages/Reservation';
import Avis from './pages/Avis';
import Pourquoi from './pages/Pourquoi';



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/tarifs" element={<Tarifs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/avis" element={<Avis />} />
        <Route path="/pourquoi" element={<Pourquoi />} />
      </Routes>
    </>
  );
}

export default App;

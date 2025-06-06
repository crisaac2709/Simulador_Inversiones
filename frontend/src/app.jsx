import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Simulador } from "./pages/Simulador";
import { Instituciones } from "./pages/Instituciones";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/simulador" element={<Simulador />} />
        <Route path="/instituciones" element={<Instituciones />} />
        <Route path="/contacto" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

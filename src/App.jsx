import Navbar from "./components/Navbar";
import { InicioPage } from "./pages/InicioPage";
import { PerfilPage } from "./pages/PerfilPage";
import { EstudiosPage } from "./pages/EstudiosPage";
import { ExperienciaPage } from "./pages/ExperienciaPage";
import { ProyectosPage } from "./pages/ProyectosPage";
import { ContactoPage } from "./pages/ContactoPage";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <section id="inicio" className="bg-gradient-to-r from-custom-bg-n1 via-custom-bg-n2 to-custom-bg-n3">
        <InicioPage />
      </section>
      <section id="perfil" className="bg-gradient-to-r from-custom-gradient-n1 via-custom-gradient-n2 to-custom-gradient-n3">
        <PerfilPage />
      </section>
      <section id="experiencia" className="bg-gradient-to-r from-custom-bg-n1 via-custom-bg-n2 to-custom-bg-n3">
        <ExperienciaPage />
      </section>
      <section id="estudios" className="bg-gradient-to-r from-custom-gradient-n1 via-custom-gradient-n2 to-custom-gradient-n3">
        <EstudiosPage />
      </section>
      
      <section id="proyectos" className="bg-gradient-to-r from-custom-bg-n1 via-custom-bg-n2 to-custom-bg-n3 h-auto">
        <ProyectosPage />
      </section>
      <section id="contacto" className="bg-gradient-to-r from-custom-gradient-n1 via-custom-gradient-n2 to-custom-gradient-n3">
        <ContactoPage />
      </section>
      <Footer />
    </>
  );
}

export default App;

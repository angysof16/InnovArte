import Navbar from "./components/Navbar";
import { InicioPage } from "./pages/InicioPage";
import { CcsjPage } from "./pages/CcsjPage";
import { HistoriaPage } from "./pages/HistoriaPage";
import { RemembranzasPage } from "./pages/RemembranzasPage";
import { ContactoPage } from "./pages/ContactoPage";
import { EmailPage } from "./pages/EmailPage";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      {/* <section id="inicio" className=" bg-gradient-to-r from-slate-200 via-slate-300 to-slate-400"> */}
      <section id="inicio" className="w-full bg-slate-200">
        <InicioPage />
      </section>

      <section id="ccsj" className="bg-slate-300">
        <CcsjPage />
      </section>

      <section id="historia" className="bg-slate-200">
        <HistoriaPage />
      </section>

      <section id="remembranzas" className="bg-slate-300">
        <RemembranzasPage />
      </section>

      <section id="contacto" className="bg-slate-200">
        <ContactoPage />
      </section>

      <section id="contacto" className="bg-slate-300">
        <EmailPage />
      </section>
      <Footer />

    </>
  );
}

export default App;

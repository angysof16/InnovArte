import React from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="flex flex-wrap items-center justify-between px-2 py-3 bg-gradient-to-b from-navbar-gradient-n1 via-navbar-gradient-n2 to-navbar-gradient-n1 mb-3 fixed w-full">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <img src="https://firebasestorage.googleapis.com/v0/b/landing-page-35209.appspot.com/o/logo-b.png?alt=media&token=09d27f90-aa5a-42ab-b685-aa14a9735839" alt="Logo" className="block h-14 w-auto rounded-lg absolute" />
            <a
              className="text-xl font-mono font-bold leading-relaxed inline-block ml-24 mr-4 py-2 whitespace-nowrap uppercase text-custom-white"
              href="/"
            >
              Sofia Guerra Jiménez
            </a>
            
            <button
              className="text-custom-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <Link
                smooth
                spy
                to="inicio"
              >
                <span className="ml-2 text-custom-white text-xl">
                  Inicio
                </span>
              </Link>
              <Link
                smooth
                spy
                to="perfil"
              >
                <span className="ml-2 text-custom-white text-xl">
                  Perfil
                </span>
              </Link>
              
              <Link
                smooth
                spy
                to="experiencia"
              >
                <span className="ml-2 text-custom-white text-xl">
                  Experiencia
                </span>
              </Link>
              <Link
                smooth
                spy
                to="estudios"
              >
                <span className="ml-2 text-custom-white text-xl">
                  Estudios
                </span>
              </Link>
              <Link
                smooth
                spy
                to="proyectos"
              >
                <span className="ml-2 text-custom-white text-xl">
                  Proyectos
                </span>
              </Link>
              <Link
                smooth
                spy
                to="contacto"
              >
                <span className="ml-2 text-custom-white text-xl">
                  Contacto
                </span>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

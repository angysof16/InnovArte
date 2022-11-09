import React from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="flex flex-wrap items-center justify-between px-2 py-3 bg-sky-700 mb-3 fixed w-full">
        <div className="container font-xanh font-semibold px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <img src="https://firebasestorage.googleapis.com/v0/b/landing-page-35209.appspot.com/o/csj-logo.png?alt=media&token=95209d85-6cfc-4f83-b7db-f25ca41763d0" alt="Logo" className="block h-14 w-auto rounded-lg absolute" />
            <a
              className=" align-center text-center text-xl font-bold leading-relaxed inline-block ml-24 mr-4 py-2 whitespace-nowrap text-custom-white"
              href="/"
            >
                Colegio Campestre San José · InnovArte
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
                to="ccsj"
              >
                <span className="ml-2 text-custom-white text-xl">
                  CCSJ
                </span>
              </Link>
              
              <Link
                smooth
                spy
                to="historia"
              >
                <span className="ml-2 text-custom-white text-xl">
                  Historia
                </span>
              </Link>
              <Link
                smooth
                spy
                to="remembranzas"
              >
                <span className="ml-2 text-custom-white text-xl">
                  Remembranzas
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

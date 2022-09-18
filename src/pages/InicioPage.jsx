import React from "react";
import { Face } from "../components/MyPhoto";
import { Link } from "react-scroll";

export const InicioPage = () => {
  return (
    <div className="flex pt-24 mx-12 pb-8 items-center">
      <div className="w-1/2 p-4">
        <h1 className=" mb-10 pl-8 pr-30 font-mono text-8xl">¡Hola!</h1>
        <h1 className=" mb-16 pl-8 pr-30 font-mono text-xl">
          Mi nombre es Sofia Guerra. <br />
          Soy bachiller con experiencia en programación en Python, JavaScript,
          HTML y CSS.
        </h1>
        <div className="ml-6">
          <Link smooth spy to="perfil">
            <button className="bg-button-color text-custom-white px-20 py-2 rounded-3xl mr-2">Perfil</button>
          </Link>

          <a
            href="https://github.com/angysof16"
            target="_blank"
            rel="noreferrer"
          >
            <button className="bg-button-color text-custom-white px-20 py-2 rounded-3xl">
              GitHub
            </button>
          </a>
        </div>
      </div>
      <div className="w-1/2 p-4 bg-blue-600">
        <Face />
      </div>
    </div>
  );
};

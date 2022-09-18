import React from "react";
import { VectorPerfil } from "../components/VectorPerfil";

export const PerfilPage = () => {
  return (
    <>
      <h1 className="text-center pt-10 font-mono font-normal text-8xl">
        Perfil
      </h1>
      <div className="flex mt-20 mx-12 pb-16 items-center">
        <div className="w-1/3 p-4 bg-blue-600 self-start">
          <VectorPerfil />
        </div>

        <div className="w-1/3 p-4">
          <h1 className="font-mono font-normal text-4xl">Aptitudes</h1> <br />
          <h1 className="font-mono text-xl">
            - Paciencia. <br />
            - Adaptabilidad. <br />
            - Integridad. <br />
            - Experiencia. <br />- Capacidad para resolver problemas.
          </h1>
        </div>

        <div className="w-1/3 p-4 self-start">
          <h1 className="font-mono font-normal text-4xl">Idiomas</h1> <br />
          <h1 className="font-mono text-xl">
            - Español (Lengua materna). <br />- Inglés (C1).
          </h1>
        </div>
      </div>
    </>
  );
};

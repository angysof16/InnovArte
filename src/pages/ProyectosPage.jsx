import { MyCard } from "../components/MyCard";
import { proyectos } from "../database/proyectos";

export const ProyectosPage = () => {
  return (
    <>
      <div className=" pb-10">
        <h1 className="text-center pt-10 font-mono font-normal text-8xl">
          Proyectos
        </h1>
        {proyectos.map((proyecto) => (
          <MyCard
            key={proyecto.id}
            url={proyecto.url}
            titulo={proyecto.titulo}
            descripcion={proyecto.descripcion}
            url_preview={proyecto.url_preview}
            url_github={proyecto.url_github}
          />
        ))}
      </div>
    </>
  );
};

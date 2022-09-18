import { MyStudies } from "../components/MyStudies";
import { estudios } from "../database/estudios";

export const EstudiosPage = () => {
  return (
    <>
      <h1 className="text-center pt-10 pb-8 font-mono font-normal text-8xl">
        Estudios
      </h1>
      {estudios.map((estudio) => (
        <MyStudies
          key={estudio.id}
          url={estudio.url}
          titulo={estudio.titulo}
          descripcion={estudio.descripcion}
          
        />
      ))}
    </>
  );
};

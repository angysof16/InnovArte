export const MyStudies = ({ url_preview, url, titulo, descripcion }) => {
  return (
    <div>
      <div className="flex justify-center content-center text-center">
        <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-navbar-gradient-n1 shadow-lg mb-16">
          <div className="w-1/2 mt-2">
            <a href={url_preview} target="_blank" rel="noreferrer">
              <img
                className="m-2 min-w-max h-auto md:h-auto object-cover md:w-14 rounded-t-lg md:rounded-none md:rounded-l-lg"
                src={url}
                alt={titulo}
              />
            </a>
          </div>

          <div className="p-6 flex flex-col justify-start mt-4">
            <h5 className="text-custom-white text-xl font-bold mb-2 font-mono">
              {titulo}
            </h5>
            <p className="text-custom-white text-base mb-4">{descripcion}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const MyCard = ({
  url,
  titulo,
  descripcion,
  url_preview,
  url_github,
}) => {
  return (
    <div className="m-6 background-animate px-20 py-16 rounded-2xl shadow-2xl bg-gradient-to-t from-custom-gradient-n1 via-custom-gradient-n3 to-navbar-gradient-n2">
      <img src={url} className="rounded-2xl mx-auto mb-8 shadow-2xl" />
      <h1 className="font-bold text-2xl mb-6 font-mono">{titulo}</h1>
      <h1 className="mb-8 w-7/12 font-medium">{descripcion}</h1>

      <a href={url_preview} target="_blank" rel="noreferrer">
        <button className="bg-button-color text-custom-white px-20 py-2 rounded-3xl mr-2">
          Visitar
        </button>
      </a>

      <a href={url_github} target="_blank" rel="noreferrer">
        <button className="bg-button-color text-custom-white px-20 py-2 rounded-3xl">
          GitHub
        </button>
      </a>
    </div>
  );
};

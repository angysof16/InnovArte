import { CardContacto } from "../components/CardContacto";
import { contacto } from "../database/contacto";

export const ContactoPage = () => {
  return (
    <>
      <div>
        <h1 className="text-center pt-10 pb-8 font-xanh font-semibold text-8xl">
          Contáctanos
        </h1>

        <div>
          {contacto.map((contacto) => (
            <CardContacto
              imagen={contacto.imagen}
              nombre={contacto.nombre}
              alias={contacto.alias}
              link={contacto.link}
            />
          ))}
        </div>
      </div>
    </>
  );
};

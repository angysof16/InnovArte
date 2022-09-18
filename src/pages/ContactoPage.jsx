import { GithubLogo } from "../components/logos/GithubLogo";
import { WhatsappLogo } from "../components/logos/WhatsappLogo";
import { InstagramLogo } from "../components/logos/InstagramLogo";
import { LinkedinLogo } from "../components/logos/LinkedinLogo";

export const ContactoPage = () => {
  return (
    <>
      <h1 className="text-center pt-10 font-mono font-normal text-8xl">
        Contacto
      </h1>
      <div className="flex pt-24 mx-16 pb-8 items-center">
        <div className="w-1/4 ml-40">
          <a
            href="https://github.com/angysof16"
            target="_blank"
            rel="noreferrer"
          >
            <GithubLogo />
          </a>
        </div>

        <div className="w-1/4">
          <a
            href="https://api.whatsapp.com/send?phone=573197622606"
            target="_blank"
            rel="noreferrer"
          >
            <WhatsappLogo />
          </a>
        </div>

        <div className="w-1/4">
          <a
            href="https://www.instagram.com/angysof16/"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramLogo />
          </a>
        </div>

        <div className="w-1/4">
          <a
            href="https://www.linkedin.com/in/sofia-guerra-19m061116/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinLogo />
          </a>
        </div>
      </div>
    </>
  );
};

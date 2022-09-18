import React from "react";
import { PythonLogo } from "../components/logos/PythonLogo";
import { CssLogo } from "../components/logos/CssLogo";
import { HtmlLogo } from "../components/logos/HtmlLogo";
import { JavascriptLogo } from "../components/logos/JavascriptLogo";
import { ReactLogo } from "../components/logos/ReactLogo";

export const ExperienciaPage = () => {
  return (
    <>
      <h1 className="text-center pt-10 font-mono font-normal text-8xl">
        Experiencia
      </h1>

      <div className="flex pt-24 mx-12 pb-8 items-start">
        <div className="w-1/2">
          <h1 className="font-mono font-bold text-3xl ml-20">
            - Python básico. <br /> <br />
            - JavaScript. <br /> <br />
            - HTML. <br /> <br />
            - CSS. <br /> <br />- React JS (En progreso).
          </h1>
        </div>

        <div className="">
          <div className="flex mx-12 pb-8 items-center">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              target="_blank"
              rel="noreferrer"
            >
              <CssLogo />
            </a>

            <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              target="_blank"
              rel="noreferrer"
            >
              <HtmlLogo />
            </a>

            <a
              href="https://developer.mozilla.org/es/docs/Web/JavaScript"
              target="_blank"
              rel="noreferrer"
            >
              <JavascriptLogo />
            </a>
          </div>


          <div className="flex mx-12 ml-24 pb-8 items-center">
          <a
              href="https://www.python.org/"
              target="_blank"
              rel="noreferrer"
            >
              <PythonLogo />
            </a>

            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noreferrer"
            >
              <ReactLogo />
            </a>
            
            
          </div>
        </div>
      </div>
    </>
  );
};

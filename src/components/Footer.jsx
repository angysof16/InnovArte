import React from "react";

export const Footer = () => {
  return (
    <>
      <footer className="bg-sky-700 text-center lg:text-left ">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/landing-page-35209.appspot.com/o/csj-logo.png?alt=media&token=95209d85-6cfc-4f83-b7db-f25ca41763d0"
          alt="Logo"
          className="block h-20 w-auto rounded-lg absolute"
        />
        <div className="text-xl font-xanh font-semibold whitespace-nowrap text-custom-white text-center p-4 bg-gradient-to-b from-navbar-gradient-n1 via-navbar-gradient-n2 to-navbar-gradient-n1">
          <a
            className="leading-relaxed inline-block ml-24 mr-4 py-2"
            href="/"
          >
            InnovArte · Colegio Campestre San José · Formando desde la vida para la vida
          </a>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/innovarte-67544.appspot.com/o/WhatsApp%20Image%202022-11-08%20at%2010.07.55.jpg?alt=media&token=c088bf5c-7c26-430a-9e1e-e9722009a07b"
            alt="InnovArte"
            className=" rounded-lg h-20 w-auto float-right pb-6"
          /> 
          
        </div>
      </footer>
    </>
  );
};

import React from "react";

export const Footer = () => {
  return (
    <>
      <footer className="bg-gray-200 text-center lg:text-left ">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/landing-page-35209.appspot.com/o/logo-b.png?alt=media&token=09d27f90-aa5a-42ab-b685-aa14a9735839"
          alt="Logo"
          className="block h-14 w-auto rounded-lg absolute"
        />
        <div className="text-xl font-mono font-bold whitespace-nowrap uppercase text-custom-white text-center p-4 bg-gradient-to-b from-navbar-gradient-n1 via-navbar-gradient-n2 to-navbar-gradient-n1">
          <a
            className="leading-relaxed inline-block ml-24 mr-4 py-2"
            href="/"
          >
            Sofia Guerra Jiménez
          </a>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/landing-page-35209.appspot.com/o/whatsapp-qr.png?alt=media&token=5f9219c9-d088-4e55-ac82-7187964d68aa"
            alt="Código QR de Whatsapp"
            className=" h-16 w-auto float-right pb-6"
          />
        </div>
      </footer>
    </>
  );
};

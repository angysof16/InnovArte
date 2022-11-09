export const EmailPage = () => {
  return (
    <>
      <div className=" pb-12">
        <h1 className="text-center pt-10 pb-16 font-xanh font-semibold text-8xl">
          ¿Dudas?
        </h1>
        <div className="flex justify-center">
          <div className=" flex justify-center w-1/2">
          <img 
            src="https://firebasestorage.googleapis.com/v0/b/innovarte-67544.appspot.com/o/gmail-icon-2.png?alt=media&token=e3ccf46e-65d2-4c54-bb6a-97a98abac253"
            alt="Gmail"
          />
          </div>

          <h1 className=" font-varela text-left text-2xl w-1/2">
            No dudes en contactarnos por correo!! Escríbenos a
            comunicaciones@ccsj.edu.co
          </h1>
        </div>
      </div>
    </>
  );
};

// import { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import Swal from "sweetalert2";

// export const EmailPage = () => {
//   const form = useRef();
//   const inputName = useRef();
//   const inputEmail = useRef();
//   const inputSubject = useRef();
//   const inputMessage = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_zste9jr",
//         "template_67vf7jx",
//         form.current,
//         "9-OXjnbqMhusjaUIM"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           inputName.current.value = "";
//           inputEmail.current.value = "";
//           inputSubject.current.value = "";
//           inputMessage.current.value = "";
//           Swal.fire("Gracias! 🤗", "Su mensaje ha sido enviado!", "Éxito");
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

//   return (
//     <>
//       <form ref={form} onSubmit={sendEmail}>
//         <div className="bg-slate-700 bg-opacity-80 border-y-[0.09rem] border-white py-40 text-center backdrop-blur-md">
//           <h1 className=" text-4xl text-slate-100 text-center font-redhat title-section">
//             ESCRÍBENOS UN CORREO
//           </h1>
//           <div className="flex flex-col justify-center mx-10 mt-20 md:mx-96">
//             <input
//               ref={inputName}
//               className="input-contact bg-gray-50 border w-full  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//               type="text"
//               name="name"
//               placeholder="Nombre"
//               required
//             />
//             <input
//               ref={inputEmail}
//               type="email"
//               name="email"
//               placeholder="Correo"
//               required
//               className="input-contact bg-gray-50 mt-10 border w-full  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             />

//             <input
//               ref={inputSubject}
//               type="text"
//               name="subject"
//               placeholder="Asunto"
//               required
//               className="input-contact bg-gray-50 mt-10 border w-full  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             />

//             <textarea
//               ref={inputMessage}
//               name="message"
//               id=""
//               cols="30"
//               rows="10"
//               placeholder="Mensaje"
//               className="input-contact mt-10 block p-2.5 w-full  text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             ></textarea>
//             <input
//               className="boton-tech hover:bg-sky-700 text-white font-bold py-2 px-4 rounded mt-10 "
//               type="submit"
//               value="Enviar"
//             />
//           </div>
//         </div>
//       </form>
//     </>
//   );
// };

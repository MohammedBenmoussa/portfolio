import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("mbjbeljb");
  if (state.succeeded) {
    return <p> Message sent successfully </p>;
  }
  return (
    <div
      name="contact"
      className="w-full h-screen text-white text-center"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Soumettez le formulaire ci-dessous pour prendre contact avec moi</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className=" flex flex-col w-full md:w-1/2"
          >
            
            <input
              type="email"
              name="email"
              required="required" 
              placeholder="Entrez votre adresse e-mail"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
            <textarea
              name="message"
              placeholder="Écrivez votre message"
              required="required" 
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
            <button disabled={state.submitting} className="text-white bg-gradient-to-b from-gray-500 to-gray-700 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

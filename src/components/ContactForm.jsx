import React, { useState, useEffect } from 'react';
import { useForm } from '@formspree/react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { contactValidationSchema } from './../utils/contactValidationSchema';
import MsgSnackbar from './MsgSnackbar';
import { BiErrorCircle } from 'react-icons/bi';

const ContactForm = function () {
  const [formspreeState, formspreeHandleSubmit] = useForm('mbjbeljb');
  const [msgSuccess, setMsgSuccess] = useState(null);
  const [pageLoaded, setPageLoaded] = useState(false);
  const msgResetDelay = 5;

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  useEffect(() => {
    if (formspreeState.succeeded) {
      setMsgSuccess(true);
    }
    if (formspreeState.errors.length !== 0) {
      setMsgSuccess(false);
    }

    // reset msg state after certain time
    const timer = setTimeout(() => {
      setMsgSuccess(null);
    }, msgResetDelay * 1000);

    return () => {
      clearTimeout(timer);
    };
    // formspreeState is an array (an object) - new one on each render
  }, [formspreeState.errors, formspreeState.succeeded]);

  return (
    <div className="w-full h-full text-white text-center justify-center mt-16 sm:p-10">

      {pageLoaded && <MsgSnackbar msgSuccess={msgSuccess} />}
      <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6 px-6">Soumettez le formulaire ci-dessous pour prendre contact avec moi</p>
        </div>
      <Formik
        initialValues={{
          name: '',
          email: '',
          message: '',
        }}
        validationSchema={contactValidationSchema}
        onSubmit={(values, { resetForm }) => {
          formspreeHandleSubmit(values);
          resetForm();
        }}
        className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full"
      >
        <div className='mx-auto'>
        <Form className=" flex flex-col w-full md:w-1/2 m-auto">
          
          <Field id="name" name="name" placeholder="Entrez votre nom" type="text" className=" p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>
          <small className='text-red-600 text-lg text-left font-medium mb-2'>
            <ErrorMessage name="name" />
          </small>

          
          <Field id="email" name="email" placeholder="Entrez votre adresse e-mail" type="email" className=" p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>
          <small className='text-red-600 text-lg text-left font-medium mb-2'>
            <ErrorMessage name="email" />
          </small>
          
          <Field id="message"  name="message" placeholder="Écrivez votre message" type="text" as="textarea"  className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>
          <small className='text-red-600 text-lg text-left font-medium '>
            <ErrorMessage name="message" />
          </small>
          <button
          className="text-white bg-gradient-to-b from-gray-500 to-gray-700 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            type="submit"
            disabled={formspreeState.submitting}
            data-content={formspreeState.submitting ? 'Envoi...' : 'Envoyer'}
            style={{ display: 'block' }}
          >
            {formspreeState.submitting ? 'Envoi...' : 'Envoyer'}
          </button>
        </Form>
        </div>
      </Formik>
    </div>
  );
};
export default ContactForm;
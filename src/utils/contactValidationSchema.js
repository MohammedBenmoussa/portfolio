import * as yup from 'yup';

export const contactValidationSchema = yup.object({
  name: yup
    .string('Entrez votre nom')
    .strict()
    .min(2, 'Le nom doit comporter au moins 2 caractères')
    .max(50, 'Le nombre maximum de caractères est de 50')
    .required('Le nom est requis'),
  email: yup
    .string('Entrez votre adresse e-mail')
    .strict()
    .email('Entrez une adresse électronique valide')
    .max(50, 'Le nombre maximum de caractères est de 50')
    .required('L\'adresse électronique est obligatoire'),
  message: yup
    .string('Écrivez votre message')
    .strict()
    .min(10, 'Le message doit comporter au moins 10 caractères')
    .max(1000, 'Le nombre maximum de caractères est de 1000')
    .required('Le message est requis'),
});
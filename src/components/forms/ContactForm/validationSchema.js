import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Trop court !')
    .max(50, 'Trop long !')
    .required('Le Nom est requis !'),
  email: Yup.string()
    .email('Veuillez entrer un e-mail valide !')
    .required('E-mail requis !'),
  message: Yup.string()
    .required('Message requis!'),
})

export default validationSchema

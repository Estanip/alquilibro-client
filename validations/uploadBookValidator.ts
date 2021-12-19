import * as yup from 'yup'

const uploadBookValidationSchema = yup.object().shape({
  isbn: yup
    .string()
    .matches(/^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/, "No se ingreso un ISBN valido")
    .required('ISBN es requerido'),
  price: yup
    .string()
    .max(3, "El precio por dia no puede ser mayor a $ 1000")
    .required("No ingreso un precio")
});

export default uploadBookValidationSchema;
import * as yup from 'yup'

const uploadBookValidationSchema = yup.object().shape({
  isbn: yup
    .string()
    .matches(/^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/, "There is not a correct ISBN")
    .required('ISBN is required'),
  price: yup
    .string()
    .min(1)
    .max(1000)
    .required("Price is required")
});

export default uploadBookValidationSchema;
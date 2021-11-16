import * as yup from 'yup'

const loginValidatorSchema = yup.object().shape({
    username: yup
        .string()
        .required('Ingresa tu usuario'),
    password: yup
        .string()
        .required('Ingresa tu contraseña')  
});

export default loginValidatorSchema ;
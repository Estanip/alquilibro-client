import * as yup from 'yup'

const advancedFilterValidationSchema = yup.object().shape({
  title: yup
    .string()
});

export default advancedFilterValidationSchema ;
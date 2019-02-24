import * as yup from 'yup'

export const createCustomerSchema = yup.object({
  firstName: yup.string().required('First name is required')
})

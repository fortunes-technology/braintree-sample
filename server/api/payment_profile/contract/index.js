import * as yup from 'yup'

export const createPaymentProfileSchema = yup.object({
  customer_id: yup.string().required('Customer ID is required'),
  credit_card_number: yup.string().required('Credit card number is required'),
  expiration_month: yup.number().required('Expiration month is required'),
  expiration_year: yup.number().required('Expiration year is required'),
  cvv: yup.string().required('CVV is required')
})

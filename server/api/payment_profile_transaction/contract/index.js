import * as yup from 'yup'

export const createPaymentTransactionSchema = yup.object({
  payment_profile_id: yup.string().required('Payment Profile ID is required'),
  dollar_amount: yup.number().required('Credit card number is required')
})

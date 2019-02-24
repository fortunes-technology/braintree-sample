import { handleError, handleSuccess } from '../../services/response/'
import { PaymentProfile } from '.'
import { Customer } from '../customer'
import { createCreditCard } from '../../services/braintree'
import { createPaymentProfileSchema } from './contract'

export const create = async (req, res, next) => {
  try {
    await createPaymentProfileSchema.validate(req.body)

    const { customer_id, credit_card_number, cvv, expiration_month, expiration_year } = req.body

    const customer = await Customer.findById({_id: customer_id})
    if (!customer) {
      throw new Error('Customer not found')
    }

    const creditCardParams = {
      customerId: customer.braintree_customer_id,
      number: credit_card_number,
      expirationMonth: expiration_month,
      expirationYear: expiration_year,
      cvv
    }

    const { creditCard } = await createCreditCard(creditCardParams)
    const payment_profile = await PaymentProfile.create({customer_id, braintree_card_token: creditCard.token})
    handleSuccess(res, {payment_profile})
  } catch (err) {
    handleError(res, err)
  }
}

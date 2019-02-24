import { handleError, handleSuccess } from '../../services/response/'
import { PaymentProfileTransaction } from './'
import { PaymentProfile } from '../payment_profile'
import { createSale } from '../../services/braintree'
import { createPaymentTransactionSchema } from './contract'

export const create = async (req, res, next) => {
  try {
    await createPaymentTransactionSchema.validate(req.body)
    const { payment_profile_id, dollar_amount } = req.body

    const payment_profile = await PaymentProfile.findById({_id: payment_profile_id})
    if (!payment_profile) {
      throw new Error('Payment Profile not found')
    }

    const saleOptions = {
      paymentMethodToken: payment_profile.braintree_card_token,
      amount: parseFloat(dollar_amount).toFixed(2)
    }

    const {transaction} = await createSale(saleOptions)
    const payment_profile_transaction = await PaymentProfileTransaction.create({payment_profile_id, dollar_amount, braintree_transaction_id: transaction.id})

    handleSuccess(res, {payment_profile_transaction})
  } catch (err) {
    handleError(res, err)
  }
}

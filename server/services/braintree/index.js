
import braintree from 'braintree'
import Config from '../../config'

const gateway = braintree.connect({
  environment: Config.braintree.environment === 'sandbox' ? braintree.Environment.Sandbox : braintree.Environment.Production,
  merchantId: Config.braintree.merchantId,
  publicKey: Config.braintree.publicKey,
  privateKey: Config.braintree.privateKey
})

export const createCustomer = async (info) => {
  const result = await gateway.customer.create(info)
  if (result.success) {
    return result.customer
  }
  throw new Error('Failed to create customer')
}

export const createPaymentMethod = async (creditCardParams) => {
  const result = await gateway.paymentMethod.create(creditCardParams)
  return result
}

export const createCreditCard = async (creditCardParams) => {
  const result = await gateway.creditCard.create(creditCardParams)
  return result
}

export const createSale = async (saleOption) => {
  const result = await gateway.transaction.sale(saleOption)
  return result
}

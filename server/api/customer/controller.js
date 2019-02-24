import { handleError, handleSuccess } from '../../services/response/'
import { Customer } from '.'
import { createCustomer } from '../../services/braintree'
import { createCustomerSchema } from './contract'

export const create = async (req, res, next) => {
  try {
    const data = await createCustomerSchema.validate(req.body, {stripUnknown: true})
    const braintreeCustomer = await createCustomer({firstName: data.firstName})
    const customer = await Customer.create({...data, braintree_customer_id: braintreeCustomer.id})
    handleSuccess(res, {customer})
  } catch (err) {
    handleError(res, err)
  }
}

import mongoose, { Schema } from 'mongoose'

const customerSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  braintree_customer_id: {
    type: String,
    optional: true
  }
})

const model = mongoose.model('customer', customerSchema)

export const schema = model.schema
export default model

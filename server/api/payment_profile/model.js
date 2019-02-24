import mongoose, { Schema } from 'mongoose'

const paymentProfileSchema = new Schema({
  customer_id: {
    type: Schema.Types.ObjectId,
    ref: 'customers'
  },
  braintree_card_token: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

const model = mongoose.model('payment_profile', paymentProfileSchema)

export const schema = model.schema
export default model

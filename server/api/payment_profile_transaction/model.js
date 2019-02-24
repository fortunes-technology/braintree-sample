import mongoose, { Schema } from 'mongoose'

const transactionSchema = new Schema({
  payment_profile_id: {
    type: Schema.Types.ObjectId,
    ref: 'payment_profile'
  },
  braintree_transaction_id: {
    type: String,
    required: true
  },
  dollar_amount: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
})

const model = mongoose.model('payment_profile_transaction', transactionSchema)

export const schema = model.schema
export default model

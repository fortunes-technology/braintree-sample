import { Router } from 'express'
import { create } from './controller'
export { default as PaymentProfileTransaction, schema } from './model'

const router = new Router()

router.post('/charge-payment-profile', create)

export default router

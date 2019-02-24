import { Router } from 'express'
import { create } from './controller'
export { default as PaymentProfile, schema } from './model'

const router = new Router()

router.post('/add-payment-profile', create)

export default router

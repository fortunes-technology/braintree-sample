import { Router } from 'express'
import customer from './customer'
import payment_profile from './payment_profile'
import payment_profile_transaction from './payment_profile_transaction'

const router = new Router()

router.use('/', customer)
router.use('/', payment_profile)
router.use('/', payment_profile_transaction)

export default router

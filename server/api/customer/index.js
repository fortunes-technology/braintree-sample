import { Router } from 'express'
import { create } from './controller'
export { default as Customer, schema } from './model'

const router = new Router()

router.post('/create-customer', create)

export default router

/* eslint-disable no-unused-vars */
import path from 'path'
import merge from 'lodash/merge'

const dotenv = require('dotenv-safe')
dotenv.load({
  path: path.join(__dirname, '../.env'),
  sample: path.join(__dirname, '../.env.example')
})

const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    root: path.join(__dirname, '..'),
    port: process.env.PORT || 9000,
    ip: process.env.IP || '0.0.0.0',
    braintree: {
      environment: process.env.BRAINTREE_ENVIRONMENT || 'sandbox',
      merchantId: process.env.BRAINTREE_MERCHANT_ID,
      publicKey: process.env.BRAINTREE_PUBLIC_KEY,
      privateKey: process.env.BRAINTREE_PRIVATE_KEY
    },
    mongo: {
      options: {
        db: {
          safe: true
        },
        useNewUrlParser: true
      }
    }
  },
  test: { },
  development: {
    mongo: {
      uri: process.env.MONGODB_URI || 'mongodb://localhost/braintree-sample-dev',
      options: {
        debug: false
      }
    }
  },
  production: {
    ip: process.env.IP || undefined,
    mongo: {
      uri: process.env.MONGODB_URI || 'mongodb://localhost/braintree-sample'
    }
  }
}

module.exports = merge(config.all, config[config.all.env])
export default module.exports

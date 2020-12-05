'use strict'
const AbstractValidator = use('App/Validators/AbstractValidator')

class OrderType extends AbstractValidator {
  get rules () {
    return {
      name: 'required',
    }
  }
}

module.exports = OrderType

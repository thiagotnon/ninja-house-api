'use strict'
const AbstractValidator = use('App/Validators/AbstractValidator')

class Order extends AbstractValidator {
  get rules () {
    return {
      tracking: 'required',
      message: 'required',
      sender: 'required',
      recipient: 'required',
      delivery_status: 'required|boolean',
      registered_order: 'required|boolean',
      apartment_id: 'required|integer|min:1',
      order_type_id: 'required|integer|min:1',
    }
  }
}

module.exports = Order

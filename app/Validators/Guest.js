'use strict'
const AbstractValidator = use('App/Validators/AbstractValidator')

class Guest extends AbstractValidator {
  get rules () {
    return {
      name: 'required|max:500',
      rg: 'required|integer',
      cpf: 'required|integer|min:11|max:14',
      entry_date: 'required|max:10',
      departure_date: 'required|max:10',
      apartment_id: 'integer|min:1',
    }
  }
}

module.exports = Guest

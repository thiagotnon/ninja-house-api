'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const AbstractModel = use('App/Models/AbstractModels')

class Guest extends AbstractModel {
  static getRegisterFields() {
    return [
      'name',
      'rg',
      'cpf',
      'entry_date',
      'departure_date',
      'apartment_id'
    ]
  }
}

module.exports = Guest

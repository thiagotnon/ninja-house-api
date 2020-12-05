'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const AbstractModel = use('App/Models/AbstractModels')

class OrderType extends AbstractModel {
  static getRegisterFields() {
    return [
      'name',
    ]
  }
}

module.exports = OrderType

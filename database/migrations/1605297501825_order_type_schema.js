'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderTypeSchema extends Schema {
  up () {
    this.create('order_types', (table) => {
      table.increments()
      table.string('name', 255).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('order_types')
  }
}

module.exports = OrderTypeSchema

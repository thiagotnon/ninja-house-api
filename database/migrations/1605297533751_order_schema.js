"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class OrderSchema extends Schema {
  up() {
    this.create("orders", (table) => {
      table.increments();
      table.string("tracking", 255).notNullable();
      table.text("message").notNullable();
      table.string("sender", 255).notNullable();
      table.string("recipient", 255).notNullable();
      table.boolean("delivery_status").notNullable();
      table.boolean("registered_order").notNullable();
      table
        .integer("apartment_id")
        .unsigned()
        .references("id")
        .inTable("apartments")
        .notNullable();
      table
        .integer("order_type_id")
        .unsigned()
        .references("id")
        .inTable("order_types")
        .notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("orders");
  }
}

module.exports = OrderSchema;

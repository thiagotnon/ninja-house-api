"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class GuestSchema extends Schema {
  up() {
    this.create("guests", (table) => {
      table.increments();
      table.string("name", 255).notNullable();
      table.integer("rg").notNullable().unique();
      table.string("cpf").notNullable().unique();
      table.string("entry_date", 10).notNullable();
      table.string("departure_date", 10).notNullable();
      table
        .integer("apartment_id")
        .unsigned()
        .references("id")
        .inTable("apartments")
        .notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("guests");
  }
}

module.exports = GuestSchema;

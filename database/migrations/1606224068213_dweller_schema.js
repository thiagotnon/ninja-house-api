"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class DwellerSchema extends Schema {
  up() {
    this.create("dwellers", (table) => {
      table.increments();
      table
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users")
        .notNullable();
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
    this.drop("dwellers");
  }
}

module.exports = DwellerSchema;

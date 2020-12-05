"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class EmployeeSchema extends Schema {
  up() {
    this.create("employees", (table) => {
      table.increments();
      table
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users")
        .notNullable();
      table.string("period", 50).notNullable();
      table.string("entry_time", 50).notNullable();
      table.string("departure_time", 50).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("employees");
  }
}

module.exports = EmployeeSchema;

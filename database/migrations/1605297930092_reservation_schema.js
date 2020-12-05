"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ReservationSchema extends Schema {
  up() {
    this.create("reservations", (table) => {
      table.increments();
      table.string("date", 10).notNullable().unique();
      table
        .integer("apartment_id")
        .unsigned()
        .references("id")
        .inTable("apartments")
        .notNullable();
      table
        .integer("leisure_space_id")
        .unsigned()
        .references("id")
        .inTable("leisure_spaces")
        .notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("reservations");
  }
}

module.exports = ReservationSchema;

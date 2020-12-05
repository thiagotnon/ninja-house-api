"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ReservationGuestSchema extends Schema {
  up() {
    this.create("reservation_guests", (table) => {
      table.increments();
      table.string("name", 255).notNullable();
      table.integer("rg").notNullable().unique();
      table.string("cpf").notNullable().unique();
      table
        .integer("reservation_id")
        .unsigned()
        .references("id")
        .inTable("reservations")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamps();
    });
  }

  down() {
    this.drop("reservation_guests");
  }
}

module.exports = ReservationGuestSchema;

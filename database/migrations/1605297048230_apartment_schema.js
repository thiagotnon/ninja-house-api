"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ApartmentSchema extends Schema {
  up() {
    this.create("apartments", (table) => {
      table.increments();
      table.integer("unit_number").notNullable().unique();
      table.string("block").notNullable();
      table.integer("floor").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("apartments");
  }
}

module.exports = ApartmentSchema;

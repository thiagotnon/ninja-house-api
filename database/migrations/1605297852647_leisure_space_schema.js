"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class LeisureSpaceSchema extends Schema {
  up() {
    this.create("leisure_spaces", (table) => {
      table.increments();
      table.string("name", 255).notNullable();
      table.integer("capacity").notNullable();
      table.float("rate", [8], [2]).notNullable();
      table.text("usage_rules").notNullable();
      table.string("start_time").notNullable();
      table.string("end_time").notNullable();
      table.boolean("availability").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("leisure_spaces");
  }
}

module.exports = LeisureSpaceSchema;

"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AlertSchema extends Schema {
  up() {
    this.create("alerts", (table) => {
      table.increments();
      table.string("title", 255).notNullable();
      table.text("message").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("alerts");
  }
}

module.exports = AlertSchema;

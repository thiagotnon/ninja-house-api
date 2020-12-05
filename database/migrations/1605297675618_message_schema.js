"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MessageSchema extends Schema {
  up() {
    this.create("messages", (table) => {
      table.increments();
      table.text("title").notNullable();
      table.text("message").notNullable();
      table
        .integer("apartment_id")
        .unsigned()
        .references("id")
        .inTable("apartments");
      table.timestamps();
    });
  }

  down() {
    this.drop("messages");
  }
}

module.exports = MessageSchema;

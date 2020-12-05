"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ImageSchema extends Schema {
  up() {
    this.create("images", (table) => {
      table.increments();
      table
        .integer("leisure_space_id")
        .unsigned()
        .references("id")
        .inTable("leisure_spaces")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.string("path").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("images");
  }
}

module.exports = ImageSchema;

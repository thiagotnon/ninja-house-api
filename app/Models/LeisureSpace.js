"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");
const AbstractModel = use("App/Models/AbstractModels");

class LeisureSpace extends AbstractModel {
  static getRegisterFields() {
    return [
      "name",
      "capacity",
      "rate",
      "usage_rules",
      "start_time",
      "end_time",
      "availability",
    ];
  }
  images() {
    return this.hasMany("App/Models/Image");
  }
}

module.exports = LeisureSpace;

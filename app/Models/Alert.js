"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");
const AbstractModel = use("App/Models/AbstractModels");

class Alert extends AbstractModel {
  static getRegisterFields() {
    return ["title", "message"];
  }
  apartment() {
    return this.hasMany("App/Models/Apartment");
  }
}

module.exports = Alert;

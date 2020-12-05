"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");
const AbstractModel = use("App/Models/AbstractModels");

class Dweller extends AbstractModel {
  static getRegisterFields() {
    return ["user_id", "apartment_id"];
  }
  apartment() {
    return this.hasMany("App/Models/Apartment");
  }
  dweller() {
    return this.belongsTo("App/Models/User");
  }
}

module.exports = Dweller;

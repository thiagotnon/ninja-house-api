"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");
const AbstractModel = use("App/Models/AbstractModels");

class Apartment extends AbstractModel {
  static getRegisterFields() {
    return ["unit_number", "block", "floor"];
  }

  dwellers() {
    return this.hasMany("App/Models/Dweller");
  }

  guests() {
    return this.hasMany("App/Models/Guest");
  }
  reservations() {
    return this.hasMany("App/Models/Reservation");
  }
  orders() {
    return this.hasMany("App/Models/Order");
  }
}

module.exports = Apartment;

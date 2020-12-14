"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");
const AbstractModel = use("App/Models/AbstractModels");

class Reservation extends AbstractModel {
  static getRegisterFields() {
    return ["date", "apartment_id", "leisure_space_id"];
  }
  guests() {
    return this.hasMany("App/Models/ReservationGuest");
  }
  leisure_space() {
    return this.belongsTo("App/Models/LeisureSpace");
  }
}

module.exports = Reservation;

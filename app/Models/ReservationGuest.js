"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");
const AbstractModel = use("App/Models/AbstractModels");

class ReservationGuest extends AbstractModel {
  static getRegisterFields() {
    return ["name", "rg", "cpf", "reservation_id"];
  }
  reservation() {
    return this.belongsTo("App/Models/Reservation");
  }
}

module.exports = ReservationGuest;

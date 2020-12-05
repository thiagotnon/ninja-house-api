"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");
const AbstractModel = use("App/Models/AbstractModels");

class Employee extends AbstractModel {
  static getRegisterFields() {
    return ["user_id", "period", "entry_time", "departure_time"];
  }
  employee() {
    return this.belongsTo("App/Models/User");
  }
}

module.exports = Employee;

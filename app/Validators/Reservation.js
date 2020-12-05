"use strict";
const AbstractValidator = use("App/Validators/AbstractValidator");

class Reservation extends AbstractValidator {
  get rules() {
    return {
      date: "required",
      apartment_id: "required|integer|min:1",
      leisure_space_id: "required|integer|min:1",
    };
  }
}

module.exports = Reservation;

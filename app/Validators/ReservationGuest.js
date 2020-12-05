"use strict";
const AbstractValidator = use("App/Validators/AbstractValidator");

class ReservationGuest extends AbstractValidator {
  get rules() {
    return {
      name: "required",
      rg: "required|integer",
      cpf: "required|integer|min:11|max:14",
      reservation_id: "required|integer",
    };
  }
}

module.exports = ReservationGuest;

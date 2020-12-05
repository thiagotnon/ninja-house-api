"use strict";
const AbstractValidator = use("App/Validators/AbstractValidator");

class ReservationGuest extends AbstractValidator {
  get rules() {
    return {
      reservation_guest_id: "required",
    };
  }
}

module.exports = ReservationGuest;

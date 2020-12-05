"use strict";
const AbstractValidator = use("App/Validators/AbstractValidator");

class DwellerGuest extends AbstractValidator {
  get rules() {
    return {
      user_id: "required|integer",
      period: "required",
      entry_time: "required",
      departure_time: "required",
    };
  }
}

module.exports = DwellerGuest;

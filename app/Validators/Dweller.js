"use strict";
const AbstractValidator = use("App/Validators/AbstractValidator");

class DwellerGuest extends AbstractValidator {
  get rules() {
    return {
      user_id: "required|integer",
      apartment_id: "required|integer",
    };
  }
}

module.exports = DwellerGuest;

"use strict";
const AbstractValidator = use("App/Validators/AbstractValidator");

class Apartment extends AbstractValidator {
  get rules() {
    return {
      unit_number: "required|min:1",
      block: "required|min:1|max:10",
      floor: "required|min:1|max:10",
    };
  }
}

module.exports = Apartment;

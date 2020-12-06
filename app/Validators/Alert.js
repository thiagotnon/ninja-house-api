"use strict";
const AbstractValidator = use("App/Validators/AbstractValidator");

class Alert extends AbstractValidator {
  get rules() {
    return {
      title: "required|max:255",
      message: "required",
    };
  }
}

module.exports = Alert;

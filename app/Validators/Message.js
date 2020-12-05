"use strict";
const AbstractValidator = use("App/Validators/AbstractValidator");

class Message extends AbstractValidator {
  get rules() {
    return {
      title: "required|max:500",
      message: "required",
      apartment_id: "integer|min:1",
    };
  }
}

module.exports = Message;

"use strict";
const AbstractValidator = use("App/Validators/AbstractValidator");

class LeisureSpace extends AbstractValidator {
  get rules() {
    return {
      name: "required|max:500",
      capacity: "required|integer",
      rate: "required|number",
      usage_rules: "required",
      start_time: "required",
      end_time: "required",
      availability: "required",
    };
  }
}

module.exports = LeisureSpace;

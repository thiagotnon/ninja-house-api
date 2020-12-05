"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Employee = use("App/Models/Employee");

/**
 * Resourceful controller for interacting with employees
 */
class EmployeeController {
  /**
   * Show a list of all employees.
   * GET employees
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const { page, qty, name } = request.all();
    const query = Employee.query().with("employee");
    if (name) {
      query.where("name", "like", "%" + name + "%").fetch();
    }
    return await query.paginate(page, qty);
  }

  /**
   * Create/save a new employee.
   * POST employees
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const registerFields = Employee.getRegisterFields();
    const data = request.only(registerFields);
    return await Employee.create(data);
  }

  /**
   * Display a single employee.
   * GET employees/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    return await Employee.query()
      .where("id", params.id)
      .with("employee")
      .first();
  }

  /**
   * Update employee details.
   * PUT or PATCH employees/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const employee = await Employee.findOrFail(params.id);
    const registerFields = Employee.getRegisterFields();
    const data = request.only(registerFields);
    employee.merge(data);
    await employee.save();
    return employee;
  }

  /**
   * Delete a employee with id.
   * DELETE employees/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const employee = await Employee.findOrFail(params.id);
    employee.delete();
  }
}

module.exports = EmployeeController;

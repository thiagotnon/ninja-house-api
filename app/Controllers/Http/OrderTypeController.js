"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const OrderType = use("App/Models/OrderType");

/**
 * Resourceful controller for interacting with ordertypes
 */
class OrderTypeController {
  /**
   * Show a list of all ordertypes.
   * GET ordertypes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const { page, qty, name } = request.all();
    const query = OrderType.query();
    if (name) {
      query.where("name", "like", "%" + name + "%");
    }
    return await query.paginate(page, qty);
  }

  /**
   * Create/save a new ordertype.
   * POST ordertypes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const registerFields = OrderType.getRegisterFields();
    const data = request.only(registerFields);
    return await OrderType.create(data);
  }

  /**
   * Display a single ordertype.
   * GET ordertypes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    return await OrderType.query().where("id", params.id).first();
  }

  /**
   * Update ordertype details.
   * PUT or PATCH ordertypes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const orderType = await OrderType.findOrFail(params.id);
    const registerFields = OrderType.getRegisterFields();
    const data = request.only(registerFields);
    orderType.merge(data);
    await orderType.save();
    return orderType;
  }

  /**
   * Delete a ordertype with id.
   * DELETE ordertypes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const orderType = await OrderType.findOrFail(params.id);
    orderType.delete();
  }
}

module.exports = OrderTypeController;

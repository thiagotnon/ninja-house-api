"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Alert = use("App/Models/Alert");

/**
 * Resourceful controller for interacting with alerts
 */
class AlertController {
  /**
   * Show a list of all alerts.
   * GET alerts
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const { page, qty, name } = request.all();
    const query = Alert.query();
    if (name) {
      query.where("name", "like", "%" + name + "%").fetch();
    }
    return await query.paginate(page, qty);
  }

  /**
   * Create/save a new alert.
   * POST alerts
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const registerFields = Alert.getRegisterFields();
    const data = request.only(registerFields);
    return await Alert.create(data);
  }

  /**
   * Display a single alert.
   * GET alerts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    return await Alert.query().where("id", params.id).first();
  }

  /**
   * Update alert details.
   * PUT or PATCH alerts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const alert = await Alert.findOrFail(params.id);
    const registerFields = Alert.getRegisterFields();
    const data = request.only(registerFields);
    alert.merge(data);
    await alert.save();
    return alert;
  }

  /**
   * Delete a alert with id.
   * DELETE alerts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const alert = await Alert.findOrFail(params.id);
    alert.delete();
  }
}

module.exports = AlertController;

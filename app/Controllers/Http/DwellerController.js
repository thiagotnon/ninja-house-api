"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Dweller = use("App/Models/Dweller");
const Reservation = use("App/Models/Reservation");
const Apartment = use("App/Models/Apartment");

/**
 * Resourceful controller for interacting with Dwellers
 */
class DwellerController {
  /**
   * Show a list of all Dweller.
   * GET Dwellers
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const { page, qty, name } = request.all();
    const query = Dweller.query().with("dweller");
    if (name) {
      query.where("name", "like", "%" + name + "%");
    }
    return await query.paginate(page, qty);
  }

  /**
   * Create/save a new Dweller.
   * POST Dweller
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const registerFields = Dweller.getRegisterFields();
    const data = request.only(registerFields);
    return await Dweller.create(data);
  }

  /**
   * Display a single dweller.
   * GET Dwellers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    return await Dweller.query().where("id", params.id).with("dweller").first();
  }

  /**
   * Update Dweller details.
   * PUT or PATCH Dwellers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const dweller = await Dweller.findOrFail(params.id);
    const registerFields = Dweller.getRegisterFields();
    const data = request.only(registerFields);
    dweller.merge(data);
    await dweller.save();
    return dweller;
  }

  /**
   * Delete a Dweller with id.
   * DELETE Dweller/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const dweller = await Dweller.findOrFail(params.id);
    const apartments = Apartment.query().where("dweller_id", dweller.id);
    Reservation.query().whereIn("apartment_id", apartments).delete();
    apartments.delete();
    dweller.delete();
  }
}

module.exports = DwellerController;

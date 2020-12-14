"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Reservation = use("App/Models/Reservation");

/**
 * Resourceful controller for interacting with reservations
 */
class ReservationController {
  /**
   * Show a list of all reservations.
   * GET reservations
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const { page, qty, name } = request.all();
    const query = Reservation.query().with("leisure_space");
    if (name) {
      query.where("name", "like", "%" + name + "%");
    }
    return await query.paginate(page, qty);
  }

  /**
   * Create/save a new reservation.
   * POST reservations
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    try {
      const registerFields = Reservation.getRegisterFields();
      const data = request.only(registerFields);
      return await Reservation.create(data);
    } catch (error) {
      return { erro: "erro ao criar" };
    }
  }

  /**
   * Display a single reservation.
   * GET reservations/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    return await Reservation.query()
      .where("id", params.id)
      .with("guests")
      .with("leisure_space")
      .first();
  }

  /**
   * Update reservation details.
   * PUT or PATCH reservations/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const reservation = await Reservation.findOrFail(params.id);
    const registerFields = Reservation.getRegisterFields();
    const data = request.only(registerFields);
    reservation.merge(data);
    await reservation.save();
    return reservation;
  }

  /**
   * Delete a reservation with id.
   * DELETE reservations/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const reservation = await Reservation.findOrFail(params.id);
    reservation.delete();
  }
}

module.exports = ReservationController;

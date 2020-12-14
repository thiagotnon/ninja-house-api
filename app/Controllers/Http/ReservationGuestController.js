"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const ReservationGuest = use("App/Models/ReservationGuest");

/**
 * Resourceful controller for interacting with reservationGuests
 */
class ReservationGuestController {
  /**
   * Show a list of all reservationGuest.
   * GET reservationGuests
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const { page, qty, name } = request.all();
    const query = ReservationGuest.query();
    if (name) {
      query.where("name", "like", "%" + name + "%");
    }
    return await query.paginate(page, qty);
  }

  /**
   * Create/save a new reservationGuest.
   * POST reservationGuest
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    try {
      const registerFields = ReservationGuest.getRegisterFields();
      const data = request.only(registerFields);
      return await ReservationGuest.create(data);
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Display a single reservationguest.
   * GET reservationGuests/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    return await ReservationGuest.query().where("id", params.id).first();
  }

  async Reservation({ params }) {
    const reservation = await ReservationGuest.findOrFail(params.id);
    return reservation.Reservation().fetch();
  }
  /**
   * Update reservationGuest details.
   * PUT or PATCH reservationGuests/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const reservationGuest = await ReservationGuest.findOrFail(params.id);
    const registerFields = ReservationGuest.getRegisterFields();
    const data = request.only(registerFields);
    reservationGuest.merge(data);
    await reservationGuest.save();
    return reservationGuest;
  }

  /**
   * Delete a reservationGuest with id.
   * DELETE reservationGuest/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const reservationGuest = await ReservationGuest.findOrFail(params.id);
    reservationGuest.delete();
  }
}

module.exports = ReservationGuestController;

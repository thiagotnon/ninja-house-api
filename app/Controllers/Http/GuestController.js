"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Guest = use("App/Models/Guest");

/**
 * Resourceful controller for interacting with guests
 */
class GuestController {
  /**
   * Show a list of all guests.
   * GET guests
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const { page, qty, name } = request.all();
    const query = Guest.query().with("apartments");
    if (name) {
      query.where("name", "like", "%" + name + "%");
    }
    return await query.paginate(page, qty);
  }

  /**
   * Create/save a new guest.
   * POST guests
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    try {
      const registerFields = Guest.getRegisterFields();
      const data = request.only(registerFields);
      return await Guest.create(data);
    } catch (error) {
      if (error.sqlMessage.indexOf("guests_cpf_unique")) {
        return {
          error:
            "Esse hóspede já foi registrado.\nVerifique os dados e tente novamente.",
        };
      }
    }
  }

  /**
   * Display a single guest.
   * GET guests/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    return await Guest.query()
      .where("id", params.id)
      .with("apartments")
      .first();
  }

  /**
   * Update guest details.
   * PUT or PATCH guests/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const guest = await Guest.findOrFail(params.id);
    const registerFields = Guest.getRegisterFields();
    const data = request.only(registerFields);
    guest.merge(data);
    await guest.save();
    return guest;
  }

  /**
   * Delete a guest with id.
   * DELETE guests/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const guest = await Guest.findOrFail(params.id);
    guest.delete();
  }
}

module.exports = GuestController;

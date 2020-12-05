"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const LeisureSpace = use("App/Models/LeisureSpace");

/**
 * Resourceful controller for interacting with leisurespaces
 */
class LeisureSpaceController {
  /**
   * Show a list of all leisurespaces.
   * GET leisurespaces
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const { page, qty, name } = request.all();
    const query = LeisureSpace.query().with("images");
    /* if (name) {
      query.where("name", "like", "%" + name + "%");
    } */
    return await query.paginate(page, qty);
  }

  /**
   * Create/save a new leisurespace.
   * POST leisurespaces
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const registerFields = LeisureSpace.getRegisterFields();
    const data = request.only(registerFields);
    return await LeisureSpace.create(data);
  }

  /**
   * Display a single leisurespace.
   * GET leisurespaces/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    const leisureSpace = await LeisureSpace.findOrFail(params.id);
    await leisureSpace.load("images");
    return leisureSpace;
  }

  /**
   * Update leisurespace details.
   * PUT or PATCH leisurespaces/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const leisureSpace = await LeisureSpace.findOrFail(params.id);
    const registerFields = LeisureSpace.getRegisterFields();
    const data = request.only(registerFields);
    leisureSpace.merge(data);
    await leisureSpace.save();
    return leisureSpace;
  }

  /**
   * Delete a leisurespace with id.
   * DELETE leisurespaces/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const leisureSpace = await LeisureSpace.findOrFail(params.id);
    leisureSpace.delete();
  }
}

module.exports = LeisureSpaceController;

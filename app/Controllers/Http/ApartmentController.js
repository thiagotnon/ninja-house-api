"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Apartment = use("App/Models/Apartment");

/**
 * Resourceful controller for interacting with apartments
 */
class ApartmentController {
  /**
   * Show a list of all apartments.
   * GET apartments
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const { page, qty, unit_number } = request.all();
    const query = Apartment.query().orderBy("unit_number", "asc");
    if (unit_number) {
      query.where("unit_number", "like", "%" + unit_number + "%").fetch();
    }
    return await query.paginate(page, qty);
  }

  /**
   * Create/save a new apartment.
   * POST apartments
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    try {
      const registerFields = Apartment.getRegisterFields();
      const data = request.only(registerFields);
      return await Apartment.create(data);
    } catch (error) {
      console.log(error);
      if (error.sqlMessage.indexOf("apartments_unit_number_unique")) {
        return { error: "Essa unidade já existe." };
      }
    }
  }

  /**
   * Display a single apartment.
   * GET apartments/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    return await Apartment.query()
      .where("id", params.id)
      .with("dwellers")
      .with("guests")
      .with("reservations")
      .with("orders")
      .first();
  }

  async dwellers({ params }) {
    const dweller = await Apartment.findOrFail(params.id);
    return dweller.dwellers().with("dweller").fetch();
  }

  /**
   * Update apartment details.
   * PUT or PATCH apartments/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const apartment = await Apartment.findOrFail(params.id);
    const registerFields = Apartment.getRegisterFields();
    const data = request.only(registerFields);
    apartment.merge(data);
    await apartment.save();
    return apartment;
  }

  /**
   * Delete a apartment with id.
   * DELETE apartments/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    try {
      const apartment = await Apartment.findOrFail(params.id);
      apartment.delete();
    } catch (error) {
      if (
        error.sqlMessage.indexOf(
          "Cannot delete or update a parent row: a foreign key constraint fails"
        )
      ) {
        return {
          error:
            "A unidade não pode ser excluída. Existem moradores, mensagens ou reservas vinculados e ela.",
        };
      }
    }
  }
}

module.exports = ApartmentController;

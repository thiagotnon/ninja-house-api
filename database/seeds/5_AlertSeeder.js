"use strict";

/*
|--------------------------------------------------------------------------
| OrderSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const Order = use("App/Models/Order");

class OrderSeeder {
  async run() {
    await Order.createMany([
      {
        tracking: "BR456465D456D",
        message: "Você recebeu uma encomenda",
        sender: "Correios",
        recipient: "Thiago Nascimento",
        delivery_status: false,
        registered_order: false,
        apartment_id: 1,
        order_type_id: 1,
      },
      {
        tracking: "AR456465D456D",
        message: "Você recebeu uma encomenda",
        sender: "Correios",
        recipient: "Carla Silva",
        delivery_status: false,
        registered_order: false,
        apartment_id: 2,
        order_type_id: 2,
      },
      {
        tracking: "PR456465D456D",
        message: "Você recebeu uma encomenda",
        sender: "Correios",
        recipient: "Clara Giovanna",
        delivery_status: false,
        registered_order: false,
        apartment_id: 3,
        order_type_id: 3,
      },
    ]);
  }
}

module.exports = OrderSeeder;

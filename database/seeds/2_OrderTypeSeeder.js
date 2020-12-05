"use strict";

/*
|--------------------------------------------------------------------------
| OrderTypeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const OrderType = use("App/Models/OrderType");

class OrderTypeSeeder {
  async run() {
    await OrderType.createMany([
      { name: "Pacote" },
      { name: "Envelope" },
      { name: "Carta" },
    ]);
  }
}

module.exports = OrderTypeSeeder;

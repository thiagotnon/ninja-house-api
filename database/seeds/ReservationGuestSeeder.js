"use strict";

/*
|--------------------------------------------------------------------------
| ReservationGuestSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const ReservationGuest = use("App/Models/ReservationGuest");

class ReservationGuestSeeder {
  async run() {
    await ReservationGuest.createMany([
      { name: "Clara Giovanna", rg: 3558495, cpf: 13225588 },
      { name: "Rosa Dias", rg: 5558495, cpf: 23225588 },
      { name: "Josué", rg: 6558495, cpf: 33225588 },
      { name: "Thiago Henrique", rg: 7558495, cpf: 43225588 },
    ]);
  }
}

module.exports = ReservationGuestSeeder;

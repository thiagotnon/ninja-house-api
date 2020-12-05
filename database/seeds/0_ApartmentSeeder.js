"use strict";

/*
|--------------------------------------------------------------------------
| ApartmentSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const Apartment = use("App/Models/Apartment");

class ApartmentSeeder {
  async run() {
    await Apartment.createMany([
      { unit_number: 1, block: "A", floor: 0 },
      { unit_number: 10, block: "A", floor: 1 },
      { unit_number: 23, block: "A", floor: 2 },
      { unit_number: 3, block: "B", floor: 0 },
      { unit_number: 31, block: "B", floor: 3 },
      { unit_number: 44, block: "B", floor: 4 },
    ]);
  }
}

module.exports = ApartmentSeeder;

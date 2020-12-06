"use strict";

/*
|--------------------------------------------------------------------------
| AlertSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const ALert = use("App/Models/ALert");

class ALertSeeder {
  async run() {
    await ALert.createMany([
      {
        title: "Aviso Geral",
        message: "Você recebeu um aviso geral",
      },
    ]);
  }
}

module.exports = ALertSeeder;

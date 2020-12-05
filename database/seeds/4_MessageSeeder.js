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
const Message = use("App/Models/Message");

class MessageSeeder {
  async run() {
    await Message.createMany([
      {
        title: "Assembléia Ordinária",
        message:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas convallis, libero non porta porta, orci metus elementum massa, eget ornare nisl lacus et erat.\nNullam sed purus vel quam aliquet volutpat. Fusce nec viverra eros, vel consectetur ligula.\nNulla rutrum elementum odio sit amet porttitor.\nEtiam in purus magna.",
        apartment_id: null,
      },
      {
        title: "Limpeza da garagem",
        message:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas convallis, libero non porta porta, orci metus elementum massa, eget ornare nisl lacus et erat.\nNullam sed purus vel quam aliquet volutpat. Fusce nec viverra eros, vel consectetur ligula.\nNulla rutrum elementum odio sit amet porttitor.\nEtiam in purus magna.",
        apartment_id: null,
      },
      {
        title: "Suspensão do fornecimento de gás",
        message:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas convallis, libero non porta porta, orci metus elementum massa, eget ornare nisl lacus et erat.\nNullam sed purus vel quam aliquet volutpat. Fusce nec viverra eros, vel consectetur ligula.\nNulla rutrum elementum odio sit amet porttitor.\nEtiam in purus magna.",
        apartment_id: null,
      },
      {
        title: "Pendências",
        message:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas convallis, libero non porta porta, orci metus elementum massa, eget ornare nisl lacus et erat.\nNullam sed purus vel quam aliquet volutpat. Fusce nec viverra eros, vel consectetur ligula.\nNulla rutrum elementum odio sit amet porttitor.\nEtiam in purus magna.",
        apartment_id: 1,
      },
    ]);
  }
}

module.exports = MessageSeeder;

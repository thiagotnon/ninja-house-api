"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/", () => {
  return { greeting: "Hello world in JSON" };
});

Route.post("/usuarios", "UserController.store").prefix("api/v1");
Route.post("/usuarios/token", "UserController.token").prefix("api/v1");
Route.post("/espacos-de-lazer/:id/imagens", "ImageController.store").prefix(
  "api/v1"
);
Route.get("images/:path", "ImageController.show");

Route.group(() => {
  Route.resource("/funcionarios", "EmployeeController")
    .apiOnly()
    .validator(new Map([[["store", "update"], "Employee"]]));

  Route.resource("/unidades", "ApartmentController")
    .apiOnly()
    .validator(new Map([[["store", "update"], "Apartment"]]));

  Route.get("/unidade/:id/moradores", "ApartmentController.dwellers");

  Route.resource("/hospedes", "GuestController")
    .apiOnly()
    .validator(new Map([[["store", "update"], "Guest"]]));

  Route.resource("/espacos-de-lazer", "LeisureSpaceController")
    .apiOnly()
    .validator(new Map([[["store", "update"], "LeisureSpace"]]));

  Route.resource("/mensagens", "AlertController")
    .apiOnly()
    .validator(new Map([[["store", "update"], "Alert"]]));

  Route.resource("/encomendas/tipo-de-encomenda", "OrderTypeController")
    .apiOnly()
    .validator(new Map([[["store", "update"], "OrderType"]]));

  Route.resource("/encomendas", "OrderController")
    .apiOnly()
    .validator(new Map([[["store", "update"], "Order"]]));

  Route.resource("/reservas/convidados", "ReservationGuestController")
    .apiOnly()
    .validator(new Map([[["store", "update"], "ReservationGuest"]]));

  Route.resource("/reservas/lista-de-convidados", "ReservationListController")
    .apiOnly()
    .validator(new Map([[["store", "update"], "ReservationList"]]));

  Route.resource("/reservas", "ReservationController")
    .apiOnly()
    .validator(new Map([[["store", "update"], "Reservation"]]));

  Route.resource("/moradores", "DwellerController")
    .apiOnly()
    .validator(new Map([[["store", "update"], "Dweller"]]));

  Route.resource("/usuarios", "UserController")
    .apiOnly()
    .validator(new Map([[["store", "update"], "User"]]));
}).prefix("api/v1");

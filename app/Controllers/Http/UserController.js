"use strict";
const User = use("App/Models/User");

class UserController {
  async index({ request, response, view }) {
    const { page, qty, name } = request.all();
    const query = User.query();
    if (name) {
      query.where("name", "like", "%" + name + "%");
    }
    return await query.paginate(page, qty);
  }

  async show({ params, request, response, view }) {
    return await User.query().where("id", params.id).first();
  }
  async store({ request }) {
    try {
      const registerFields = [
        "username",
        "email",
        "password",
        "rg",
        "cpf",
        "phone",
      ];
      const data = request.only(registerFields);

      return await User.create(data);
    } catch (error) {
      if (error.sqlMessage.indexOf("users_username_unique")) {
        return { error: "Usuário já cadastrado" };
      }
    }
  }

  async token({ request, auth }) {
    try {
      const { email, password } = request.all();
      const token = await auth.attempt(email, password);
      const { username } = await User.query().where("email", email).first();
      return { ...token, username };
    } catch (error) {
      console.log(error);
      if (error.toString().indexOf("Cannot find user with email as")) {
        return { error: "E-mail ou senha inválidos" };
      }
    }
  }
  async destroy({ params, request, response }) {
    try {
      const user = await User.findOrFail(params.id);
      user.delete();
    } catch (error) {
      if (
        error.sqlMessage.indexOf(
          "Cannot delete or update a parent row: a foreign key constraint fails"
        )
      ) {
        return {
          error:
            "O usuário não pode ser removido.\nO registro pode estar vinculado a um morador ou funcionário.",
        };
      }
    }
  }
}

module.exports = UserController;

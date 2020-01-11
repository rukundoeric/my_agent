const models = require("../../sequelize/models");

const { User } = models;

class Users {
  static async create(req, res) {
    const { firstName, lastName, email } = req.body;
    const createdUser = await User.create({
      firstName,
      lastName,
      email
    });
    const user = createdUser.dataValues;
    res.status(201).send({
      status: 201,
      data: {
        user: {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email
        },
        message:'User saved successfull'
      }
    });
  }
  static async getall(req, res) {
    const users = await User.findAll({});
    res.status(200).send({
      status: 200,
      data: users 
    });
  }
}

module.exports = Users;
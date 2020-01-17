const models = require("../../sequelize/models");

const { voluntary_sales } = models;

class voluntarySale {
  static async create(req, res) {
    const {
      name,
      email,
      phone_number,
      type_of_seller,
      s_national_id,
      s_matial_status,
      seller_address,
      upi,
      type_of_buyer,
      b_national_id,
      b_matial_status,
      buyer_address
    } = req.body;
    const result = await voluntary_sales.create({
      name,
      email,
      phone_number,
      type_of_seller,
      s_national_id,
      s_matial_status,
      seller_address,
      upi,
      type_of_buyer,
      b_national_id,
      b_matial_status,
      buyer_address
    });
    res.status(201).send({
      status: 201,
      data: {
        record: result.dataValues,
        message: "Recorded successful"
      }
    });
  }
  static async getall(req, res) {
    const result = await voluntary_sales.findAll({});
    res.status(200).send({
      status: 200,
      data: { result }
    });
  }
  static async update(req, res) {
    const {
      name,
      email,
      phone_number,
      type_of_seller,
      s_national_id,
      s_matial_status,
      seller_address,
      upi,
      type_of_buyer,
      b_national_id,
      b_matial_status,
      buyer_address
    } = req.body;
    const { id } = req.params;
    const result = await voluntary_sales.update(
      {
        name,
        email,
        phone_number,
        type_of_seller,
        s_national_id,
        s_matial_status,
        seller_address,
        upi,
        type_of_buyer,
        b_national_id,
        b_matial_status,
        buyer_address
      },
      { where: { id } }
    );
    res.status(201).send({
      status: 201,
      data: {
        result,
        message: "Updated successful"
      }
    });
  }
  static async delete(req, res) {
      const { id } = req.params;
      const result = await voluntary_sales.destroy({
          where: { id }
      });

      res.status(200).send({
          status: 200,
          data: {
              result,
              message: "Deleted successful"
          }
      })
  }
}
module.exports = voluntarySale;

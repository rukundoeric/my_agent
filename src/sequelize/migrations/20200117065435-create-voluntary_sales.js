'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('voluntary_sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      phone_number: {
        type: Sequelize.STRING
      },
      type_of_seller: {
        type: Sequelize.STRING
      },
      s_national_id: {
        type: Sequelize.STRING
      },
      s_matial_status: {
        type: Sequelize.STRING
      },
      seller_address: {
        type: Sequelize.STRING
      },
      upi: {
        type: Sequelize.STRING
      },
      type_of_buyer: {
        type: Sequelize.STRING
      },
      b_national_id: {
        type: Sequelize.STRING
      },
      b_matial_status: {
        type: Sequelize.STRING
      },
      buyer_address: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('voluntary_sales');
  }
};
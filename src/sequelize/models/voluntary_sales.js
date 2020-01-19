'use strict';
module.exports = (sequelize, DataTypes) => {
  const voluntary_sale = sequelize.define('voluntary_sales', {
    name: DataTypes.STRING,
    email:DataTypes.STRING,
    phone_number: DataTypes.STRING,
    type_of_seller: DataTypes.STRING,
    s_national_id: DataTypes.STRING,
    s_matial_status: DataTypes.STRING,
    seller_address: DataTypes.STRING,
    upi: DataTypes.STRING,
    type_of_buyer: DataTypes.STRING,
    b_national_id: DataTypes.STRING,
    b_matial_status: DataTypes.STRING,
    buyer_address: DataTypes.STRING
  }, {});
  voluntary_sale.associate = function(models) {
    // associations can be defined here
  };
  return voluntary_sale;
};
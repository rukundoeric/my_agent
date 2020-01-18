'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProvisionalTestRequest = sequelize.define('ProvisionalTestRequest', {
    nationalId: DataTypes.STRING,
    examType: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    examLanguage: DataTypes.STRING,
    district: DataTypes.STRING,
    testCenter: DataTypes.STRING
  }, {});
  ProvisionalTestRequest.associate = function(models) {
    // associations can be defined here
  };
  return ProvisionalTestRequest;
};
const Joi = require('@hapi/joi');
const { email, firstName, lastName, servicename, title, amount } = require('./schemas');

module.exports = {
  user: Joi.object().keys({
    email,
    firstName,
    lastName
  }),
  service: Joi.object().keys({
    servicename,
    title,
    amount
  })
}

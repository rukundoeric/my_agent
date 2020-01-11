const Joi = require('@hapi/joi');
const { email, firstName, lastName } = require('./schemas');

module.exports = {
  user: Joi.object().keys({
    email,
    firstName,
    lastName
  }),
}

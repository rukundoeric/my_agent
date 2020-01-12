const Joi = require('@hapi/joi');

const email = Joi.string()
  .trim()
  .lowercase()
  .email()
  .required()
  .label("Email is required and should look like this : example@email.com!");

const firstName = Joi.string()
  .required()
  .label("firstName is required and should be a string");

const lastName = Joi.string()
  .required()
  .label("lastName is required and should be a string");

module.exports = {
  email,
  lastName,
  firstName
};

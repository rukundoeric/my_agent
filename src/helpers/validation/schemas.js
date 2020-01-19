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
const servicename = Joi.string()
  .required()
  .label("servicename is required and should be a string");

  const title = Joi.string()
  .required()
  .label("tile is required and should be a string");
  const amount = Joi.number()
  .required()
  .label("amount is required and should be a number");

module.exports = {
  email,
  lastName,
  firstName,
  servicename,
  title,
  amount
};

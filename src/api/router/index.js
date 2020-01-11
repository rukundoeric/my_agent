const express = require('express');
const api = express();
const welcome = require('./welcome');
const user =  require('./User');

// Routers go here
api.use('/', welcome);
api.use('/users', user);

module.exports = api;

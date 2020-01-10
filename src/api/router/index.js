const express = require('express');
const api = express();
const welcome = require('./welcome');

// Routers go here
api.use('/', welcome);

module.exports = api;

const express = require('express');
const api = express();
const welcome = require('./welcome');
const voluntary_sale = require('./voluntary_sale');

// Routers go here
api.use('/', welcome);
api.use('/service', voluntary_sale)

module.exports = api;

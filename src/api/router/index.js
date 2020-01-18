const express = require('express');
const api = express();
const welcome = require('./welcome');
const provReq =  require('./ProvTestReq');
const voluntary_sale = require('./voluntary_sale');

// Routers go here
api.use('/', welcome);
api.use('/service', voluntary_sale)
api.use('/prov/test/:nationalId', provReq);
module.exports = api;

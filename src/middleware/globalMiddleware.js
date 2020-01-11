const bodyParser = require('body-parser');
const cors = require('cors');

const app = (app) => {
  app
    // Parse req object and make data available on req.body
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    // Allow cross origin requests
    .use(cors());
};

module.exports = app;
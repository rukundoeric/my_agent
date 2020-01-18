const { Router } = require("express");
//const validateBody = require("../../helpers/validation/validateBody");
const provControllers = require("../controllers/ProvisionTestRequest");

const provReqTestRouter = Router();

provReqTestRouter
  .post("/", provControllers.createRequestProvTest)


module.exports = provReqTestRouter;
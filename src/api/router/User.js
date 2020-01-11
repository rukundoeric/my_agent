const { Router } = require("express");
const validateBody = require("../../helpers/validation/validateBody");
const UserControllers = require("../controllers/User");

const userRouter = Router();

userRouter
  .route("/")
  .post(validateBody("user"), UserControllers.create)
  .get(UserControllers.getall);

module.exports = userRouter;

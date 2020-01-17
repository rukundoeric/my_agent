const { Router } = require("express");
const validateBody = require("../../helpers/validation/validateBody");
const valutarySaleControllers = require("../controllers/voluntary_sale");

const valutarysale = Router();

valutarysale
  .route("/valutarysale")
  .post(valutarySaleControllers.create)
  .get(valutarySaleControllers.getall);
valutarysale
  .route("/:id/valutarysale")
  .patch(valutarySaleControllers.update)
  .delete(valutarySaleControllers.delete);

module.exports = valutarysale;

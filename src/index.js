const express = require("express");
const dotenv = require("dotenv");
const db = require("./sequelize/models/index.js");
const api = require("./api/router/index.js");
const globalMiddleware = require("./middleware/globalMiddleware");
dotenv.config();

const port = process.env.PORT || 3000;
const app = express();
const { sequelize } = db;
globalMiddleware(app);
app.get("/", (req, res) => {
  res.redirect("/api/welcome");
});
app.use("/api", api);

app.use((req, res) => {
  res.status(404).send({
    status: 404,
    error: {
      message: "Page Not found"
    }
  });
});

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(
      `Database succesfully connected\nPID: ${process.pid} Server listening on port: ${port} in ${process.env.NODE_ENV} mode`
    );
  });
});

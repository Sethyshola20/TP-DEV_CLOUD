const { Router } = require("express");
const Routes = Router();

Routes.get("/", (req, res) => {
  return res.json({
    message: "Hello World",
  });
});

module.exports = Routes;

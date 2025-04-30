module.exports = function (app) {
  app.use("/", require("./api/login"));
  app.use("/", require("./api/orders"));
};

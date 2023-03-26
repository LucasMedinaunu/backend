const path = require("path");
const { create } = require("express-handlebars");

const hbsConfig = (app) => {
  const hbs = create({
    extname: ".hbs",
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, "../../../src/views/layouts"),
    partialsDir: [path.join(__dirname, "../../../src/views/partials")],
  });

  app.engine("hbs", hbs.engine);
  app.set("views", path.join(__dirname, "../../../src/views"));
  app.set("view engine", "hbs");
};

module.exports = hbsConfig;

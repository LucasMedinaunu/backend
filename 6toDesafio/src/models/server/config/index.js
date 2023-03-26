const catchError = require("./catchError");
const listenServer = require("./listenServer");
const loadRoutes = require("./loadRoutes");
const setupMiddlewares  = require("./setupMiddlewares");

module.exports = { catchError, listenServer, loadRoutes, setupMiddlewares  };
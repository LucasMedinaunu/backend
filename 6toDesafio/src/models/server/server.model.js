const express = require("express");
const { loadRoutes, listenServer, catchError, setupMiddlewares  } = require("./config");
const { connectToDatabase } = require("../../lib/mongodb");
const hbsConfig = require("../../lib/handlebars/hbs.config");
const path = require("path");

class ServerModel {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
  }

  #viewEngine() {
    hbsConfig(this.app);
  }

  async #connectToDatabase() {
    await connectToDatabase();
  }

  #setupMiddlewares() {
    setupMiddlewares (this.app);
  }

  #startListening() {
    listenServer(this.app, this.port);
  }

  #loadRoutesAndErrorHandlers() {
    loadRoutes(this.app);
    catchError(this.app);
  }

  start() {
    this.#viewEngine();
    this.#connectToDatabase();
    this.#setupMiddlewares();
    this.#loadRoutesAndErrorHandlers();
    this.#startListening();
  }
}

module.exports = ServerModel;

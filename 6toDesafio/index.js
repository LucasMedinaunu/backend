require("dotenv").config();
const ServerModel = require("./src/models");

const server = new ServerModel();
server.start();

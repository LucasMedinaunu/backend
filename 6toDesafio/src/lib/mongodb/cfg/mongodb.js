const { connect } = require("mongoose");
const showInConsole = require("../../../utils");
const dataConfig = require("./params.cfg");

const connectToDatabase = async () => {
  try {
    await connect(process.env.MONGODB_CNN, dataConfig);
    showInConsole("log", "Database online.");
  } catch (error) {
    throw new Error("Error on DB connection.");
  }
};

module.exports = connectToDatabase;

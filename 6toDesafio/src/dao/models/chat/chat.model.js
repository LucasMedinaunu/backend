const { model, Schema } = require("mongoose");
const reusableSchemaMethods = require("../../../lib/mongodb/cfg/reusableSchemaMethods");

const ChatModel = new Schema({
  user: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

reusableSchemaMethods(ChatModel); 
module.exports = model("Message", ChatModel); 
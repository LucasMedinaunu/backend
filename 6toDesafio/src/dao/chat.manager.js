const chatModel = require("./models/chat/chat.model");
const MongoManager = require("./mongo.manager");

class ChatManager {
  #persistence;
  constructor(persistence) {
    this.#persistence = persistence;
  }

  getAll() {
    return this.#persistence.getAll();
  }

  create(chat) {
    return this.#persistence.create(chat);
  }
}

const instance = new ChatManager(new MongoManager(chatModel));
module.exports = instance;

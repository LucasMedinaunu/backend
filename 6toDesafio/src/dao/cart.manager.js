const CartModel = require("../dao/models/cart/cart.model");
const MongoManager = require("./mongo.manager");

class CartManager {
  #persistence;
  constructor(persistence) {
    this.#persistence = persistence;
  }

  getAll() {
    return this.#persistence.getAll();
  }

  create(cart) {
    return this.#persistence.create(cart);
  }

  findById(id) {
    return this.#persistence.findById(id);
  }

  findByIdAndUpdate(id, cart) {
    return this.#persistence.findByIdAndUpdate(id, cart);
  }

  delete(id) {
    return this.#persistence.delete(id);
  }
}

const instance = new CartManager(new MongoManager(CartModel));
module.exports = instance;
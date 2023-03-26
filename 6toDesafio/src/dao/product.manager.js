const ProductModel = require("../dao/models/product/product.model");
const MongoManager = require("./mongo.manager");

class ProductManager {
  #persistence;
  constructor(persistence) {
    this.#persistence = persistence;
  }

  getAll() {
    return this.#persistence.getAll();
  }

  create(product) {
    return this.#persistence.create(product);
  }

  findById(id) {
    return this.#persistence.findById(id);
  }

  findByIdAndUpdate(id, product) {
    return this.#persistence.findByIdAndUpdate(id, product);
  }

  delete(id) {
    return this.#persistence.delete(id);
  }
}

const instance = new ProductManager(new MongoManager(ProductModel));
module.exports = instance;
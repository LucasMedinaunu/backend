const { model, Schema } = require("mongoose");
const reusableSchemaMethods = require("../../../lib/mongodb/cfg/reusableSchemaMethods");

const CartModel = new Schema({
  products: { type: Array, required: true },
});

reusableSchemaMethods(CartModel);

module.exports = model("Cart", CartModel);

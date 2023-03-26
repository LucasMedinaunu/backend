const { model, Schema } = require("mongoose");
const reusableSchemaMethods = require("../../../lib/mongodb/cfg/reusableSchemaMethods");

const ProductModel = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  code: { type: String, required: true, unique: true },
  stock: { type: Number, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  images: { type: Array, required: true },
  status: { type: Boolean, required: true },
});

reusableSchemaMethods(ProductModel);

module.exports = model("Product", ProductModel);
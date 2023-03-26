const { Router } = require("express");
const productManager = require("../dao/product.manager");
const uploadFiles = require("../lib/multer/multer.cfg");
const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const products = await productManager.getAll();
    res.send({ products });
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await productManager.findById(id);

    if (!product) throw new Error(`Error: Not data found.`);
    else res.send({ product });
  } catch (error) {
    next(error);
  }
});

router.post("/", uploadFiles, async (req, res, next) => {
  try {
    const product = req.body;
    const { files } = req;
    
    const newProduct = await productManager.create({...product, images: files });
    res.status(201).send({ newProduct });
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = req.body;
    const updatedProduct = await productManager.findByIdAndUpdate(id, {...product, _id: id });

    if (!updatedProduct) throw new Error(`Error: Not data found.`);
    else res.send({ updatedProduct });
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedProduct = await productManager.delete(id);

    if (!deletedProduct) throw new Error(`Error: Not data found.`);
    else res.send({ deletedProduct });
  } catch (error) {
    next(error);
  }
});

module.exports = router;

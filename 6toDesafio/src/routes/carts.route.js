const { Router } = require("express");
const router = Router();
const CartManager = require("../dao/cart.manager");

router.get("/", async (req, res) => {
  try {
    const carts = await CartManager.getAll();
    res.send({ carts });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const cart = await CartManager.findById(id);

    if (!cart) throw new Error(`Error: Not data found.`);
    else res.send({ cart });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const cart = req.body;
    const newCart = await CartManager.create(cart);
    res.status(201).send({ newCart });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const cart = req.body;
    const updatedCart = await CartManager.findByIdAndUpdate(id, { ...cart, _id: id });

    if (!updatedCart) throw new Error(`Error: Not data found.`);
    else res.send({ updatedCart });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCart = await CartManager.findByIdAndDelete(id);

    if (!deletedCart) throw new Error(`Error: Not data found.`);
    else res.send({ deletedCart });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;

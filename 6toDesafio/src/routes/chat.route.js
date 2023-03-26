const { Router } = require("express");
const router = Router();

router.get("/", async (req, res) => {
  try {
    res.render("chat", {
      title: "Chat - Nahuel Gomez App",
      isHome: true,
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

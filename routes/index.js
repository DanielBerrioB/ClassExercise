var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Express" });
});

router.get("/hola", (req, res, next) => {
  res.render("index", { title: "New express" });
});

router.get("/hola", (req, res, next) => {
  res.render("index", { title: "New express" });
});
router.get("/hola", (req, res, next) => {
  res.render("index", { title: "New express" });
});
module.exports = router;

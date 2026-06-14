const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => {
  res.json({ message: "Register route working" });
});

router.post("/login", (req, res) => {
  res.json({ message: "Login route working" });
});
router.get("/", (req, res) => {
  res.json({ message: "Auth route working" });
});
module.exports = router;
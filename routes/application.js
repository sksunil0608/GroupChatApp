const express = require("express");
const router = express.Router();

router.post("/application", (req, res, next) => {
  res.redirect('/')
});

module.exports = router;

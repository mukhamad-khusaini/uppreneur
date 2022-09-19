const express = require("express");
const router = express.Router();

router.get("/umkmku/wawasan", (req, res) => {
    res.render("editor");
});

module.exports = router;

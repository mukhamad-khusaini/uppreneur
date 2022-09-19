const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    if (req.cookies.token) {
        res.redirect("/");
    } else {
        res.render("login");
    }
});

module.exports = router;

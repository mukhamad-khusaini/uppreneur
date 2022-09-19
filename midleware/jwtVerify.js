let express = require("express");
let cookieParser = require("cookie-parser");
let app = express();

async function jwtVerify(req, res, next) {
    let cookie = req.cookies;
    if (!cookie.token) {
        res.redirect("/login");
    } else {
        next();
    }
}

module.exports = jwtVerify;

require("dotenv").config();
const express = require("express");
let cookieParser = require("cookie-parser");
const app = express();
const bodyParser = require("body-parser");
const jwtVerify = require("./midleware/jwtVerify");

let oauthRouter = require("./routes/oauth");
let signUpRouter = require("./routes/signUp");
let authRouter = require("./routes/auth");
let loginRouter = require("./routes/login");
let umkmkuRouter = require("./routes/umkmku");
let inputRouter = require("./routes/input");
let uploadRouter = require("./routes/upload");
let editorRouter = require("./routes/editor");
let buildUmkmRouter = require("./routes/buildUmkm");
let aboutRouter = require("./routes/about");

app.use(express.static("public"));
app.use(cookieParser());
app.use(express.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/oauth", oauthRouter);
app.use("/signUp", signUpRouter);
app.use("/auth", authRouter);
app.use("/login", loginRouter);
app.use("/umkmku", jwtVerify, umkmkuRouter);
app.use("/input", jwtVerify, inputRouter);
app.use("/upload", uploadRouter);
app.use("/editor", jwtVerify, editorRouter);
app.use("/buildUmkm", jwtVerify, buildUmkmRouter);
app.use("/about", aboutRouter);

app.get("/*", jwtVerify, (req, res) => {
    res.render("beranda");
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Listening on port ${process.env.PORT || 3000}`);
});

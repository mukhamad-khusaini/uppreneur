require("dotenv").config();
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const dovehash = require("dovehash");
const randomString = require("randomstring");
const { MongoClient } = require("mongodb");
const client = new MongoClient(process.env.MONGOURI);

router.post("/verify", async (req, res) => {
    if (req.cookies.token) {
        res.redirect("/");
    } else {
        let comingUser = req.body;
        client.connect(async () => {
            const db = client.db("pmfe");
            const coll = db.collection("user");
            let hashes = dovehash.encode("SSHA", comingUser.pass, "muted").hash;
            let id = randomString.generate();

            if (await coll.findOne({ email: comingUser.email })) {
                res.redirect("/login");
            } else {
                let userData = {
                    _id: id,
                    firstName: comingUser.firstName,
                    lastName: comingUser.lastName,
                    email: comingUser.email.toLowerCase(),
                    password: hashes,
                    usaha: comingUser.punyaUsaha,
                };

                await coll.insertOne(userData);

                let token = jwt.sign(
                    {
                        user_id: id,
                        email: comingUser.email.toLowerCase(),
                    },
                    process.env.SECRET
                );

                res.cookie("token", token, {
                    httpOnly: true,
                    sameSite: "lax",
                });

                res.redirect(`/`);
            }

            await client.close();
        });
    }
});

router.get("/", (req, res) => {
    if (req.cookies.token) {
        res.redirect("/");
    } else {
        res.render("signUp");
    }
});

module.exports = router;

require("dotenv").config();
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const dovehash = require("dovehash");
const { MongoClient } = require("mongodb");
const client = new MongoClient(process.env.MONGOURI);

router.post("/", (req, res) => {
    let comingUser = req.body;

    client.connect(async () => {
        const db = client.db("pmfe");
        const coll = db.collection("user");
        let hashes = dovehash.encode("SSHA", comingUser.pass, "muted").hash;
        let oldUser = await coll.findOne({ email: comingUser.email });

        if (!oldUser) {
            res.redirect("/signUp");
        } else {
            if (hashes === oldUser.password) {
                let token = jwt.sign(
                    {
                        user_id: oldUser._id,
                        email: oldUser.email,
                    },
                    process.env.SECRET
                );

                res.cookie("token", token, {
                    httpOnly: true,
                    sameSite: "lax",
                });
                res.redirect(`/`);
            } else {
                res.redirect("/login?massage=falsePassword");
            }
        }

        await client.close();
    });
});

module.exports = router;

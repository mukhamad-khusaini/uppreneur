require("dotenv").config();
const express = require("express");
const { google } = require("googleapis");
const router = express.Router();
const url = require("url");
const jwt = require("jsonwebtoken");
const randomString = require("randomstring");
const { MongoClient } = require("mongodb");
const client = new MongoClient(process.env.MONGOURI);

let clientId = process.env.CLIENT_ID;
let clientSecret = process.env.CLIENT_SECRET;
let redirectUrl = process.env.REDIRECT_URL;

let oauth2Client = new google.auth.OAuth2(clientId, clientSecret, redirectUrl);
let scopes = ["https://www.googleapis.com/auth/userinfo.email", "https://www.googleapis.com/auth/userinfo.profile"];

const authorizationUrl = oauth2Client.generateAuthUrl({
    // 'online' (default) or 'offline' (gets refresh_token)
    access_type: "offline",
    /** Pass in the scopes array defined above.
     * Alternatively, if only one scope is needed, you can pass a scope URL as a string */
    scope: scopes.join(" "),
    // Enable incremental authorization. Recommended as a best practice.
    include_granted_scopes: true,
});

router.get("/google", async (req, res) => {
    let q = url.parse(req.url, true).query;
    let { tokens } = await oauth2Client.getToken(q.code);
    oauth2Client.setCredentials(tokens);
    let { credentials } = oauth2Client;
    let decoded = jwt.decode(credentials.id_token);
    // res.json(jwt.decode(credentials.id_token));
    client.connect(async () => {
        const db = client.db("pmfe");
        const coll = db.collection("user");
        const resData = await coll.findOne({ email: decoded.email });
        let id = randomString.generate();

        if (resData) {
            if (decoded.sub === resData.password) {
                let token = jwt.sign(
                    {
                        user_id: id,
                        email: decoded.email,
                    },
                    process.env.SECRET
                );

                res.cookie("token", token, {
                    httpOnly: true,
                    sameSite: "lax",
                });
                res.redirect(`/`);
            }
        } else {
            let userData = {
                _id: id,
                firstName: decoded.given_name,
                lastName: decoded.family_name,
                email: decoded.email.toLowerCase(),
                password: decoded.sub,
                usaha: false,
            };

            let result = await coll.insertOne(userData);

            let token = jwt.sign(
                {
                    user_id: id,
                    email: decoded.email.toLowerCase(),
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
});

router.get("/login", (req, res) => {
    res.writeHead(301, { Location: authorizationUrl });
    res.end();
});

router.get("/signUp", (req, res) => {
    res.writeHead(301, { Location: authorizationUrl });
    res.end();
});

module.exports = router;

require("dotenv").config();
const express = require("express");
const router = express.Router();
const { MongoClient } = require("mongodb");
const client = new MongoClient(process.env.MONGOURI);
const formidable = require("formidable");
const fs = require("fs");

router.post("/", (req, res) => {
    const coming = formidable({ multiples: true });
    coming.parse(req, async (err, fields, files) => {
        if (err) {
            res.writeHead(err.httpCode || 400, { "Content-Type": "text/plain" });
            res.end(String(err));
            return;
        }

        let dirName = __dirname.split("\\");

        let fileName = `${files.coverImg.newFilename}.${files.coverImg.mimetype.split("/")[1]}`;
        let oldPath = files.coverImg.filepath;
        let newPath = `${dirName.slice(0, dirName.length - 1).join("\\")}\\public\\img\\${fileName}`;
        fs.rename(oldPath, newPath, (err) => {
            if (err) {
                res.writeHead(404, "Can't Upload File");
                res.end();
            }
        });

        let tempObj = {
            title: fields.title,
            date: fields.date,
            articleData: fields.articleData,
            bidang: fields.bidang,
            coverImg: `${process.env.BASE_URL}/img/${fileName}`,
        };

        client.connect(async () => {
            const db = client.db("pmfe");
            const coll = db.collection("article_wawasan_umkmku");
            let heat = await coll.insertOne(tempObj);
            res.json({
                success: "ok",
                status: 200,
                coverImg: `${process.env.BASE_URL}/img/${fileName}`,
                insertId: heat.insertedId,
            });
            await client.close();
        });
    });
});

module.exports = router;

const express = require("express");
const router = express.Router();
const { MongoClient, ObjectId } = require("mongodb");
const client = new MongoClient(process.env.MONGOURI);

router.get("/", (req, res) => {
    res.render("umkmku");
});

router.get("/umkmKuWawasan/*", (req, res) => {
    let param = req.params["0"];
    client.connect(async () => {
        const db = client.db("pmfe");
        const coll = db.collection("article_wawasan_umkmku");
        let datas = await coll.find({ bidang: param }).project({ articleData: 0 }).toArray();

        res.render("umkmKuWawasan", { datas, param });

        await client.close();
    });
});

router.get("/articleWawasanUmkmku/*", (req, res) => {
    let param = req.params["0"];
    client.connect(async () => {
        const db = client.db("pmfe");
        const coll = db.collection("article_wawasan_umkmku");
        let datas = await coll.findOne({ _id: ObjectId(param) });

        res.render("articleWawasanUmkmku", { datas });
        await client.close();
    });
});

module.exports = router;

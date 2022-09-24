const express = require("express");
const router = express.Router();
const { MongoClient, ObjectId } = require("mongodb");
const client = new MongoClient(process.env.MONGOURI);

router.get("/", (req, res) => {
    res.render("umkmku");
});

router.get("/pendanaan", (req, res) => {
    client.connect(async () => {
        let db = client.db("pmfe");
        let coll = db.collection("umkmku-pendanaan");
        let heat = await coll.find({}).toArray();
        res.render("umkmkuPendanaan", { data: heat });
        await client.close();
    });
});

router.get("/webinar", (req, res) => {
    client.connect(async () => {
        let db = client.db("pmfe");
        let coll = db.collection("umkmku-webinar");
        let heat = await coll.find({}).toArray();
        res.render("umkmkuWebinar", { data: heat });
        await client.close();
    });
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

router.get("/pelatihanUmkmku/Keuangan/module/*", (req, res) => {
    let moduleId = req.url.split("/")[4];
    client.connect(async () => {
        const db = client.db("pmfe");
        const coll = db.collection("pelatihan-keuangan");
        let tempObj = await coll.findOne({ _id: ObjectId(moduleId) });
        res.render("umkmkuModule", { data: tempObj });
        await client.close();
    });
});

router.get("/pelatihanUmkmku/keuangan", (req, res) => {
    client.connect(async () => {
        let db = client.db("pmfe");
        let coll = db.collection("pelatihan-keuangan");
        let result = await coll.find({}).toArray();
        res.render("pelatihanUmkmku", { result, bidang: "Keuangan" });

        await client.close();
    });
});

router.get("/pelatihanUmkmku/SDM/module/*", (req, res) => {
    let moduleId = req.url.split("/")[4];
    client.connect(async () => {
        const db = client.db("pmfe");
        const coll = db.collection("pelatihan-sdm");
        let tempObj = await coll.findOne({ _id: ObjectId(moduleId) });
        res.render("umkmkuModule", { data: tempObj });
        await client.close();
    });
});

router.get("/pelatihanUmkmku/sdm", (req, res) => {
    client.connect(async () => {
        let db = client.db("pmfe");
        let coll = db.collection("pelatihan-sdm");
        let result = await coll.find({}).toArray();
        res.render("pelatihanUmkmku", { result, bidang: "SDM" });

        await client.close();
    });
});

router.get("/pelatihanUmkmku/Operasional/module/*", (req, res) => {
    let moduleId = req.url.split("/")[4];
    client.connect(async () => {
        const db = client.db("pmfe");
        const coll = db.collection("pelatihan-operasional");
        let tempObj = await coll.findOne({ _id: ObjectId(moduleId) });
        res.render("umkmkuModule", { data: tempObj });
        await client.close();
    });
});

router.get("/pelatihanUmkmku/operasional", (req, res) => {
    client.connect(async () => {
        let db = client.db("pmfe");
        let coll = db.collection("pelatihan-operasional");
        let result = await coll.find({}).toArray();
        res.render("pelatihanUmkmku", { result, bidang: "Operasional" });

        await client.close();
    });
});

router.get("/pelatihanUmkmku/Pemasaran/module/*", (req, res) => {
    let moduleId = req.url.split("/")[4];
    client.connect(async () => {
        const db = client.db("pmfe");
        const coll = db.collection("pelatihan-pemasaran");
        let tempObj = await coll.findOne({ _id: ObjectId(moduleId) });
        res.render("umkmkuModule", { data: tempObj });
        await client.close();
    });
});

router.get("/pelatihanUmkmku/pemasaran", (req, res) => {
    client.connect(async () => {
        let db = client.db("pmfe");
        let coll = db.collection("pelatihan-pemasaran");
        let result = await coll.find({}).toArray();
        res.render("pelatihanUmkmku", { result, bidang: "Pemasaran" });

        await client.close();
    });
});

router.get("/module", (req, res) => {
    res.render("umkmkuModule");
});

module.exports = router;

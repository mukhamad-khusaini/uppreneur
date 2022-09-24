const express = require("express");
const router = express.Router();
const { MongoClient, ObjectId } = require("mongodb");
const client = new MongoClient(process.env.MONGOURI);

router.get("/", (req, res) => {
    res.render("buildUmkm");
});

router.get("/pendanaan", (req, res) => {
    client.connect(async () => {
        let db = client.db("pmfe");
        let coll = db.collection("buildUmkm-pendanaan");
        let heat = await coll.find({}).toArray();
        res.render("buildUmkmPendanaan", { data: heat });
        await client.close();
    });
});

router.get("/webinar", (req, res) => {
    client.connect(async () => {
        let db = client.db("pmfe");
        let coll = db.collection("buildUmkm-webinar");
        let heat = await coll.find({}).toArray();
        res.render("buildUmkmWebinar", { data: heat });
        await client.close();
    });
});

router.get("/buildUmkmWawasan/*", (req, res) => {
    let param = req.params["0"];

    client.connect(async () => {
        const db = client.db("pmfe");
        const coll = db.collection("article-wawasan-buildUmkm");
        let datas = await coll.find({ bidang: param }).project({ articleData: 0 }).toArray();

        res.render("buildUmkmWawasan", { datas, param });

        await client.close();
    });
});

router.get("/articleWawasanBuildUmkm/*", (req, res) => {
    let param = req.params["0"];
    client.connect(async () => {
        const db = client.db("pmfe");
        const coll = db.collection("article-wawasan-buildUmkm");
        let datas = await coll.findOne({ _id: ObjectId(param) });

        res.render("articleWawasanBuildUmkm", { datas });
        await client.close();
    });
});

router.get("/pelatihanBuildUmkm/Keuangan/module/*", (req, res) => {
    let moduleId = req.url.split("/")[4];
    client.connect(async () => {
        const db = client.db("pmfe");
        const coll = db.collection("pelatihan-keuangan-buildUmkm");
        let tempObj = await coll.findOne({ _id: ObjectId(moduleId) });
        res.render("buildUmkmModule", { data: tempObj });
        await client.close();
    });
});

router.get("/pelatihanBuildUmkm/keuangan", (req, res) => {
    client.connect(async () => {
        let db = client.db("pmfe");
        let coll = db.collection("pelatihan-keuangan-buildUmkm");
        let result = await coll.find({}).toArray();
        res.render("pelatihanBuildUmkm", { result, bidang: "Keuangan" });

        await client.close();
    });
});

router.get("/pelatihanBuildUmkm/SDM/module/*", (req, res) => {
    let moduleId = req.url.split("/")[4];
    client.connect(async () => {
        const db = client.db("pmfe");
        const coll = db.collection("pelatihan-sdm-buildUmkm");
        let tempObj = await coll.findOne({ _id: ObjectId(moduleId) });
        res.render("buildUmkmModule", { data: tempObj });
        await client.close();
    });
});

router.get("/pelatihanBuildUmkm/sdm", (req, res) => {
    client.connect(async () => {
        let db = client.db("pmfe");
        let coll = db.collection("pelatihan-sdm-buildUmkm");
        let result = await coll.find({}).toArray();
        res.render("pelatihanBuildUmkm", { result, bidang: "SDM" });

        await client.close();
    });
});

router.get("/pelatihanBuildUmkm/Operasional/module/*", (req, res) => {
    let moduleId = req.url.split("/")[4];
    client.connect(async () => {
        const db = client.db("pmfe");
        const coll = db.collection("pelatihan-operasional-buildUmkm");
        let tempObj = await coll.findOne({ _id: ObjectId(moduleId) });
        res.render("buildUmkmModule", { data: tempObj });
        await client.close();
    });
});

router.get("/pelatihanBuildUmkm/operasional", (req, res) => {
    client.connect(async () => {
        let db = client.db("pmfe");
        let coll = db.collection("pelatihan-operasional-buildUmkm");
        let result = await coll.find({}).toArray();
        res.render("pelatihanBuildUmkm", { result, bidang: "Operasional" });

        await client.close();
    });
});

router.get("/pelatihanBuildUmkm/Pemasaran/module/*", (req, res) => {
    let moduleId = req.url.split("/")[4];
    client.connect(async () => {
        const db = client.db("pmfe");
        const coll = db.collection("pelatihan-pemasaran-buildUmkm");
        let tempObj = await coll.findOne({ _id: ObjectId(moduleId) });
        res.render("buildUmkmModule", { data: tempObj });
        await client.close();
    });
});

router.get("/pelatihanBuildUmkm/pemasaran", (req, res) => {
    client.connect(async () => {
        let db = client.db("pmfe");
        let coll = db.collection("pelatihan-pemasaran-buildUmkm");
        let result = await coll.find({}).toArray();
        res.render("pelatihanBuildUmkm", { result, bidang: "Pemasaran" });

        await client.close();
    });
});

module.exports = router;

require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
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

router.post("/buildUmkmWawasan", (req, res) => {
    const coming = formidable({ multiples: true });
    coming.parse(req, async (err, fields, files) => {
        if (err) {
            res.writeHead(err.httpCode || 400, { "Content-Type": "text/plain" });
            res.end(String(err));
            return;
        }

        let dirName = __dirname.split("\\");

        let fileName = `${files.coverBuildUmkmImg.newFilename}.${files.coverBuildUmkmImg.mimetype.split("/")[1]}`;
        let oldPath = files.coverBuildUmkmImg.filepath;
        let newPath = `${dirName.slice(0, dirName.length - 1).join("\\")}\\public\\img\\${fileName}`;
        fs.rename(oldPath, newPath, (err) => {
            if (err) {
                res.writeHead(404, "Can't Upload File");
                res.end();
            }
        });

        let tempObj = {
            title: fields.titleBuildUmkm,
            date: fields.buildUmkmDate,
            articleData: fields.articleData,
            bidang: fields.bidangBuildUmkm,
            coverImg: `${process.env.BASE_URL}/img/${fileName}`,
        };

        client.connect(async () => {
            const db = client.db("pmfe");
            const coll = db.collection("article-wawasan-buildUmkm");
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

router.post("/pendanaan", (req, res) => {
    const coming = formidable({ multiples: true });
    coming.parse(req, async (err, fields, files) => {
        if (err) {
            res.writeHead(err.httpCode || 400, { "Content-Type": "text/plain" });
            res.end(String(err));
            return;
        }

        let dirName = __dirname.split("\\");

        let fileName = `${files.pendanaanUmkmkuPamflet.newFilename}.${files.pendanaanUmkmkuPamflet.mimetype.split("/")[1]}`;
        let oldPath = files.pendanaanUmkmkuPamflet.filepath;
        let newPath = `${dirName.slice(0, dirName.length - 1).join("\\")}\\public\\img\\${fileName}`;
        fs.rename(oldPath, newPath, (err) => {
            if (err) {
                res.writeHead(404, "Can't Upload File");
                res.end();
            }
        });

        let tempObj = {
            title: fields.pendanaanTitle,
            description: fields.pendanaanDescription,
            sk: fields.sk,
            alur: fields.alur,
            link: fields.pendanaanLink,
            pamflet: `${process.env.BASE_URL}/img/${fileName}`,
        };

        client.connect(async () => {
            const db = client.db("pmfe");
            const coll = db.collection("umkmku-pendanaan");
            let heat = await coll.insertOne(tempObj);
            res.redirect("/umkmku/pendanaan");
            await client.close();
        });
    });
});

router.post("/buildUmkm/pendanaan", (req, res) => {
    const coming = formidable({ multiples: true });
    coming.parse(req, async (err, fields, files) => {
        if (err) {
            res.writeHead(err.httpCode || 400, { "Content-Type": "text/plain" });
            res.end(String(err));
            return;
        }

        let dirName = __dirname.split("\\");

        let fileName = `${files.pendanaanBuildUmkmPamflet.newFilename}.${files.pendanaanBuildUmkmPamflet.mimetype.split("/")[1]}`;
        let oldPath = files.pendanaanBuildUmkmPamflet.filepath;
        let newPath = `${dirName.slice(0, dirName.length - 1).join("\\")}\\public\\img\\${fileName}`;
        fs.rename(oldPath, newPath, (err) => {
            if (err) {
                res.writeHead(404, "Can't Upload File");
                res.end();
            }
        });

        let tempObj = {
            title: fields.pendanaanBuildUmkmTitle,
            description: fields.pendanaanBuildUmkmDescription,
            sk: fields.skBuildUmkm,
            alur: fields.alurBuildUmkm,
            link: fields.pendanaanBuildUmkmLink,
            pamflet: `${process.env.BASE_URL}/img/${fileName}`,
        };

        client.connect(async () => {
            const db = client.db("pmfe");
            const coll = db.collection("buildUmkm-pendanaan");
            let heat = await coll.insertOne(tempObj);
            res.redirect("/buildUmkm/pendanaan");
            await client.close();
        });
    });
});

router.post("/webinar", (req, res) => {
    const coming = formidable({ multiples: true });
    coming.parse(req, async (err, fields, files) => {
        if (err) {
            res.writeHead(err.httpCode || 400, { "Content-Type": "text/plain" });
            res.end(String(err));
            return;
        }

        let dirName = __dirname.split("\\");

        let fileName = `${files.pamflet.newFilename}.${files.pamflet.mimetype.split("/")[1]}`;
        let oldPath = files.pamflet.filepath;
        let newPath = `${dirName.slice(0, dirName.length - 1).join("\\")}\\public\\img\\${fileName}`;
        fs.rename(oldPath, newPath, (err) => {
            if (err) {
                res.writeHead(404, "Can't Upload File");
                res.end();
            }
        });

        let tempObj = {
            title: fields.webinarTitle,
            date: fields.date,
            description: fields.webinarDescription,
            link: fields.webinarLink,
            pamflet: `${process.env.BASE_URL}/img/${fileName}`,
        };

        client.connect(async () => {
            const db = client.db("pmfe");
            const coll = db.collection("umkmku-webinar");
            let heat = await coll.insertOne(tempObj);
            res.redirect("/umkmku/webinar");
            await client.close();
        });
    });
});

router.post("/buildUmkm/webinar", (req, res) => {
    const coming = formidable({ multiples: true });
    coming.parse(req, async (err, fields, files) => {
        if (err) {
            res.writeHead(err.httpCode || 400, { "Content-Type": "text/plain" });
            res.end(String(err));
            return;
        }

        let dirName = __dirname.split("\\");

        let fileName = `${files.pamfletBuildUmkm.newFilename}.${files.pamfletBuildUmkm.mimetype.split("/")[1]}`;
        let oldPath = files.pamfletBuildUmkm.filepath;
        let newPath = `${dirName.slice(0, dirName.length - 1).join("\\")}\\public\\img\\${fileName}`;
        fs.rename(oldPath, newPath, (err) => {
            if (err) {
                res.writeHead(404, "Can't Upload File");
                res.end();
            }
        });

        let tempObj = {
            title: fields.webinarBuildUmkmTitle,
            date: fields.dateBuildUmkm,
            description: fields.webinarBuildUmkmDescription,
            link: fields.webinarBuildUmkmLink,
            pamflet: `${process.env.BASE_URL}/img/${fileName}`,
        };

        client.connect(async () => {
            const db = client.db("pmfe");
            const coll = db.collection("buildUmkm-webinar");
            let heat = await coll.insertOne(tempObj);
            res.redirect("/buildUmkm/webinar");
            await client.close();
        });
    });
});

router.post("/umkmkuPelatihan/keuangan", (req, res) => {
    let dataPelatihan = req.body;
    client.connect(async () => {
        const db = client.db("pmfe");
        const coll = db.collection("pelatihan-keuangan");
        let tempObj = {
            date: new Date(),
            data: { ...dataPelatihan },
            bidang: "keuangan",
        };
        let heat = await coll.insertOne(tempObj);
        res.render("umkmkuModule", { data: tempObj });
        await client.close();
    });
});

router.post("/umkmkuPelatihan/pemasaran", (req, res) => {
    let dataPelatihan = req.body;
    client.connect(async () => {
        const db = client.db("pmfe");
        const coll = db.collection("pelatihan-pemasaran");
        let tempObj = {
            date: new Date(),
            data: { ...dataPelatihan },
            bidang: "pemasaran",
        };
        let heat = await coll.insertOne(tempObj);
        res.render("umkmkuModule", { data: tempObj });
        await client.close();
    });
});

router.post("/umkmkuPelatihan/sdm", (req, res) => {
    let dataPelatihan = req.body;
    client.connect(async () => {
        const db = client.db("pmfe");
        const coll = db.collection("pelatihan-sdm");
        let tempObj = {
            date: new Date(),
            data: { ...dataPelatihan },
            bidang: "sdm",
        };
        let heat = await coll.insertOne(tempObj);
        res.render("umkmkuModule", { data: tempObj });
        await client.close();
    });
});

router.post("/umkmkuPelatihan/operasional", (req, res) => {
    let dataPelatihan = req.body;
    client.connect(async () => {
        const db = client.db("pmfe");
        const coll = db.collection("pelatihan-operasional");
        let tempObj = {
            date: new Date(),
            data: { ...dataPelatihan },
            bidang: "operasional",
        };
        let heat = await coll.insertOne(tempObj);
        res.render("umkmkuModule", { data: tempObj });
        await client.close();
    });
});

router.post("/buildUmkm/keuangan", (req, res) => {
    let dataPelatihan = req.body;
    client.connect(async () => {
        const db = client.db("pmfe");
        const coll = db.collection("pelatihan-keuangan-buildUmkm");
        let tempObj = {
            date: new Date(),
            data: { ...dataPelatihan },
            bidang: "keuangan",
        };
        let heat = await coll.insertOne(tempObj);
        res.render("buildUmkmModule", { data: tempObj });
        await client.close();
    });
});

router.post("/buildUmkm/pemasaran", (req, res) => {
    let dataPelatihan = req.body;
    client.connect(async () => {
        const db = client.db("pmfe");
        const coll = db.collection("pelatihan-pemasaran-buildUmkm");
        let tempObj = {
            date: new Date(),
            data: { ...dataPelatihan },
            bidang: "pemasaran",
        };
        let heat = await coll.insertOne(tempObj);
        res.render("buildUmkmModule", { data: tempObj });
        await client.close();
    });
});

router.post("/buildUmkm/sdm", (req, res) => {
    let dataPelatihan = req.body;
    client.connect(async () => {
        const db = client.db("pmfe");
        const coll = db.collection("pelatihan-sdm-buildUmkm");
        let tempObj = {
            date: new Date(),
            data: { ...dataPelatihan },
            bidang: "sdm",
        };
        let heat = await coll.insertOne(tempObj);
        res.render("buildUmkmModule", { data: tempObj });
        await client.close();
    });
});

router.post("/buildUmkm/operasional", (req, res) => {
    let dataPelatihan = req.body;
    client.connect(async () => {
        const db = client.db("pmfe");
        const coll = db.collection("pelatihan-operasional-buildUmkm");
        let tempObj = {
            date: new Date(),
            data: { ...dataPelatihan },
            bidang: "operasional",
        };
        let heat = await coll.insertOne(tempObj);
        res.render("buildUmkmModule", { data: tempObj });
        await client.close();
    });
});

// router.post("/done/keuangan", (req, res) => {
//     let userData = jwt.verify(req.cookies.token, process.env.SECRET);
//     client.connect(async () => {
//         let db = client.db("pmfe");
//         let userColl = db.collection("user");
//         let user = await userColl.findOne({ _id: userData.user_id });
//         if (user.done) {
//             let dataKeuangan = user.done.keuangan;
//             dataKeuangan.push(req.body.whatDone);
//         } else {
//             let obj = {
//                 keuangan: `_${req.body.moduleId}=${req.body.whatDone} `,
//             };
//         }

//         await client.close();
//     });
// });

module.exports = router;

const express = require("express");
const router = express.Router();

router.get("/umkmku/wawasan", (req, res) => {
    res.render("editor");
});

router.get("/umkmku/pelatihan/*", (req, res) => {
    let bidang = req.url.split("/")[3];
    res.render("editorPelatihan", { bidang });
});

router.get("/umkmku/webinar", (req, res) => {
    res.render("editorUmkmkuWebinar");
});
router.get("/umkmku/pendanaan", (req, res) => {
    res.render("editorUmkmkuPendanaan");
});

router.get("/buildUmkm/wawasan", (req, res) => {
    res.render("editorBuildUmkm");
});

router.get("/buildUmkm/pelatihan/*", (req, res) => {
    let bidang = req.url.split("/")[3];
    res.render("editorBuildUmkmPelatihan", { bidang });
});

router.get("/buildUmkm/webinar", (req, res) => {
    res.render("editorBuildUmkmWebinar");
});

router.get("/buildUmkm/pendanaan", (req, res) => {
    res.render("editorBuildUmkmPendanaan");
});

module.exports = router;

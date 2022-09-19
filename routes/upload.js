require("dotenv").config();
const express = require("express");
const router = express.Router();
const formidable = require("formidable");
const fs = require("fs");

router.post("/", (req, res) => {
    const form = formidable({ multiples: true });
    form.parse(req, (err, fields, files) => {
        if (err) {
            res.writeHead(err.httpCode || 400, { "Content-Type": "text/plain" });
            res.end(String(err));
            return;
        }

        let dirName = __dirname.split("\\");

        let fileName = `${files.image.newFilename}.${files.image.mimetype.split("/")[1]}`;
        let oldPath = files.image.filepath;
        let newPath = `${dirName.slice(0, dirName.length - 1).join("\\")}\\public\\img\\${fileName}`;
        fs.rename(oldPath, newPath, (err) => {
            if (err) {
                console.log(err);

                res.writeHead(404, "Can't Upload File");
                res.json(err);
                return;
            }
            res.json({
                success: 1,
                file: {
                    url: `${process.env.BASE_URL}/img/${fileName}`,
                    // ... and any additional fields you want to store, such as width, height, color, extension, etc
                },
            });
        });
    });
});

module.exports = router;

const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    // download the file via aws s3 here
    var filename = req.body["filename"];
    console.log("S3 FILENAME")
    console.log(filename)
    //var filename = "test.txt";

    var bucket = process.env.REACT_APP_S3_BUCKET
    if (req.body["bucket"]) {
        bucket = req.body["bucket"]
    }

    var AWS = require("aws-sdk");
    AWS.config.update({
        accessKeyId: process.env.REACT_APP_S3_ACCESS_KEY_ID,
        secretAccessKey: process.env.REACT_APP_S3_SECRET_ACCESS_KEY,
        region: process.env.REACT_APP_S3_REGION,
    });
    var s3 = new AWS.S3();
    var options = {
        Bucket: bucket,
        Key: filename,
    };

    res.attachment(filename);
    var fileStream = s3.getObject(options).createReadStream();

    fileStream.pipe(res);
});

module.exports = router;

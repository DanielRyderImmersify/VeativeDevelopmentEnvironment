const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
    res.send("Test send return text")
});

module.exports = router;
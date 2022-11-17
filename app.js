const express = require('express')
require("dotenv").config();
const app = express(),
    bodyParser = require("body-parser");
const path = require('path')
const port = process.env.PORT || 9000

 var sanitizer = require("sanitize")();

const rateLimit = require("express-rate-limit");
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 1000, // Limit each IP to 1000 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

const testRoute = require('./node/routes/exampleRoute')
const updateUserData = require('./node/routes/updateUserData')

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('sanitize').middleware);

app.use(express.static("build"));


process.on("uncaughtException", function (error) {
    console.log(error.stack);
});


app.get('/api/test', (req, res) => {
    console.log(req.body)
    res.send('test complete')
})

// Apply the rate limiting middleware to API calls only
app.use('/api', apiLimiter)

app.use('/api/updateUserData', updateUserData)


if (process.env.NODE_ENV === "production") {
    app.get("/productiontest", (req, res) => {
        if (req.header("x-forwarded-proto") !== "https") {
            res.send(
                "Production test success on http not secure "+
                `https://${req.header("host")}${req.url}`
            );
        }
        else res.send('Production test success on https secure')
    });

    app.use((req, res, next) => {
        if (req.header("x-forwarded-proto") !== "https")
        {
            console.log(
                "1 redirect to " + `https://${req.header("host")}${req.url}`
            );
            res.redirect(`https://${req.header("host")}${req.url}`);
        }

        else {
            console.log('1 already secure')
            next();
        }
    });

    app.use(express.static('build'))
    app.get('*', (req, res) => {
        if (req.header("x-forwarded-proto") !== "https")
        {
            res.redirect(`https://${req.header("host")}${req.url}`);

            console.log(
                "2 redirect to " + `https://${req.header("host")}${req.url}`
            );
        }
        else {
            console.log('1 already secure')
            res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
        }
    })
}

app.listen(port, (err) => {
    if (err) return console.log(err)
    console.log("server running on port: ", port)
})
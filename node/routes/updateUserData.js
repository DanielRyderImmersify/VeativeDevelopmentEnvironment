
const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    UpdateUserData(req.body.Data, req.body.SessionTicket, res)
});

module.exports = router;


function UpdateUserData (data, sessionTicket, res) {
    if (JSON.parse(Object.keys(data).length > 10)) {
        var firstTen = '{'
        for (let index = 0; index < 10; index++) {
            firstTen =
                firstTen +
                '"' +
                Object.keys(data)[index] +
                '":"' +
                data[Object.keys(data)[index]] +
                '",';
        }
        firstTen = firstTen.slice(0, -1) + '}'
        var rest = '{'
        for (
            let index = 10;
            index < Object.keys(data).length;
            index++
        ) {
            rest =
                rest +
                '\n' + '  "' +
                Object.keys(data)[index] +
                '":"' +
                data[Object.keys(data)[index]] +
                '",';
        }
        rest = rest.slice(0, -1) + '\n}'
        MakePlayfabRequest(JSON.parse(firstTen), sessionTicket, res)

        setTimeout(function() {
            UpdateUserData(JSON.parse(rest), sessionTicket)
        }, 10000)
    }
    else {
        MakePlayfabRequest(data, sessionTicket, res)
    }
}

function MakePlayfabRequest (data, sessionTicket, res) {

    var raw = 
        '{"Data":' +
        JSON.stringify(data) +
        ',"Permission":"Public"}'

    var axios = require("axios");

    var config = {
        method: "post",
        url: "https://29001.playfabapi.com/Client/UpdateUserData",
        headers: {
            "X-Authorization":
                sessionTicket,
            "Content-Type": "application/json",
        },
        data: raw,
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            res.send(JSON.stringify(response.data))
        })
        .catch(function (error) {
            console.log(error);
        });
}
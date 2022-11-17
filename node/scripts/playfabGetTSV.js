const { LexModelBuildingService } = require('aws-sdk');
const axios = require('axios');
const { request } = require('express');
const { Callbacks } = require('jquery');
const { resetWarningCache } = require('prop-types');

function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

async function MakePlayfabRequest (data, method, requestURL, callback = () => {}) {

    var axiosPromise;

    var config = {
        method: method,
        url: "https://" + process.env.PLAYFAB_TITLE_ID + ".playfabapi.com/" + requestURL,
        headers: {
            "X-SecretKey": process.env.PLAYFAB_SECRET_KEY,
            "Content-Type": "application/json",
        },
        data: data,
    };

    axiosPromise = await axios(config)
        .then(function (response) {
            console.log("Completed request")
            callback(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
}

module.exports.MakePlayfabRequest = MakePlayfabRequest
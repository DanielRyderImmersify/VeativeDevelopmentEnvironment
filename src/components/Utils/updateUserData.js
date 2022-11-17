import { CheckIfLoggedIn } from "./CheckIfLoggedIn";

export function UpdateUserData (keys, values, successCallback) {

    var data

    if (keys.constructor !== Array) {
        if (values.constructor !== Array) {
            data = { [keys]: values };
        }
        else {
            console.error("");
            return undefined;
        }
    }
    else {
        if (keys.length === values.length && values.constructor === Array) {
            keys.forEach((key, index) => {
                data = { [key]: values[index] };
            });
        } 
        else if (values.constructor !== Array) {
            console.error("Mismatched types, keys is an array, values is a string")
        }
        else {
            console.error("Mismatched array sizes for keys and values");
            return undefined;
        }
    }

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        Data: data,
        SessionTicket: CheckIfLoggedIn(true),
    });

    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
    };

    fetch(
        process.env.REACT_APP_SERVER_URL + "/api/updateUserData",
        requestOptions
    )
        .then((response) => response.text())
        .then((result) => {
            if (JSON.parse(result).code) {
                console.log('successfully updated')
                console.log(data)
                if (successCallback) {
                    successCallback(true)
                }
            }
        })
        .catch((error) => {
            console.log("error", error)
            if (successCallback) {
                successCallback(false)
            }
        });
}
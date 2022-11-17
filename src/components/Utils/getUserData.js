import { CheckIfLoggedIn } from "./CheckIfLoggedIn";

export function GetUserData(data, callback = () => {}) {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const sessionTicket = CheckIfLoggedIn(true);

    if (sessionTicket === null || sessionTicket === undefined) {
        return false
    }

    var raw = JSON.stringify({
        PlayFabId: localStorage.getItem('playfabID'),
        Keys: data,
        SessionTicket: sessionTicket,
    });

    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
    };

    fetch(
        process.env.REACT_APP_SERVER_URL + "/api/getUserData",
        requestOptions
    )
        .then((response) => response.text())
        .then((result) => {
            if (callback) {
                callback(result)
            }
            else {
                return result
            }
        })
        .catch((error) =>  {
            if (String(error).includes("undefined is not an object")) {
                callback(undefined);
            }
            else {
                console.log("error", error);
            }
        });
}

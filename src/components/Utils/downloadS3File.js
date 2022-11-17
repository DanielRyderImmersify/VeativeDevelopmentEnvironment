
export function DownloadS3File (filename, callback = () => {}, bucket) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw
    if (bucket) {
        raw = JSON.stringify({
            filename: filename,
            bucket: bucket
        });
    }
    else {
        raw = JSON.stringify({
            filename: filename,
        });
    }

    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
    };

    fetch(process.env.REACT_APP_SERVER_URL + "/api/s3download", requestOptions)
        .then((response) => response.text())
        .then((result) => {
            if (callback) {
                callback(result)
            }
            else {
                return result
            }
        })
        .catch((error) => {
            console.log("error", error);
        });
}
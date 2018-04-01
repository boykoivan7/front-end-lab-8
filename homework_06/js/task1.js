var http = {};
http.get = (url) => {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onload = xhr.onerror = function() {
            if (xhr.status == 200) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.statusText);
            }
        }
        xhr.send();
    });
}

http.post = (url, body) => {
    return new Promise(function (resolve, reject) {
        xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.onload = xhr.onerror = function() {
            if (xhr.status == 200) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.statusText);
            }
        }
        xhr.send(body);
    });
}
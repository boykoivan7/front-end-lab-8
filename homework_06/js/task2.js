document.getElementById("trackIP").addEventListener("click", getInfo);
document.getElementById("getMyIP").addEventListener("click", getIP);

function getIP() {
    var parentContainer = document.getElementById("ipZone");
    removeContainersByClassName("message message-error");
    var getUrl = `https://ipapi.co/json/`;
    showLoader()
    var response = http.get(getUrl);
    response.then(result => {
        removeContainersByClassName("loader");
        var json = JSON.parse(result);
        document.getElementById("ipAdress").value = json["ip"];
    }, error => {
        removeContainersByClassName("loader");
        showMessage(parentContainer, error, "message message-error");
    });
}

function getInfo () {
    var ip = document.getElementById("ipAdress").value;
    var parentContainer = document.getElementById("ipZone");
    removeContainersByClassName("message message-error");
    removeContainersByClassName("response");
    if(validateIPaddress(ip)) {
        showLoader()
        var getUrl = `https://ipapi.co/${ip}/json/`;
        var response = http.get(getUrl);
        response.then(result => {
            removeContainersByClassName("loader");
            var json = JSON.parse(result);
            showResponse(parentContainer, "response", json);
        }, error => {
            removeContainersByClassName("loader");
            showMessage(parentContainer, error, "message message-error");
        });
    }
    else {
        showMessage(parentContainer, "You have entered an invalid IP address!", "message message-error");
    }
}


function validateIPaddress(ipaddress) {  
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {  
        return true;
    }  
    else {
        return false;
    }
}  

function showMessage(parentContainer, message, messageClass) {
    var msgElem = document.createElement("div");
    msgElem.className = messageClass;
    msgElem.innerText = message;
    parentContainer.appendChild(msgElem);
}

function showResponse(parentContainer, responseClass, json) {
    if("reserved" in json) {
        showMessage(parentContainer, "It's reserved IP Adress!", "message message-error");
        return;
    }
    var response = document.createElement("div");
    response.className = responseClass;

    var heading = document.createElement("h2");
    heading.innerText = "Response";
    parentContainer.appendChild(heading);

    var table = document.createElement("table");
    table.innerHTML = 
    `<tr>
        <td>IP Adress</td>
        <td>${json["ip"]}</td>
    </tr>
    <tr>
        <td>Country</td>
        <td>${json["country_name"]}</td>
    </tr>
    <tr>
        <td>Region</td>
        <td>${json["region"]}</td>
    </tr>
    <tr>
        <td>City</td>
        <td>${json["city"]}</td>
    </tr>
    <tr>
        <td>Latitude</td>
        <td>${json["latitude"]}</td>
    </tr>
    <tr>
        <td>Longitude</td>
        <td>${json["longitude"]}</td>
    </tr>
    `
    var validateButton = document.createElement("button");
    validateButton.addEventListener("click", function() {
        removeContainersByClassName("message message-error");
        removeContainersByClassName("message message-success");
        showLoader()
        var validatePost = http.post('https://shrouded-garden-94580.herokuapp.com/', JSON.stringify(json));
        validatePost.then(result => {
            removeContainersByClassName("loader");
            showMessage(response, result, "message message-success");
        }, error => {
            removeContainersByClassName("loader");
            showMessage(response, error, "message message-error");
        });
    });
    validateButton.innerText = "Validate response";
    response.appendChild(heading);
    response.appendChild(table);
    response.appendChild(validateButton);
    parentContainer.appendChild(response);
}

function showLoader(){
    var newLoader = document.createElement("div");
    newLoader.className = "loader";
    var spinner = document.createElement("div");
    spinner.className = "spinner";
    for(let i=1; i<=3 ;i++){
        var bounce = document.createElement("div");
        bounce.className = `bounce${i}`;
        spinner.appendChild(bounce);
    }
    newLoader.appendChild(spinner);
    document.body.appendChild(newLoader);
}

function removeContainersByClassName(className) {
    var containers = document.getElementsByClassName(className);
    for(var i=0; i < containers.length; i++) {
        containers[i].parentElement.removeChild(containers[i]);
    }
}
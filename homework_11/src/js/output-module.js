import Canculating from "./calculating-module";
import Interface from "./interface-module";
import '../styles/styles.css';

Interface();

document.getElementById("add").addEventListener("click", () => {
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var validationStatus = validation(number1, number2);
    if(validationStatus !== true) {
        return showResult(validationStatus);
    }
    var result = Canculating.add(+number1,+number2);
    return showResult(result);
})

document.getElementById("subtract").addEventListener("click", () => {
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var validationStatus = validation(number1, number2);
    if(validationStatus !== true) {
        return showResult(validationStatus);
    }
    var result = Canculating.subtract(+number1,+number2);
    return showResult(result);
})

document.getElementById("subtract").addEventListener("click", () => {
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var validationStatus = validation(number1, number2);
    if(validationStatus !== true) {
        return showResult(validationStatus);
    }
    var result = Canculating.subtract(+number1,+number2);
    return showResult(result);
})

document.getElementById("multiply").addEventListener("click", () => {
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var validationStatus = validation(number1, number2);
    if(validationStatus !== true) {
        return showResult(validationStatus);
    }
    var result = Canculating.multiply(+number1,+number2);
    return showResult(result);
})

document.getElementById("divide").addEventListener("click", () => {
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var validationStatus = validation(number1, number2);
    if(validationStatus !== true) {
        return showResult(validationStatus);
    }
    var result = Canculating.divide(+number1,+number2);
    return showResult(result);
})

function validation(number1, number2) {
    if(number1 === "" || number2 === "") {
        return "Please fill all fields";
    } else {
        if(!isNumbers(number1, number2)) {
            return "Please enter numbers";
        } else {
            return true;
        }
    }
}

function isNumbers(number1, number2) {
    if(isNaN(number1) || isNaN(number2)) {
        return false;
    } else {
        return true;
    }
}

function showResult(response) {
    if(!!document.getElementById("result")) {
        var result = document.getElementById("result");
        result.parentNode.removeChild(result);
    }
    const root = document.getElementById("root");
    var result = document.createElement("div");
    result.setAttribute("id", "result");

    var h2 = document.createElement("h2");
    h2.innerText = "Result";

    var message = document.createElement("div");
    if(typeof response !== "number") {
        message.className = "message message-error";
    } else {
        message.className = "message message-success";
    }
    message.innerText = response;

    result.appendChild(h2);
    result.appendChild(message);

    root.appendChild(result);
}
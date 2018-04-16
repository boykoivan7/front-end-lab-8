class Input {
    constructor(placeHolder) {
        this.placeHolder = placeHolder || "Type...";
        this._value = "";
    }

    get value() {
        return this._value;
    }

    setValue(newValue) {
        this._value = newValue;
    }
}

class NumberInput extends Input {
    constructor(placeHolder){
        super(placeHolder);
        this.type = "number";
    }
}

function AddRequiredValidation (input){
    //to delete valid if we use setValue again
    var mySet = input.setValue;
    input.setValue = function(add) {
        mySet.call(input, add);
        if("valid" in input) {
            delete input.valid;
        }
    }

    if(!input.value) {
        input.valid = false;
        return console.log(`Validation failed!!! Input value is required`);
    }
    else if("valid" in input) {
        if(input.valid) {
            input.valid = true;
        }
        else {
            input.valid = false;
        }
    }
    else { //if no valid property
        input.valid = true;
    }
}

function AddMaxLengthValidation (input, maxLength){
    //to delete valid if we use setValue again
    var mySet = input.setValue;
    input.setValue = function(add) {
        mySet.call(input, add);
        if("valid" in input) {
            delete input.valid;
        }
    }

    if(input.value.toString().length > maxLength) {
        input.valid = false;
        console.log(`Validation failed!!! Input value length > ${maxLength}`);
    }
    else if("valid" in input) {
        if(input.valid) {
            input.valid = true;
        }
        else {
            input.valid = false;
        }
    }
    else { //if no valid property
        input.valid = true;
    }
}

function AddNumberValidation (input){
    //to delete valid if we use setValue again
    var mySet = input.setValue;
    input.setValue = function(add) {
        mySet.call(input, add);
        if("valid" in input) {
            delete input.valid;
        }
    }

    if(typeof input.value !== "number") {
        input.valid = false;
        console.log("Validation failed!!! Input value isn't a number");
    }
    else if("valid" in input) {
        if(input.valid) {
            input.valid = true;
        }
        else {
            input.valid = false;
        }
    }
    else { //if no valid property
        input.valid = true;
    }
}

let numberInput = new NumberInput("Type numbers...");

console.log("1) Required validation:");
AddRequiredValidation(numberInput);
console.log(numberInput.valid);

console.log("2) Number validation:");
numberInput.setValue("1");
AddNumberValidation(numberInput);
console.log(numberInput.valid);

console.log("3) Max length validation:");
numberInput.setValue(1111111111111111111111111111);
AddMaxLengthValidation(numberInput, 8);
console.log(numberInput.valid);

console.log("4) Required, max length, number validation:");
numberInput.setValue(1);
AddRequiredValidation(numberInput);
AddMaxLengthValidation(numberInput, 8);
AddNumberValidation(numberInput);
console.log(numberInput.valid);

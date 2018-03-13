var numberString = prompt("Enter natural number N (0<N<=20)", "");
var checkNumber = !isNaN(parseFloat(numberString)) && isFinite(numberString) && Number.isInteger(parseFloat(numberString)) && parseFloat(numberString) > 0 && parseFloat(numberString) <= 20;
if (checkNumber) {
    var number = parseInt(numberString);
    var symbol = "[~]";
    var empty = "   ";
    var string = "";
    for (var row = 1; row <= number; row++) {
        var emptyNumber = number - row; //number of empty symbols (3 space) before symbols
        var symbolNumber = row * 2 - 1; //number of symbols in row
        for (var j = 0; j < emptyNumber; j++) {
            string += empty;
            string += " ";
        }
        for (var j = 0; j < symbolNumber; j++) {
            string += symbol;
            if (j != symbolNumber - 1) {
                string += " ";
            } else {
                string += "\n"
            }
        }
    }
    console.log(string);
} else {
    console.log("Incorrect data");
}

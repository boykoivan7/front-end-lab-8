/*Currency EUR/UAH: 1 EUR = 33.8565 UAH; - 07.02.18 13:34*/
/*Currency USD/UAH: 1 USD = 27.4609 UAH; - 07.02.18 13:34*/

var euro = 33.8565;
var dollar = 27.4609;

var euroAmount = parseFloat(prompt("Please enter amount of EURO", ""));
var dollarAmount = parseFloat(prompt("Please enter amount of USD", ""));

if (euroAmount > 0 && dollarAmount > 0) {
    var hryvniaAmountEUR = euroAmount * euro;
    hryvniaAmountEUR = Math.round(hryvniaAmountEUR * 100) / 100; //round

    var hryvniaAmountUSD = dollarAmount * dollar;
    hryvniaAmountUSD = Math.round(hryvniaAmountUSD * 100) / 100; //round

    var EUR2USDCurrency = euro / dollar;
    EUR2USDCurrency = Math.round(EUR2USDCurrency * 100) / 100; //round

    var output;
    output = euroAmount + " euros are equal  " + hryvniaAmountEUR + "UAH, " + dollarAmount + " are equal " + hryvniaAmountUSD + "UAH, one euro is equal " + EUR2USDCurrency + " dollars";

    console.log(output);
} else {
    console.log("Incorrect data");
}

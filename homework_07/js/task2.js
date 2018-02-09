var isPlay = confirm("Do you want to play a game?");

if(isPlay) {
    var randomMin;
    var randomMax;
    var maxPrize;
    var randomNumber;
    var attemptsLeft;
    var possiblePrizeNow;
    var number; //user number
    startGame();
} else {
    console.log("You did not become a millionaire");
}

function startGame() {
    randomMin = 0;
    randomMax = 5;
    maxPrize = 10;
    totalPrize = 0;
    startRandom();
}
function startRandom() {
    attemptsLeft = 3;
    possiblePrizeNow = maxPrize;
    randomNumber = getRandomInt(randomMin, randomMax);
    enterNumber();
}

function enterNumber() {
    var textPrompt = "Enter number from " + randomMin + " to " + randomMax + "\nAttempts left: " + attemptsLeft + "\nTotal prize: " + totalPrize + "$\nPossible prize on current attempt: " + possiblePrizeNow + "$";
    number = parseInt(prompt(textPrompt, ""));
    checkNumber();
}

function checkNumber() {
    if (number == randomNumber) {
        totalPrize += possiblePrizeNow;

        var isContinue = confirm("You win!!! Do you want to continue a game?");
        if(isContinue) {
            randomMax *= 2;
            maxPrize *= 3;
            startRandom();
        } else {
            console.log("Thank you for a game. Your prize is: " + totalPrize + "$");
            var isTryAgain = confirm("Do you want to try again?");
            if(isTryAgain){
                startGame();
            }
        }
    }
    else {
        if(attemptsLeft == 1){
            console.log("Thank you for a game. Your prize is: " + totalPrize + "$");
            var isTryAgain = confirm("Do you want to try again?");
            if(isTryAgain){
                startGame();
            }
        } else {
            attemptsLeft--;
            possiblePrizeNow = Math.floor(possiblePrizeNow/2);
            enterNumber();
        } 
    }
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var isPlay = confirm("Do you want to play a game?");

if(isPlay) {
    var randomMin;
    var randomMax;
    var firstPrize;
    var secondPrize;
    var thirdPrize;
    var totalPrize;
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
    firstPrize = 10;
    secondPrize = 5;
    thirdPrize = 2;
    totalPrize = 0;
    startRandom();
}
function startRandom() {
    attemptsLeft = 3;
    possiblePrizeNow = firstPrize;
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
        if(attemptsLeft == 3){
            totalPrize += firstPrize;
        } else if(attemptsLeft == 2){
            totalPrize += secondPrize;
        } else if(attemptsLeft == 1){
            totalPrize += thirdPrize;
        }

        var isContinue = confirm("You win!!! Do you want to continue a game?");
        if(isContinue) {
            randomMin *= 2;
            randomMax *= 2;
            firstPrize *= 3;
            secondPrize *= 3;
            thirdPrize *= 3;
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
        if(attemptsLeft == 3){
            attemptsLeft--;
            possiblePrizeNow = secondPrize;
            enterNumber();
        } else if(attemptsLeft == 2){
            attemptsLeft--;
            possiblePrizeNow = thirdPrize;
            enterNumber();
        } else if(attemptsLeft == 1){
            console.log("Thank you for a game. Your prize is: " + totalPrize + "$");
            var isTryAgain = confirm("Do you want to try again?");
            if(isTryAgain){
                startGame();
            }
        }
    }
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

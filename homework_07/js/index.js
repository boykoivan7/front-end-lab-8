var boardSize = 15;
var circlesRow = boardSize + 1;

var step = "";
var arrayBlack = [];
var arrayWhite = [];

$("#container").css({"width": `${circlesRow * 50}`,"height" : `${circlesRow * 50}`, "margin-left": `-${circlesRow * 25}px` });
$("#titles").width(circlesRow * 50);

for(let i = 0; i < boardSize * boardSize; i++) {
    var boardItem = $("<div></div>").addClass("board-item");
    $("#board").append(boardItem);
}

$(`.board-item:nth-child(${boardSize}n)`).css("border-right", "1px solid #000");
$(`.board-item:nth-last-child(-n+${boardSize})`).css("border-bottom", "1px solid #000");

for(let i = 0; i < circlesRow * circlesRow; i++) {
    var circleItem = $("<div></div>").addClass(`circles-item`);
    $("#circles-table").append(circleItem);
}

$("#restart").click(startGame);

startGame();

function resetGame() {
    arrayBlack.length = 0;
    arrayWhite.length = 0;
    $(".circles-item[style]").removeAttr("style");
    $(".circles-item").removeClass().addClass("circles-item");
    $("#center-side").hide();
}

function startGame() {
    resetGame();
    step = Math.random() < 0.5 ? "black" : "white";
    $(".circles-item").addClass(`circle-empty-${step}`);
    $(`#${step}-side`).addClass("step-line");
    $(".circles-item").on("click", function() {
        $(this).removeClass(`circle-empty-${step}`)
        $(this).addClass(`circle-active-${step}`);
        $(this).off("click");
        addToArrByIndex($(this).index());
        toggleStep();
    });
}

function addToArrByIndex(index) {
    var x = index % circlesRow;
    var y = (index - x) / circlesRow;
    var objXY = {
        x: x,
        y: y
    }
    if(step === "black") {
        arrayBlack.push(objXY);
        checkArray(arrayBlack);
    }
    else {
        arrayWhite.push(objXY);
        checkArray(arrayWhite);
    }
}
function toggleStep() {
    if(step === "black") {
        step = "white";
        $("[class*=empty]").removeClass("circle-empty-black").addClass("circle-empty-white");
    }
    else {
        step = "black";
        $("[class*=empty]").removeClass("circle-empty-white").addClass("circle-empty-black");
    }
    $(`#black-side`).toggleClass("step-line");
    $(`#white-side`).toggleClass("step-line");
}


function checkArray(array) {
    var win = false;
    for(let i = 0; i < array.length; i++) {
        var x = array[i].x;
        var y = array[i].y;
        var lineHor = [array[i]];
        checkHor(array,x,y,lineHor);
        if(lineHor.length >= 4) {
            win=true;
            highlightRow(lineHor);
        }
        var lineVer = [array[i]];
        checkVer(array,x,y,lineVer);
        if(lineVer.length >= 4) {
            win=true;
            highlightRow(lineVer);
        }
        var lineDiR = [array[i]];
        checkDiR(array,x,y,lineDiR);
        if(lineDiR.length >= 4) {
            win=true;
            highlightRow(lineDiR);
        }
        var lineDiL = [array[i]];
        checkDiL(array,x,y,lineDiL);
        if(lineDiL.length >= 4) {
            win=true;
            highlightRow(lineDiL);
        }
    }
    if(win === true) {
        $("[class*=empty]").off("click");
        $("[class*=empty]").removeClass(`circle-empty-${step}`);
        //because we use toggle
        if(!$("#black-side").hasClass("step-line")) {
            $("#black-side").addClass("step-line");
        }
        else {
            $("#white-side").addClass("step-line");
        }
        $("#center-side").show();
        $("#game-result").text(`${step.toUpperCase()} WIN!!!`);
    }
}

function checkHor(array,x,y,lineArr) {
    if (array.some(element => element.x === x+1 && element.y === y)) {
        var obj = {
            x: x+1,
            y: y
        }
        lineArr.push(obj)
        return checkHor(array,x+1,y,lineArr);
    }
    else {
        return;
    }
}

function checkVer(array,x,y,lineArr) {
    if (array.some(element => element.x === x && element.y === y+1)) {
        var obj = {
            x: x,
            y: y+1
        }
        lineArr.push(obj)
        return checkVer(array,x,y+1,lineArr);
    }
    else {
        return;
    }
}

function checkDiR(array,x,y,lineArr) {
    if (array.some(element => element.x === x+1 && element.y === y+1)) {
        var obj = {
            x: x+1,
            y: y+1
        }
        lineArr.push(obj)
        return checkDiR(array,x+1,y+1,lineArr);
    }
    else {
        return;
    }
}

function checkDiL(array,x,y,lineArr) {
    if (array.some(element => element.x === x-1 && element.y === y+1)) {
        var obj = {
            x: x-1,
            y: y+1
        }
        lineArr.push(obj)
        return checkDiL(array,x-1,y+1,lineArr);
    }
    else {
        return;
    }
}

function highlightRow(array) {
    $("[class*=active]:not([style])").css("opacity","0.5");
    for(let i = 0; i < array.length; i++) {
        var x = array[i].x;
        var y = array[i].y;
        var index = y * circlesRow + x;
        $(".circles-item").eq(index).css({"opacity":"1","box-shadow":"0 0 55px #fff"});
    }
}

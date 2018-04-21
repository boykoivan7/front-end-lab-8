export default () => {
    const root = document.getElementById("root");

    var h1 = document.createElement("h1");
    h1.innerText = "Calculator";

    var numbers = document.createElement("div");
    numbers.setAttribute("id", "numbers");

    var number1 = document.createElement("input");
    number1.setAttribute("type", "text");
    number1.setAttribute("id", "number1");
    number1.setAttribute("name", "number1");
    number1.setAttribute("placeholder", "Enter 1 number");

    var number2 = document.createElement("input");
    number2.setAttribute("type", "text");
    number2.setAttribute("id", "number2");
    number2.setAttribute("name", "number2");
    number2.setAttribute("placeholder", "Enter 2 number");

    numbers.appendChild(number1);
    numbers.appendChild(number2);

    var buttons = document.createElement("div");
    buttons.setAttribute("id", "buttons");

    var addButton = document.createElement("button");
    addButton.innerText = "+";
    addButton.setAttribute("id", "add");

    var subtractButton = document.createElement("button");
    subtractButton.innerText = "-";
    subtractButton.setAttribute("id", "subtract");

    var multiplyButton = document.createElement("button");
    multiplyButton.innerText = "×";
    multiplyButton.setAttribute("id", "multiply");

    var divideButton = document.createElement("button");
    divideButton.innerText = "÷";
    divideButton.setAttribute("id", "divide");

   
    buttons.appendChild(addButton);
    buttons.appendChild(subtractButton);
    buttons.appendChild(multiplyButton);
    buttons.appendChild(divideButton);

    root.appendChild(h1);
    root.appendChild(numbers);
    root.appendChild(buttons);
}

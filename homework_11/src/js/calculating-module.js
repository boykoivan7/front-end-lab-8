const add = (number1, number2) =>{
	return number1 + number2;
}
const subtract = (number1, number2) =>{
	return number1 - number2;
}
const multiply = (number1, number2) =>{
	return number1 * number2;
}
const divide = (number1, number2) =>{
    if(number2 === 0) {
        return "Cannot divide by zero"
    }
	return number1 / number2;
}

export default {
	add : add,
	subtract : subtract,
	multiply : multiply,
	divide : divide
}
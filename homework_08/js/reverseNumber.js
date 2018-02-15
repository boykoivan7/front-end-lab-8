function reverseNumber(number) {
    var reversed = 0;
    while (number !== 0) {
        reversed *= 10;
        reversed += number % 10;
        number -= number % 10;
        number /= 10;
    }
    return reversed;
}

/* 2 method 
function reverseNumber(number)
{
	var isUnder = number >= 0;
	number = Math.abs(number) + "";
	if(isUnder){
		return number.split("").reverse().join("")*1;
	}
	else {
		return number.split("").reverse().join("")*-1;
		}
}*/

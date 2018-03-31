function *factorial(n){
    if(n < 0) {
        yield "invalid argument";
    }
    if(n === 0){
        yield 1;
    }
    let total = 1;
    let i = 1;
    while (i <= n) {
        total *= i;
        yield total;
        i++;
    }
}

for (var n of factorial(5)) {
console.log(n)
}
var inputs = process.argv.slice(2);
var result = inputs.map(element => element[0])
                   .reduce((previousValue, currentValue) => previousValue + currentValue)
console.log(result);
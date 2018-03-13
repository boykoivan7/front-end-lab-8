function decypherPhrase(rules, string) {
    for (var key in rules) {
        rules[rules[key]] = key;
        delete rules[key];
    }
    return cypherPhrase(rules, string);
}

/* 2 method 
function decypherPhrase(rules, string) {
    var stringArray = string.split("");
    var transformedArray  = getTransformedArray(stringArray, function(element) {
        for (var key in rules) {
            if(element ===  rules[key]) {
                element = key;
            }
        }
        return element;
    });
    return transformedArray.join("");
}*/
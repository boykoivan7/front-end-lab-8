function cypherPhrase(rules, string) {
    var stringArray = string.split("");
    var transformedArray  = getTransformedArray(stringArray, function(element) {
        for (var key in rules) {
            if(element ===  key) {
                element = rules[key];
            }
        }
        return element;
    });
    return transformedArray.join("");
}
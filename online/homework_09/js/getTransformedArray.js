function getTransformedArray(array, func) {
    var transformedArray = [];
    forEach(array, function(element) {
        transformedArray.push(func(element));
    });
    return transformedArray;
}
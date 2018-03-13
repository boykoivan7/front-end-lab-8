function collectIds(array) {
    var filteredArray = getFilteredArray(array, function(element) {
        return element.rating > 3;
    });
    var transformedArray  = getTransformedArray(filteredArray, function(element) {
        return element.id;
    })
    return transformedArray;
}
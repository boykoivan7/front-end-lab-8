function getFilteredArray(array, func) {
    var filteredArray = [];
    forEach(array, function(element) {
        if(func(element)) {
            filteredArray.push(element);
        }
    });
    return filteredArray;
}
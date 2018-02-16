function forEach(array, func) {
    for(var i=0; i < array.length; i++) {
        func(array[i]);
    }
}
/* 2 method
function forEach(array, func) {
    for(var item in array) {
        func(array[item]);
    }
}*/
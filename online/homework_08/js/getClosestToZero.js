function getClosestToZero(){
    if(arguments.length > 0) {
        var closest = arguments[0];
        for(var i = 1; i < arguments.length; i++) {
            if(Math.abs(arguments[i]) < Math.abs(closest)) {
                closest = arguments[i];
            }
        }
        return closest;     
    }
    else {
        return;
    }
}
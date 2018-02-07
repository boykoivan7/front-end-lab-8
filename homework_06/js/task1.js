var a = parseFloat(prompt("Please enter length of side a", ""));
var b = parseFloat(prompt("Please enter length of side b", ""));
var c = parseFloat(prompt("Please enter length of side c", ""));


if (a > 0 && b > 0 && c > 0 && a+b > c && a+c > b && b+c > a){

    /*Type of triangles:*/
    var type;
    /*1 - Equilateral*/
    if(a==b&&a==c){
        type="Equilateral";
    }
    /*2 - Isosceles*/
    else if((a == b && a != c) || (a == c && a != b) || (b == c && b != a)){
        type="Isosceles";
    }
    /*3 - Scalene*/
    else if(a != b && a != c && b != c){
        /*4 - Right triangle*/
        /*Pythagorean theorem*/
        if ((a * a + b * b == c * c) || (a * a + c * c == b * b) || (c * c + b * b == a * a)) {
            type="Right triangle";
        } 
        /*3 - only Scalene*/
        else {
            type="Scalene";
        }
    }

    /* Square - Heron's formula*/
    var p = (a + b + c) / 2; //semiperimeter
    var square = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    square = Math.round(square * 100) / 100; //round

    var output;
    output = "Type of triangle is " + type + " and square is " + square;

    console.log(output);
    }

else {
    console.log("Incorrect data");
}
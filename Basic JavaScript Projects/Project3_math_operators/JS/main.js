function addition_function () { //Creating add function
    var addition =  2 + 2;
    document.getElementById("math.add").innerHTML =  addition; 
}

function subtract_function(){   //Creating subtract function 

    var subtract = 5 - 2;           

    document.getElementById("math.subtract").innerHTML = subtract;   
}


function multiply_function() {  //Creating multiply function
            var multiply = 30 * 5; 
            document.getElementById("math.multiply").innerHTML =  multiply;
}

function modulus_operator() {   //Creating modulus function
            var simple_math = 25 % 6;
            document.getElementById("math.mod").innerHTML =  simple_math;
}

function negation_operator() {  //Creating negation function
            var x = 10;
            document.getElementById("math.neg").innerHTML = -x;
}

function increment_operator() {   //Creating increment function
var inc = 20;
inc++;
document.getElementById("math.inc").innerHTML = inc; 
}

function decrement_operator() {   //Creating increment function
    var dec = 69;
    dec++;
    document.getElementById("math.inc").innerHTML = dec; 
    }

function random_Number() {   //Creating random number function
var random = Math.random() * 1000000
document.getElementById("math.random").innerHTML = random; 
}

function math_object() {   //Creating math object function
    var X = Math.PI;
    document.getElementById("math.object").innerHTML = X;
}

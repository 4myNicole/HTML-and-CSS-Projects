function addition_function () {
    var addition =  2 + 2;
    document.getElementById("math.add").innerHTML =  addition; 
}

function subtract_function(){       

    var subtract = 5 - 2;           

    document.getElementById("math.subtract").innerHTML = subtract;   
}


function multiply_function() {
            var multiply = 30 * 5;
            document.getElementById("math.multiply").innerHTML =  multiply;
}

function modulus_operator() {
            var simple_math = 25 % 6;
            document.getElementById("math.mod").innerHTML =  simple_math;
}

function negation_operator() {
            var x = 10;
            document.getElementById("math.neg").innerHTML = -x;
}

function increment_operator() {
var inc = 20;
X++;
document.getElementById("math.inc").innerHTML = inc; 
}

function decrement_operator() {
var dec = 69;
X--;
document.getElementById("math.dec").innerHTML = X; 
}

function random_Number() {
var random = Math.random() * 1000000
document.getElementById("math.random").innerHTML = random; 
}

function math_object() {
    var X = Math.PI;
    document.getElementById("math.object").innerHTML = X;
}

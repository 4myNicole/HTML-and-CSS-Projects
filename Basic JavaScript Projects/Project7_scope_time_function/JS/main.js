       
var A = 20;
function A_function() {
    document.write(A + 20 + "</br>");
}
A_function()

function B_function() {
    var B = 40;
    document.write(B + 20 + "</br>");
}
B_function()

if (1 < 2) {
    document.write("The left number is smaller than the right number" + "</br>")
}

function get_Date() {
    if (new Date().getHours() < 17) {
        document.getElementById("Greeting").innerHTML = "I hope you're having a lovely day!"
    }
}

if (2 == 2) {
    document.write("TRUE")
}

function Love_Me() {
    Love = document.getElementById("Love").value;
    if (Love == "yes") {
        Answer = "I love you too!";
    }
    else {
        Answer = "I still love you!";
    }
    document.getElementById("Love_Me_1").innerHTML = Answer;
}

function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
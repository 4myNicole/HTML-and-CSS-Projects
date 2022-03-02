function While_Loop() {
    var While_Loop = "";
    var X = 10;
    while (X > -1) {
        While_Loop += "<br>" + X;
        X--;
        X--;
    }
    document.getElementById("While_Loop").innerHTML = While_Loop;
}

var instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; //creating object
var Content = "";
var Y;
function For_Loop() {
    for (Y = 0; Y < instruments.length; Y++) {
        Content += instruments[Y] + "<br>";
}
    document.getElementById("For_Loop").innerHTML = Content;
}

function Array() {
    var Cat_Pic = [];
    Cat_Pic[0] = "sleeping";
    Cat_Pic[1] = "playing";
    Cat_Pic[2] = "eating";
    Cat_Pic[3] = "purring";
    document.getElementById("Array").innerHTML = "In this picture, the cat is " +
        Cat_Pic[2] + ".";
}

function Constant_Function() {
    const Pet_Dog = { breed: "Yorkshire Terrier", Age: "10", color: "Black" };
    Pet_Dog.Age = "11";
    Pet_Dog.color = "Grey";
    document.getElementById("Constant").innerHTML = "The breed of my dog is " +
        Pet_Dog.breed + " and he is " + Pet_Dog.color;
}

var X = 1001;
document.write(X);
{
    let X = 2002;
    document.write("<br>" + X);
}
document.write("<br>" + X);


function Return_Function() {
    return Math.PI;

}

function Break_Statement() {
let count = "";
    for (let i = 0; i < 15; i++) {//start with 0, if i smaller than 15 then count up
    if (i === 10) break; //stop counting when 10 is reached
    count += i + "<br>";
}
    document.getElementById("Break").innerHTML = count;
}

function Continue_Statement() {
    let countdown = "";
    for (let i = 20; i > 0; i--) { //start with 20, if i bigger than 0 then count down
        if (i === 10) continue; //skip 10 when counting down
        countdown += i + "<br>";
    }
    document.getElementById("Continue").innerHTML = countdown;
}
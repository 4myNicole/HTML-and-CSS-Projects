
function my_dictionary() { //Creating dictionary function 
    var food = { // creating an object named 'food'
    Type: "vegetable", //creating variable 'Type' in object 'food'
    Colour: "orange",//creating variable 'Colour' in object 'food'
    Name: "carrot", //creating variable 'Name' in object 'food'
    };
    delete food.Colour; //removing colour from dictionary
    document.getElementById("Dictionary").innerHTML =  food.Colour;
}
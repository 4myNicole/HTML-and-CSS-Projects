

function Full_Sentence() {
    var part_1 = "I ";
    var part_2 = "love ";
    var part_3 = "cats ";
    var part_4 = "a lot.";
    var Whole_Sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("concat").innerHTML = Whole_Sentence;
}

function Slice_Method() {
    var Sentence = "Dont want to be an American Idiot";
    var Section = Sentence.slice(28, 34); //28th to 34th Character
    document.getElementById("Slice").innerHTML = Section;
}

function Upper_Case() {
var text = document.getElementById("UpperCase").innerHTML;
    document.getElementById("UpperCase").innerHTML =
    text.toUpperCase();
} 

function Search_Method() {
    var find = "This is a very long sentence, but thats okay because we can use the search function to try and find a particular word";
    document.getElementById("Search").innerHTML = find.search("particular"); //finds first instance of the word

}

function String_Method() {
    var X = 888;
    document.getElementById("Number_To_String").innerHTML = X.toString(); //converts 888 number to string 888
}

function Precision_Method() {
    var X = 3.14159265
    document.getElementById("Precision").innerHTML = X.toPrecision(6); //outputs first 6 numbers
}

function toFixed_Method() {
    var X = 3.14
    document.getElementById("To_Fixed").innerHTML = X.toFixed(); //outputs nearest whole number
}

function valueOf_Method() {
    var X = 3.14
    document.getElementById("value_Of").innerHTML = X.valueOf(); //outputs primitive version of the number
}
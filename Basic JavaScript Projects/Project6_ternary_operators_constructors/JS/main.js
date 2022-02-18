function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age <18) ? "Please come back when you are 18!":"You are old enough to vote!";
    document.getElementById("Vote").innerHTML = Can_vote ;
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
    }
    var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
    var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White");
    var Erik = new Vehicle("Ford", "Pinto", 1971, "Yellow");
    function myFunction(){
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
    }
    
    function Pet(Species, Name, Age, Color) {
        this.pet_Species = Species;
        this.pet_Name = Name;
        this.pet_Age = Age;
        this.pet_Color = Color;
        }
        var Callum = new Pet("Cat", "Luna", 10, "Tabby"); //adding new pet for Callum
        var amy = new Pet("Dog", "Archie", 11, "Grey"); //adding new pet for Amy
        function newFunction(){
        document.getElementById("New_and_This").innerHTML =
        "amy has a " + amy.pet_Color + "-colored " + amy.pet_Species + ", aged " + amy.pet_Age + " and called " +amy.pet_Name;
        }

 
        function Nested_Function() {
            document.getElementById("Nest").innerHTML = Count();
            function Count() {
            var Starting_point = 68;
            function Plus_one() {Starting_point += 1;} //nested function
            Plus_one();
            return Starting_point;
                }
            }

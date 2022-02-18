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
        var Callum = new Pet("Cat", "Luna", 10, "Tabby");
        var Amy = new Pet("Dog", "Archie", 11, "Grey");
        function newFunction(){
        document.getElementById("New_and_This").innerHTML =
        "Amy has a " + Amy.pet_Color + "-colored " + Amy.pet_Species + ", aged " + Amy.pet_Age + " and called " +Amy.pet_Name;
        }



    function type_of() {
         var type_of = (typeof "Word");
             document.getElementById("type.of").innerHTML = type_of;
    }

    console.log(3>7); //Open console on web page and it will display result 

    function infinity() {
        var large_number =2E310;
            document.getElementById("Infinity").innerHTML = large_number;
    }

    function minus_infinity() {
        var small_number = -3E310;
            document.getElementById("minus.Infinity").innerHTML = small_number;
        }


    function boolean() {
        var boolean_logic = (3>8);
            document.getElementById("boolean").innerHTML = boolean_logic;
        }

    function coercion() {
        var type_coercion = ("twenty" + 5);
            document.getElementById("coercion").innerHTML = type_coercion;
            }

    function double_equal() {
         var double_equal = ("A" == "A");
            document.getElementById("double.equal").innerHTML = double_equal;
                }

    function triple_equal() {
         var triple_equal = ("Dog" === "Cat");
            document.getElementById("triple.equal").innerHTML = triple_equal;
                    }


function double_and_tr() {
    var double_and_t = (5 > 2 && 10 > 4);
       document.getElementById("double.and.t").innerHTML = double_and_t;
               }

function double_and_fal() {
    var double_and_f = (5 > 10 && 10 > 4);
        document.getElementById("double.and.f").innerHTML = double_and_f;
                           }

        function not_Function() {
             document.getElementById("Not").innerHTML = ! (20 > 10);
        }
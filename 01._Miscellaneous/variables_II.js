//"use strict";

// virker, men er ikke god. kan bruges også i varibles_I. (UDEN STRICT)
totalGlobalVariable = "Never EVER!! do this";

var globalVariable = "Also never do this!";

// Global scope. 


// rules:
//altis brug const, hvis vi kan slippe af sted med det. 
// hvis det er nogest som skal ændre sig i deklarationen, så brug let.
// aldrig var!!!!

//Funktions scope.
function myFunction(){

}


//Block scope
{
console.log("What is this.");

}

//Block scope
var myValue = true;
{
    var myValue = false;
}
console.log(myValue); // denne bliver false.
// denne vil blive false, da var bløder ind i alle scope
//bliver sat i stack med alle variabler


let myValue = true; // Disse variabler bløder IKKE ind i andre scopes.
{
    let myValue = false;
}
console.log(myValue); // denne bliver true



/// For-loop med var. NO-GO!!
// den gå op, til 5, og så inkrementerer vi, og så bliver den til false. 
//Hvis dette vat en let, så ville den gøre det som vi ønsker at den skal gøre. 
//DERFOR ALDRIG BRUG VAR!!!!!
for (var i =0; i <= 5; i++) {
    setTimeout(() => {
        console.log(i);
        
    }, 1000);
    //Giver 6, 6 gange. (6 6 6 6 6 6 ) // på grund af var, bløder det ind i hinadnen. 
}




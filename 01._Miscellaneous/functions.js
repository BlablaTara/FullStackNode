// lave en funktion som hedder getRandomInt that har parameterne 'min' og 'max' og en tom body.


//hoisting - alt bobler op til overflade.
// DEt er lige meget hvor du kalder dine finktioner. 



function getRandomInt (min, max) {
    return Math.random();

    //Math.random giver iomellem 0.0 og 0.1 - når den ikke har en min og max.
}

function getRandomInt1 (min, max) {
    return Math.random();
    //Math.random giver iomellem 0.0 og 0.1 - når den ikke har en min og max.
}
console.log(getRandomInt1(0, 10));


function getRandomInt2 (min, max) {
    return Math.floor(Math.random() * (max + 1 - min) - 1);
    //Runder ned med floor, såderfor skal man lægge +1 til. 
    // + 1, for at den ikke vælger tal 0-9 og -min (spørg chat)
} // OBS IKKKE semikolon efter en finktion.
console.log(getRandomInt1(0, 10));

// anonym function, da der ikke er noget der er deklareret.
const getRandomIntAnonymousFaunction = function (min, max) {
    return Math.floor(Math.random() * (max + 1 - min) - 1);
}; // semikolon efter en 


// Arrow funktion betyder at det er THIS keywordet.
// med og uden, og sætter interval, med begge, og instansierer begge, og uden arrow, kan den blive undefined.
//THIS kan ændre sig alt efter hvor du kalder den fra. 
// 
const getRandomIntArrowFaunction = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min) - 1);
}; 



//CALLBACK FUNKTION
//action er en CallBack funktion. 
// is af funtion som bliver givet til en anden parameter i en anden funktoon. 
//Måske den bliver brug senere, måske ikke.det er ikke nødvendigt.

//Som et slags interface. Sørger for at overholde en kontrakt, for alle som bruger denne.
                            //name: sting, action: function
function genericPerformer (name, action) {
    return action(name);

}

// Lasse coding
const codingAction = (name) => `${name} likes coding.`;

// pågave: burg the generic performer, I would like tosay:
// Opgave: Lasse likes coding.. writeit below.


console.log(genericPerformer("Lasse", codingAction));
// ingen paranteser på codingAction() så man sender en fintions reference, og ikke selve funktionen. 


console.log(getRandomInt); // en funktionsreference. Der er ikke nogen body erller noget 
//output er:  [Function: getRandomInt]


function sleepingAction(name) {
    return `${name} loves to sleep.`;
}

// desired to sleep. Andreas loves to sleep
console.log(genericPerformer("Andreas", sleepingAction));
//bruger ikke funktionen sleeping-funktinen, men kalder refernden


// Tara boxing:
   //
console.log(genericPerformer("Tara", (name) => `${name} owns at boxing`));









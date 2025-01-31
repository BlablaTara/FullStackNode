
// undgå var
//var name = '';

// Brug const eller let
const name = 'Tara';

// const er IKKE en konstan
// det betyder at const KAN ændre værdien. 
// Dens deklareation er KONSTANT
//const SKAL  deklareres samtidig med at den bliver initialiseret. 

//Deklerationen - Laver denne til et objekt. 
const me = {};
me.name = "Anders";
console.log(me);

//Array 
const hobbies = ["sleeping", "coding"];
//Fjerner sidst tilføjet element
hobbies.pop();
// Lægger flere ting ind i et array.
hobbies.push("drawing", "painting");
console.log(hobbies);



const jsObject = {
    whatAmI: "jsObject"
};


console.log("I can't compile");
console.log('I can "dance"');
//``= template string. - backtick
// ${} syntax = string interpolation
const dancerName = "Alice";

console.log(`${dancerName} can dance """'''"
line 1
line 2`);

const assignmentDescripsion = ".... and the value is..";
const value = 4;

// ikke brug plus  i console.log, for aellers bliver den konventeret til en string. 
console.log(assignmentDescripsion + value);
/// den RIGTIGTE MÅDE.
console.log(assignmentDescripsion, value);








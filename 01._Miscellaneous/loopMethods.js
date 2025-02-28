
// forEach, map, filter, reduce, findIndex, find.

const { log } = require("console");

const myNumbers = [1, 2, 3, 4, 5, 6];

const doubleNumbers = myNumbers.map((myNumbers) => myNumbers * 2);

//console.log(doubleNumbers);


const satllites = [
    {
        name: "International Space Station",
        height: 12_000
    },
    {
        name: "MIR",
        height: 0
    },
    {
        name: "James Webb",
        height: 27_000
    }

];

// opgave: lower det height for all satellites, by 3.000 except for MIR.


const loweredSpecificSattelites = satllites.map((satllites) => {
    if (satllites > 0) {
        satllites.height - 3.000
        return loweredSpecificSattelites
    }
   
});

const loweredSpecificSattelites1 = satllites.map((satllites) => {
    if (satllites === 'MIR') {
    
        return satllites
    }
    return {
        height: satllites.height - 3000,
        name: satllites.name
    }
   
});


const loweredSpecificSattelites2 = satllites.map((satllites) => ({
        height: satllites.name === "MIR" ? satllites.height : satllites.height - 3000,
        name: satllites.name

}));

console.log(loweredSpecificSattelites2);


const listOfReactions = ["thumbs down", "thumbs down", "thumbs down" ]


const updatedReaction = listOfReactions.map((reaction) => "thumbs up");

console.log(updatedReaction);




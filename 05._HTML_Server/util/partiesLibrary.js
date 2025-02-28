const parties = require('./parties') //kan godt uden .json, da den kigger efter .js først og så .json efter

console.log(parties);

const value = 1;


//console.log(module);

//Ekxporterer parties. 
module.exports = parties;

const valueObject = {
    value
};

//flere export:
//Lave et objekt og læg dem i. 
module.exports = {
    parties,
    valueObject
};






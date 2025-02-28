// FØRST importerer express
const { log } = require("console");
const express = require("express");

const app = express(); // ANDEN instansiere ekspress.
//TREDJE lysserpå en port. 

console.log(new Date()); //UTC - zulu time. 

// vores tidszone, basereet på voresoperativsystem. 
console.log(Date()); // local date time (CEST for us)

console.log(Date.now()); // Unix time / Epoch (seconds since 1970 jan. 1st.)

console.log(Date());


app.get('/month', (req, res) => {
    const now = new Date();
    const currentMonth = now.toLocaleString("da-DK", { month: "long"} );


    res.send(`Denne måned er: ${currentMonth}`);
});

//Læg dataen udenfor, sådan så det bliver oprettet, den ene gang. det er g
//det er hurtigere.
const months = ["January", "February", "March", "April", "May", "June", "July", 
    "August", "September", "October", "November", "December"];

//Anderses
app.get('/month/v1', (req, res) => {
  
    // dette array, bliver oprettet hver gang man kalder endpointet, så det den opretter flere gange. 
    /* const months = ["January", "February", "March", "April", "May", "June", "July", 
        "August", "September", "October", "November", "December"];*/

    const currentMonth = months[new Date().getMonth()];    
    res.send({ data: currentMonth});
});


app.get('/month/v2', (req, res) => {

    const currentMonth = new Date().toLocaleDateString("en_uk", {month: short});
    res.send({ data: currentMonth});
});


app.get ('/monyh/v3', (req, res) => {

    const currentMonth = Date().split(" ") [1];
    res.send({ data: currentMonth});
});

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


app.get('/days', (req, res) => {

    const today = days[new Date().getDay()]

    res.send({ data: today })
});


app.get("/days/v1", (req, res ) => {
    const currentDay = new Date().getDay();
    
    res.send({ data: currentDay})



})

app.get('/days/v2', (req, res) => {

    const currentDay = new Date().toLocaleDateString("en_uk", {weekday: short});
    res.send({ data: currentDay});
});





//TREDJE lysserpå en port. 
const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));




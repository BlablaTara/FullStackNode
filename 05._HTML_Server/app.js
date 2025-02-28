
const express = require("express")
const app = express()

const { parties } = require('./util/partiesLibrary.js')
//console.log(parties);

//const { partyName, supplies } = require('./partyFactory.js')

// denne sørger for at clienter kan tilgå denne mappe.
app.use(express.static('public'));


let visitorCount = 0;

app.get("/", (req, res) => {
    console.log("Welcome .. in terminal");
    res.sendFile(__dirname + "/public/frontpage/frontpage.html");
});

app.get("/partypage", (req, res) =>{
    res.sendFile(__dirname + "/public/partypage/partyPage.html");
});


// task create a route /vititourcounts that returns the visitor count

app.get("/visitorcounts", (req, res) => {
    //visitorCount++;
    // gør det samme
    res.send({ data: ++visitorCount });
});



const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));




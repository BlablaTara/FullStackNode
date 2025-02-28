
//const express = require("express")
import express from 'express';

import path, { resolve } from 'path';

import partiesLibraryESModules from './util/partiesLibraryES.js';

console.log(path.resolve);


const app = express()

//const { parties } = require('./util/partiesLibrary.js')
//console.log(parties);

//const { partyName, supplies } = require('./partyFactory.js')

// denne sørger for at clienter kan tilgå denne mappe.
app.use(express.static('public'));


let visitorCount = 0;

app.get("/", (req, res) => {
    console.log("Welcome .. in terminal");
    res.sendFile(path.resolve("public/frontpage/frontpage.html"));
});

app.get("/partypage", (req, res) =>{
    res.sendFile(path.resolve("public/partypage/partyPage.html"));
});


// task create a route /vititourcounts that returns the visitor count

app.get("/visitorcounts", (req, res) => {
    //visitorCount++;
    // gør det samme
    res.send({ data: ++visitorCount });
});



const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));




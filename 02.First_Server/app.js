const express = require('express');
const app = express();

//const app = require('express')(); /// denne fortrækkes ikke 


app.use(express.json());

// Callback er en funktion som bliver givet som en parameter i en anden funktion.
//Når du ender på /endpoint, sp henter den denne funktion.
app.get("/", (req, res) =>{
 res.send({ data: "This is the root route" });
});

console.log(__dirname);


// forventer en absolut path. 
app.get("/welcomepage", (req, res) => {

    res.sendFile(__dirname + '/index.html');
})




/// vi vil geren lave sådan så der i browseren kommer at query-parameteren er q.
//(req, res) er en callback funktion. 
app.get("/search", (req, res) => {

    console.log(req.query)
    console.log(req)
    res.json({ data: `You seached for: ${req.query.q}`});
});
// du kan i browseren skrive 

app.get("/blablabla", (req, res) => {
    res.send({ data: "this is blablabal" }); // dette er et javascript objekt, som bliver til json.
    // funktion med json. 
});


// en path variable bliver givetmed : her. Java eksempel: user/{number}
// req og res deklarerer den, kalder den ikke. den er der allerede. giver den et nav, som vi kan bruge i body.
app.get("/yourfavoritenumber/:number", (req, res) => {
    res.send({ data: `your favorite numebr is: ${req.params.number}` }); 
    //logger du req alene, så kan du se hvad den kan. 

});

app.get("/yourfavoritenumber/:number", (req, res) => {
    res.send({ data: `your favorite numebr is: ${req.params.number}` }); 
    //logger du req alene, så kan du se hvad den kan. 

});

const functionsReferencer = (req, res) => {
    res.send({ data: `your favorite numebr is: ${req.params.favoritNumber}` }); 

};


app.get("/yourfavoritenumberextra/:favoriteNumber", functionsReferencer);



// Favoritthings der lader clienten define ynglings blomst og dyr. 


app.get("/favoritethings/:favoriteFlower/:favorieAnimal", (req, res) => {

    res.send({ data: `Your favorite flower is: ${favori}`})
})



// mapper til collektionen i ens database. 
//så INGEN (_) i enpoint navnet.
app.post("/favoritepoilicans", (req, res) => {
    
    //console.log(req.body);

    //Sender automatisk statuskode 200
    //res.send({ data: req.body });

    res.send(`<h1>Hej hej</h1>
        <h3>Velkommen<h3>
        `);

});


app.post("/ping", (req, res) => {

    console.log(req.body)
    res.send({ data: req.body })

})






app.listen(8080); // skal være i bunden af filen




import { Router } from "express";

const router = Router();

router.get("/cannotsetheadersaftertheyvebeensenterror", (req, res) => {
    if (true) {
      return res.send({message: "Welcone to room 1" });
    }
    res.send({message: "Welcone to room 1" }); 
    //next();
});

function greeter(req, res, next) {
    console.log("Hello there. Please enter room");
    next();  
}

function ipLogger(req, res, next) {
    console.log(req.ip);
    next();  
}

router.get("/room", greeter, ipLogger, (req, res, next) => {
    //res.send({message: "Welcone to room 1" });
    next(); // en funktion, som siger kald den næste, der matcher. 
});

        // inline middleware  - express er lavet som middleware
router.get("/room", (req, res, next) => {
    console.log("You are in the lobby for room 2");
    next();
}, (req, res, next) => {
    res.send({message: "Welcone to room 2" });
    //next();
});

//
//router.get("*", (req, res) => {
   // res.status(403).send("<h1>Coulnt find this page?</h1>")
//});



export default router;
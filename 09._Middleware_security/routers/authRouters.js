import { Router } from "express";

const router = Router();

function greetLoggedInUsers (req, res, next) {
    //Vi assumer at vi checker i DB at de er logged ind.
    console.log("Welcome, logged in user");
    next();
    
}

function isAdmin (req, res, next) {
    const userIsAdmin = true; // normalt hentet fra database.
   
    if (userIsAdmin) {
        req.isAdmin = userIsAdmin;
        req.username = "Johnnie";
         return next()
    }
    res.status(403).send({ message: "Sorry. You do not have permission."});
}



router.get("/auth/admin", isAdmin, (req, res) => {
    console.log(req.isAdmin, req.username); 
    res.send({ message: "You are an admin!"})
});

//kan lave middleware, som redirecter en admin, til admin endpointet.

router.get("/auth/user", (req, res) => {
    res.send({ message: "You are just a user!"})
});


export default router;
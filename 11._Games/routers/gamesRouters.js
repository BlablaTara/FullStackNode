import { Router } from 'express';
import db from '../database/connection.js'

const router = Router();

//async på grund af ..
router.get("/api/games", async (req, res) => {
    
    const result = await db.all("SELECT * FROM games;");
    console.log(result);
    res.send({ data: result});

})



router.post("/api/games", async (req, res) => {
    if (!req.body.title) {
        return res.status(400).send({ errorMessage: "You are missing the title key in body" })
    }

    
    try {

        console.log(req.body);
        
        const result = await db.run(
            'INSERT INTO games("title", "short_description") VALUES (?, ?)',
            [req.body.title, req.body.shortDescription]
        );
        
        
        console.log(result);
        
        res.send({ data: result.lastID});

    } catch (error) {
        console.log(error);

        res.status(500).send({ errorMessage: "Database error: Insert a game"})

    }

});




export default router;
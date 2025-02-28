const express = require("express");
const app = express(); //instansiere ekspress.


const fingerBones = [
    {   id: 1, 
        name: "The very looong, longfinger"
    },
    {   id: 2, 
        name: "Pinky-winky"
    },
    {   id: 3, 
        mame: "Pointy-Peter"
    }
];

// endpoint
// route / get handler
app.get("/", (req, res) => {
    res.send({ data: fingerBones });
});


app.get("/fingerbones", (req, res) => {
    res.send({ data: fingerBones });
});


// hvis man skriver et id, som ikke findes, så vil den blive undefined.
//så retunerer den "valuen" væk. Så derfor bliver det bare et tomt objekt. 
app.get('/fingerbones/:id', (req, res) => {
   
    const fingerBoneId = Number(req.params.id);
    const foundFingerBones = fingerBones.find((fingerBone) => fingerBone.id === fingerBoneId);


    // Errorhandle, hvis så vi ikke bare sender et tomt array.
    if (!foundFingerBones) { 
        res.status(404).send({error: `No finger bone found with the id:  ${fingerBoneId}`});
    } else {
        res.send({ data: foundFingerBones })
    }

    // status kode:

    // 2XX - everything went well
    // 4XX - client error
    // 5XX - server error
    


})



const PORT = 8080;
app.listen(PORT)
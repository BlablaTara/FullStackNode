import express from 'express';

const app = express();

import path from 'path';


app.get("/", (res, req) => {
    res.sendFile(path.resolve('public/frontpage/frontpage.html'));
});



const PORT = 8080;
app.listen(PORT, () => console.log("Server is ruunning oon: ", PORT));



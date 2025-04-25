import express from 'express';
const app = express();

//Før routen
app.use(express.json());

import gamesRouter from './routers/gamesRouters.js'
app.use(gamesRouter);







const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on: ", PORT)
);
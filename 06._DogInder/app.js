import express from 'express';

const app = express();

app.use(express.static("public"));


// vil du parse deep ind i et form-data objektet.
app.use(express.urlencoded({ extended: true}));


import pagesRouter from './routers/pagesRouter.js';
app.use(pagesRouter);
import matchesRouter from './routers/matchesRouter.js';
app.use(matchesRouter);
import contactRouter from './routers/contactRouter.js'
app.use(contactRouter);



const PORT = 8080;
app.listen(PORT, () => console.log("Server is ruunning oon: ", PORT));



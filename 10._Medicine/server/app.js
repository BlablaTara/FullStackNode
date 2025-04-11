// kan godt bare kalde den således.
import 'dotenv/config';

import express from 'express';

const app = express();

app.use(express.json());

// import cors from 'cors';
// app.use(cors({
//     origin: true,
//     credentials: true
// }));

//credentials inkluderer sessions fra backend.
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
	res.header("Access-Control-Allow-Credentials", "true");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});


import session from 'express-session';


app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));


import pillsRouter from './routers/pillsRouter.js';
app.use(pillsRouter);

import employeesRouter from './routers/employeesRouter.js';
app.use(employeesRouter);


// create router for getting adn adding pills.

const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => console.log("sever is running on: ", PORT)
);
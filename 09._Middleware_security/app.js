import express from 'express';
import helmet from "helmet";

const app = express();

//importerer en middelware-funkton. Det er en funktions-referende. 
//det betyderr at man kan kalde den med argumenter.
app.use(helmet());

//function greetLoggedInUsers (req, res, next) {
    //Vi assumer at vi checker i DB at de er logged ind.
    //console.log("Welcome, logged in user");
    //next();
//};

//registrerer middleware. 
// app.use er bodyparsing middleware.
//app.use("/auth", greetLoggedInUsers);;

 import { rateLimit } from 'express-rate-limit'

// const generalLimiter = rateLimit({
// 	windowMs: 15 * 60 * 1000, // 15 minutes
// 	limit: 300, // Limit each IP to 300 requests per `window` (here, per 15 minutes).
// 	standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
// 	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
// 	// store: ... , // Redis, Memcached, etc. See below.
// })

// app.use(generalLimiter);

// rateLimit har req, res og next
const authLimiter = rateLimit({
    windowsMs: 15 * 60 * 1000, // 15 minutter
    limit: 5,
    standardHeaders: 'draft-8',
    legacyHeaders: false
});

app.use("/auth", authLimiter);

import session from 'express-session';

app.use(session({
    // Denne secret skal vi ikke have - den exposer vi.
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}));


// Rækkefølgen er super vigtigt!!
import sessionRouter from "./routers/sessionRouter.js"
app.use(sessionRouter);

import middlewareRouter from "./routers/middlewareRouter.js"
app.use(middlewareRouter);

import authRouter from "./routers/authRouters.js"
app.use(authRouter);


app.get("/{*splat}", (req, res) => {
    res.status(404).send("Not found page");
});

//Post, delete, and all,men her fanger get først. Men en error-handler på denne måde er OK.
app.all("/{*splat}", (req, res) => {
    res.status(404).send({message: `${req.path} for ${req.method} not found`});
});

// Det kan drille med middlewaren. SKAL være i bunden.
const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on: ", PORT)
);
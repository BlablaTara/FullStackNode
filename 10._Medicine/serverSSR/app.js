// kan godt bare kalde den således.
import 'dotenv/config';

import express from 'express';

const app = express();

app.use(express.json());

app.use(express.static(path.resolve('../client/dist/')));

// import cors from 'cors';
// app.use(cors({
//     origin: true,
//     credentials: true
// }));


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




import livereload from 'livereload';
import connectLivereload from 'connect-livereload';

const liveReloadServer = livereload.createServer();
liveReloadServer.watch('../client/dist');
liveReloadServer.server.once("connection", () => {
        setTimeout(() => {
            liveReloadServer.refresh("/");
        }, 500);
});

app.use(connectLivereload()); 



import path from 'path';

app.get("/{*splat}", (req, res) => {
    res.sendFile(path.resolve('../client/dist/index.html'));
});

// create router for getting adn adding pills.

const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => console.log("sever is running on: ", PORT)
);
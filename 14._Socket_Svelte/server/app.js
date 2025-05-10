import "dotenv/config";

import express from 'express';

//hvis vi siger app.listen med port, så er det kun denne server instance den starter.
//virker men ingeen sucket.
const app = express();

//server static
app.use(express.static("public"));

app.use(express.json());

import cors from 'cors';
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

import session from "express-session";

const sessionMiddleware = session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
})

app.use(sessionMiddleware);

// app.use(session({
//   secret: process.env.SESSION_SECRET,
//   resave: false,
//   saveUninitialized: true,
//   cookie: { secure: false }
// }));


import nicknamesRouter from './router/nicknamesRouter.js';
app.use(nicknamesRouter);


import http from 'http';

const server = http.createServer(app);

import { Server } from 'socket.io';


//her releterer det til session middlevaren i ens io instanse.
const io = new Server(server, {
    cors: {
        origin: "http://localhost:8080",
        credentials: true
    }
});

// ikke læringsmål.
io.engine.use(sessionMiddleware);

//laver en ny reference til en socker hver gang denne funktion bliver kaldt. der bliver lavet en connection
io.on("connection", (socket)  => {

    console.log("A client connected", socket.id);

    socket.on("client-sends-color", (data) => {

        data.nickname = socket.request.session.nickname;
        socket.request.session.timesSubmitted = (socket.request.session.timesSubmitted + 1 || 1);
        data.timesSubmitted = socket.request.session.timesSubmitted;
        console.log(data);
        
        //console.log(socket.request.session.nickname);
        
        //sender til alle i io namespace.
        io.emit("server-sends-color", data);

        //sender til alle undtagen ens eget
       //socket.broadcast.emit("server-sends-color", data); 

       // sender til sin egen socket
       //socket.emit("Server-sends-color", data);


        //console.log("a client sent the color", data);
    
    });

    socket.on("disconnect", () => {
        console.log("A client disconnected", socket.id);
        
    });
});

const PORT = process.env.PORT || 8080;
//vil bruge sucket  servere. 
server.listen(PORT, () => console.log("Server is running on port", PORT));

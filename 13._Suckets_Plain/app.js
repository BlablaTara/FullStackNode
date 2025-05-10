import express from 'express';

//hvis vi siger app.listen med port, så er dt kun denne server instance den starter.
//virker men ingeen sucket.
const app = express();

//server static
app.use(express.static('public'));

import http from 'http';

import { Server } from 'socket.io';

const server = http.createServer(app);


const io = new Server(server);

//laver en ny reference til en socker hver gang denne funktion bliver kaldt. der bliver lavet en connection
io.on("connection", (socket)  => {

    console.log("A client connected", socket.id);

    socket.on("client-sends-color", (data) =>{
        //sender til alle
        io.emit("server-sends-color", data);

        //sender til alle undtagen ens eget
       //socket.broadcast.emit("server-sends-color", data); 

    
        //console.log("a client sent the color", data);
    
    });

    socket.on("disconnect", () => {
        console.log("A client disconnected", socket.id);
        
    });
});

const PORT = process.env.PORT || 8080;
//vil bruge sucket  servere. 
server.listen(PORT, () => console.log("Server is running on port", PORT));

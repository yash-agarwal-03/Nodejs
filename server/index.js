import http from "http";
import handler from "./reqHandler.js";


const server = http.createServer(handler);

server.listen(5000,()=>{ 
    console.log("Server listening successfully");
})
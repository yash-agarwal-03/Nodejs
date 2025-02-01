import http from "http";
import handler from "./handler.js";


const server = http.createServer(handler);

server.listen(5000,()=>{ 
    console.log("Server listening successfully");
})
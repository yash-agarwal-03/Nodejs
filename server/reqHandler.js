import fs from "fs";
import url from "url";

let i=0;
function handler(req, res){
    i++;
    console.log(`new Request recieved  - ${i}`);
    const date=new Date();

    const logs=`${date.toLocaleString()} :\t${req.method}\t ${req.url}\n`;

    const myurl=url.parse(req.url,true);
    if(myurl.pathname!="/favicon.ico")
    fs.appendFile("./server_logs.txt",logs,(err,data)=>{
        if(err)
        {
            console.log("Error in file write");
            res.end("Please reload.");
        }
        else

            switch(myurl.pathname){
                case "/":   res.end("Welcome to homepage");
                            break;
                            
                case "/about":  
                const name=myurl.query.name ? myurl.query.name : "Mr. Creator";
                res.end(`Hello , ${name}\nWelcome to the about`);
                                break;
                            
                default:    res.end("404 not found");
                            break;
                            
            }
    })
}
export default handler;
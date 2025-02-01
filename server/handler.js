import fs from "fs";
let i=0;
function handler(req, res){
    i++;
    console.log(`new Request recieved  - ${i}`);
    const date=new Date();
    const url=req.url;

    const logs=`${date.toLocaleString()} :\t ${url}\n`;

    if(url!="/favicon.ico")
    fs.appendFile("./server_logs.txt",logs,(err,data)=>{
        if(err)
        {
            console.log("Error in file write");
            res.end("Please reload.");
        }
        else

            switch(url){
                case "/":   res.end("Welcome to homepage");
                            break;
                            
                case "/about":  res.end("My about page");
                                break;
                            
                default:    res.end("404 not found");
                            break;
                            
            }
    })
}
export default handler;
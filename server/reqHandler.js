import fs from "fs";
import url from "url";

let i = 0;
function handler(req, res) {

  i++;
  const date = new Date();
  const logs = `${date.toLocaleString()} :\t ${req.url}\n`;

  const myurl = url.parse(req.url, true);

  if (myurl.pathname != "/favicon.ico")
    fs.appendFile("./server_logs.txt", logs, (err, data) => 
    {
      console.log(`new Request recieved  - ${i}`);
      console.log(myurl);
      if (err) 
     {
        console.log("Error in file write");
        res.end("Please reload.");
      } 
      else
        switch (myurl.pathname) {
          case "/":
            res.end("Welcome to homepage");
            break;

          case "/about/sginup":
            const name=(myurl.query && myurl.query.name) ? myurl.query.name: "Mr. CREATOR";
            res.end(`Hey, ${name}`);
            break;

          default:
            res.end("404 not found");
            break;
        }
    });
}
export default handler;

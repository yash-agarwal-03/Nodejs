import fs from "fs";

const logger = (req) => {
    if (req.url != "/favicon.ico") {
      const date = new Date();
      const logs = `${date.toLocaleString()} :\t${req.method}\t ${req.url}\n`; // add /about to the url to see the logs of /about paths
      
      fs.appendFile("./REST_server_logs.txt", logs, (err, data) => {
        if (err) {
          console.log("Error in file write");
          res.end("Please reload.");
        }
      });
    }
  };

  export default logger;
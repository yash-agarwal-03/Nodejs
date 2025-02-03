import express from "express";
import fs from "fs";
import logger from "./logCreator.js";
import router from "./userRouter.js";
import apiRouter from "./apiRouter.js";

const userRouter = router;
const data= JSON.parse(fs.readFileSync("./MOCK_DATA.json", "utf-8"));
const app = express();
const PORT = 5001;

app.use((req,res,next)=>{
    logger(req);
    next();
})

app.get("/", (req, res) => {
    res.send("Welcome to RESTful API project");
});

//this router handles /users and /users/:id
app.use("/users", userRouter);

//this router handles /api/users and /api/users/:id
app.use("/api",apiRouter);


app.get("*", (req, res) => {
    res.send("404 Page not found");
});
    
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
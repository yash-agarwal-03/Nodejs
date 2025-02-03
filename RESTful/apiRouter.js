import fs   from "fs";
import express from "express";

const data= JSON.parse(fs.readFileSync("./MOCK_DATA.json", "utf-8"));

const apiRouter=express.Router();

apiRouter.get("/users",(req,res)=>{
    return res.json(data);
});
apiRouter.get("/users/:id",(req,res)=>{
    const id=req.params.id;
    const user=data.find((user)=>user.id==id);
    return res.json(user);
});
apiRouter.get("*", (req, res) => {
    res.send("404 Page not found");
});
export default apiRouter;
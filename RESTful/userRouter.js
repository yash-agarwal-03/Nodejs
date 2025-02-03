import express from "express";
import fs from "fs";
const data= JSON.parse(fs.readFileSync("./MOCK_DATA.json", "utf-8"));
const router = express.Router();

router.get("/", (req, res) => {
    const html=`
    <ol>
        ${data.map((user)=>`<li>${user.first_name} ${user.last_name}</li>`).join("")}
    </ol>`;
    res.send(html);
});

//only handles if the param after /users/ is a number
router.get("/:id([0-9]+)", (req, res) => {
    const id=Number(req.params.id); 
    if(id<1 || isNaN(id) || id>data.length)
    {
        return res.send("Invalid ID");
     }
     const user=data.find((user)=>user.id==req.params.id);
     const html=`
     <h1>${user.first_name} ${user.last_name}</h1>
     <ul>
         <li>MAIL      : ${user.email}</li>
         <li>Gender    : ${user.gender}</li>
         <li>Job Title : ${user.title}</li>
     </ul>`
     res.send(html);
});

router.get("*", (req, res) => {
    res.send("404 Page not found");
});

export default router;
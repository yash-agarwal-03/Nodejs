import express from "express";
import logger from "./logCreator.js";
const app = express();

app.use("/about",(req, res, next) => { //this will only call this middleware when the url is /about somehting
  logger(req);
  next();
});

app.get("/", (req, res) => {
  res.send("Welcome to homepage");
});

app.get("/about", (req, res) => {
  const name = req.query.name ? req.query.name : "Mr. Creator";
  res.send("Hello , " + name + "   |  Welcome to the about page");
});

app.get("*", (req, res) => {
  res.send("404 not found");
});

app.listen(5000, () => {
  console.log("Server started successfully");
});
const express = require("express");
const cors = require("cors");
const check = require("./check");
const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());

server.get("/", (req, res) => {
  res.status(200).send("Home page is here");
});

server.post("/signin",check , (req, res) => {
  res.send("Completed");
});

server.get("/user", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

server.listen(8010, () => {
  console.log("Server is running");
});

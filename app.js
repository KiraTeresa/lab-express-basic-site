const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/about", (request, response) => {
  response.sendFile(__dirname + "/views/about.html");
});

app.get("/works", (request, response) => {
  response.sendFile(__dirname + "/views/works.html");
});

app.use(express.static(__dirname + "/public"));

app.listen(3030, () => {
  console.log("localhost:3030 is running");
});

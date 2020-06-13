const express = require("express");

const app = express();

app.use((request, response, next) => {
  console.log("Middleware1");
  next();
});

app.use((request, response, next) => {
  console.log("Middleware2 (much cooler than 'Middleware1'.)");
  response.send("<h1>Welcome to the PaRtY</h1>");
  next();
});

app.listen(3000);
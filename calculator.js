// jshint esversion:6


const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.get("/" ,function(req , res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req ,res){

  var weight = Number(req.body.W);

  var height = Number(req.body.H);

  var result = weight/(height * height);

  res.send("Your BMI is " + result);
});


app.listen(3000 ,function(){
  console.log("Server is up and running at 3000");
});

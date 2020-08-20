// npm package: express nodemon body-parser

const express = require("express");
// parse HTTP request
const bodyParser = require("body-parser");

const app  = express();

// get access to <form> data in html
app.use(bodyParser.urlencoded({extended: true}));

// *************Home Route******************
app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send("The result is " + result);
});

// *************BMI Route******************
app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res){
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var bmi = weight / (weight * height);
  res.send("Your BMI is " + bmi);
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});

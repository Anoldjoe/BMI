const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');


function calculateBMI() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var bmi = weight / (height * height);
    document.getElementById("result").innerHTML = "Your BMI is: " + bmi.toFixed(2);
    
    // Store BMI value in browser's localStorage
    var bmiList = JSON.parse(localStorage.getItem("bmiList")) || [];
    bmiList.push(bmi.toFixed(2));
    localStorage.setItem("bmiList", JSON.stringify(bmiList));
  }
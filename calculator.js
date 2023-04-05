const express = require("express");
const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.urlencoded({extended:true}));



//                    Basic Calculator

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});
app.post("/",function(req,res){

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;
    res.send("Result : " + result);
});

//                    BMI Calculator

app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmicalculator",function(req,res){
    var w1 = Number(req.body.wg);
    var h1 = Number(req.body.hg);

    var bmi = w1/(h1*h1);
    // console.log(req.body);
    res.send("BMI : " + bmi);
});

app.listen(3000,function(){
    console.log("Server Live");
})
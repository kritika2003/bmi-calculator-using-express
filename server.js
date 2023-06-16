const express= require("express");
const bodyparser= require("body-parser");

const app=express();
app.use(bodyparser.urlencoded({extended:true}));
app.get("/", function(req,res){
   
    res.sendFile(__dirname + "/bmicalculator.html");
});
app.post("/bmicalculator.html", function(req,res){
    
    var num1 =Number(req.body.num1);
    var num2 =Number(req.body.num2);
    var result= num2/(num1*num1);

    res.send("Your BMI is "+ result);
})
app.listen(1000 , function(){
    console.log('App listening on port 1000') ;
});
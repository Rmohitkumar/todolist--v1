const express = require("express");
const bodyParser = require("body-parser");
const { redirect } = require("express/lib/response");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


var items = ["Bathing","Eat Food","Coding hours"];
var workitems = [];

app.get("/",function(req,res){
    var today = new Date();
    var options = {
        weekday:"long",
        day:"numeric",
        month:"long"
    }
    var day = today.toLocaleDateString("end-US",options);
    res.render("list",{listTitle:day, newlistItem:items });
})

app.post("/",function(req,res){
    var Item = req.body.newItem;
    items.push(Item);
    res.redirect("/");
})



app.get("/work",function(req,res){
    res.render("list",{listTitle:"Work list", newlistItem:workitems })
})
app.post("/work",function(req,res){
    var Item = req.body.newItem;
    workitems.push(Item);
    res.redirect("/work");
})


app.listen(3000,function(){
    console.log("app is running at 3000");
})
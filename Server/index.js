const express = require("express");
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser= bodyParser.urlencoded({extended:false});

app.use(bodyParser.json({type:'application/json'}));
app.use(express.static("public"));
app.set("view engine","ejs");
app.set("views","./views");

var server = require("http").Server(app);

server.listen(process.env.PORT || 8000);



app.get("/",function(req,res){
  res.render("trangchu");
})
app.get("/:id",function(req,res){
  let i=req.params.id;
  res.json({data:i});
  console.log(i);

});
app.post("/",urlencodedParser, function(req,res){
  let first=req.body.firstNum;
  let second=req.body.secondNum;
  let data= req.body;
  let result = parseInt(first) + parseInt(second);
  // console.log(data);
  res.json({result:result});
})


// app.post("/asd",function(req, res){

// })
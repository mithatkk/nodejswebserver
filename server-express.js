var express=require("express");
var app=express();
app.get("/",function(req,res){
    res.send("sunucu çalışıyor!!!")

})
app.get("/anasayfa",function(req,res){
res.send("sunucu çalışıyor");
console.log("sunucu çalışıyor");

})
app.listen(8080);


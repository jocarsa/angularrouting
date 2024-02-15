const express = require("express");
const {MongoClient} = require("mongodb");

let aplicacion = express();

let ruta = "mongodb://localhos:27017";
const basededatos = "meanblog"
const cliente = new MongoClient(ruta,{});

aplicacion.get("/blog",(req,res) =>{
    res.send("ok te escucho")
});

aplicacion.listen(8080,()=>{
    console.log("ok");
});
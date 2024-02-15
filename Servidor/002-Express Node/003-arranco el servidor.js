const express = require("express");

let aplicacion = express();

aplicacion.get("/blog",(req,res) =>{
    res.send("ok te escucho")
});

aplicacion.listen(8080,()=>{
    console.log("ok");
});
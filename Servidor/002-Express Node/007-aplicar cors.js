const express = require("express");
const {MongoClient} = require("mongodb");
const cors = require('cors');
let aplicacion = express();
aplicacion.use(cors());
let ruta = "mongodb://localhost:27017";
const basededatos = "meanblog"
const cliente = new MongoClient(ruta,{});

aplicacion.get("/blog",async (req,res) =>{
    await cliente.connect();
    const base = cliente.db(basededatos);
    const coleccion = base.collection("entradas");
    const entradas = await coleccion.find().toArray();
    console.log(entradas);
    res.send(entradas);
});

aplicacion.listen(8080,()=>{
    console.log("ok");
});
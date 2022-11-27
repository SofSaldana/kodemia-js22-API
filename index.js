const express = require ("express");
const app = express();

app.get("/hi",(req, res)=>{
    res.send("Hello Chofis ♥");
});

app.listen(8000, (err)=>{ 
 if (!err) console.log("Escuchando peticiones HTTP en el puerto 8000"); 
 else console.error ("Ups, an error has ocurred",err);
});
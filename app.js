const almacen = require("./almacen");


const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.json());


app.get("/almacen", (req, res) => {
    res.send(almacen);
});

app.get("/almacen/:seccion", (req, res) => {
    const seccion = req.params.seccion;
    res.send(almacen[seccion]);
});


app.listen(3000);

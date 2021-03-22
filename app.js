const almacen = require("./almacen");
const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.json());

// Rutas
app.get("/almacen", (req, res) => {
    res.send(almacen);
});

app.get("/almacen/:seccion", (req, res) => {

    const seccion = req.params.seccion;

    // Si el parametro es una de las secciones del almacen
    if ( Object.keys(almacen).includes(seccion) ) {
        res.send(almacen[seccion]);
    } else {
        res.status(404).send("No se ha podido encontrar");
    }

});


app.listen(3000);

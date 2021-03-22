const almacen = require("./almacen");


const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send(almacen);
})


app.listen(3000);

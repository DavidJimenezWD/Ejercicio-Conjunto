const almacen = require("./almacen");


const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.json());


app.get("/", (req, res) => {
    res.send(almacen);
});

app.listen(3000);

const almacen = require("./almacen");


const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send(almacen);
});


<<<<<<< HEAD

=======
>>>>>>> c842456c0cfc331adbcba9155451316dabcc2531
app.listen(3000);

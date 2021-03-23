const almacen = require("./almacen");
const script = require("./script");


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

app.post("/almacen/anyadir/:seccion", (req, res) => {

    const seccion = req.params.seccion;

    // Si el parametro es una de las secciones del almacen
    if ( Object.keys(almacen).includes(seccion) ) {

        const nuevoArticulo = script.creaObjetoNuevoArticulo(req, almacen[seccion]);
        const listaNombresArticulos = script.creaListaNombresArticulos(almacen[seccion]);

        // Si el objeto no esta en el almacen todavia
        if ( !listaNombresArticulos.includes(nuevoArticulo.nombre) ) {
            almacen[seccion].push(nuevoArticulo);
            res.send( { msg: "Articulo añadido"});
        } else {
            res.status(422).send("El articulo existe ya");
        }
   
    } else {
        res.status(404).send("No se ha podido encontrar");
    }
});

app.put("/almacen/editar/:seccion/:nombre", (req, res) => {

    const seccion = req.params.seccion;
    const nombreViejo = req.params.nombre.toUpperCase();
    const listaNombresArticulos = script.creaListaNombresArticulos(almacen[seccion]);
    const nuevoArticulo = script.creaObjetoNuevoArticulo(req, almacen[seccion]);
    

    // Si el paramatro seccion es una de las secciones del almacen
    if ( Object.keys(almacen).includes(seccion) ) {

        const listaNombresArticulos = script.creaListaNombresArticulos(almacen[seccion]);

        // Si el articulo esta efectivamente en el almacen
        if ( listaNombresArticulos.includes(nombreViejo) ) {
            const IndexObjetoParaModificar = almacen[seccion].findIndex(obj => obj.nombre === nombreViejo);
            
            // Eliminar objeto para modificar y anadir el modificado
            almacen[seccion].splice(IndexObjetoParaModificar, 1);
            almacen[seccion].push(nuevoArticulo);

            res.send( { msg: "Articulo modificado"});

        } else {
            res.status(404).send("El articulo no existe");
        }
   
    } else {
        res.status(404).send("No se ha podido encontrar");
    }
});

app.listen(3000);

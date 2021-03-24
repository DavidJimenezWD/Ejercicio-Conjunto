const almacen = require("./almacen");
const script = require("./script");


const express = require("express");
const app = express();


app.use(express.static("public"));




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
        res.status(404).send("La sección no existe");
    }

});


app.post("/almacen/anyadir/:seccion", (req, res) => {

    const seccion = req.params.seccion;

    // Si el parametro es una de las secciones del almacen
    if ( Object.keys(almacen).includes(seccion) ) {

        const nuevoArticulo = script.creaObjetoNuevoArticulo(req, almacen[seccion]);
        const listaNombresArticulos = script.creaListaNombresArticulos(almacen[seccion]);

        // Si el articulo no esta en el almacen todavia
        if ( !listaNombresArticulos.includes(nuevoArticulo.nombre) ) {
            almacen[seccion].push(nuevoArticulo);
            res.send( { msg: "Articulo añadido"});

        } else {
            res.status(422).send("El articulo existe ya");
        }
   
    } else {
        res.status(404).send("La sección no existe");
    }
});


app.put("/almacen/editar/:seccion/:nombreOriginal", (req, res) => {

    const seccion = req.params.seccion;
    const nombreViejo = req.params.nombreOriginal;
    const listaNombresArticulos = script.creaListaNombresArticulos(almacen[seccion]);

    const nuevoArticulo = script.creaObjetoNuevoArticulo(req, almacen[seccion]);
    
    // Si el parametro seccion es una de las secciones del almacen
    if ( Object.keys(almacen).includes(seccion) ) {

        const listaNombresArticulos = script.creaListaNombresArticulos(almacen[seccion]);

        // Si el articulo esta efectivamente en el almacen
        if ( listaNombresArticulos.includes(nombreViejo) ) {
            
            // Eliminar objeto para modificar y anadir el modificado
            const IndexObjetoParaModificar = almacen[seccion].findIndex(obj => obj.nombre === nombreViejo);
            almacen[seccion].splice(IndexObjetoParaModificar, 1);

            almacen[seccion].push(nuevoArticulo);

            res.send( { msg: "Articulo modificado"});

        } else {
            res.status(404).send("El articulo no existe");
        }
   
    } else {
        res.status(404).send("La sección no existe");
    }
});


app.delete("/almacen/eliminar/:seccion/:nombre", (req, res) => {

    const seccion = req.params.seccion;
    const nombreArticulo = req.params.nombre;
    
    // Si el paramatro seccion es una de las secciones del almacen
    if ( Object.keys(almacen).includes(seccion) ) {

        const listaNombresArticulos = script.creaListaNombresArticulos(almacen[seccion]);

        // Si el articulo esta efectivamente en el almacen
        if ( listaNombresArticulos.includes(nombreArticulo) ) {
            
            // Eliminar objeto para modificar y anadir el modificado
            const IndexObjetoParaEliminar = almacen[seccion].findIndex(obj => obj.nombre === nombreArticulo);
            almacen[seccion].splice(IndexObjetoParaEliminar, 1);

            res.send( { msg: "Articulo eliminado"});

        } else {
            res.status(404).send("El articulo no existe");
        }
   
    } else {
        res.status(404).send("La sección no existe");
    }
});


app.listen(3000);

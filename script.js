const almacen = require("./almacen");

function creaObjetoNuevoArticulo(req, arr) {
    
    const nombre = req.body.nombre;
    const descripccion = req.body.descripccion;
    const img = req.body.img;
    const precio = req.body.precio;

    const nuevoObjeto = {
        nombre,
        descripccion,
        img,
        precio
    }

    return nuevoObjeto;
}


function creaListaNombresArticulos(arr) {
    let listaNombresArticulos = [];

    arr.forEach( obj => {
        listaNombresArticulos.push( obj.nombre );
    });

    return listaNombresArticulos;    
}

exports.creaObjetoNuevoArticulo = creaObjetoNuevoArticulo;
exports.creaListaNombresArticulos = creaListaNombresArticulos;

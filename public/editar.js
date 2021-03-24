fetch("/almacen")
  .then((res) => res.json())
  .then((res) => {
    const secciones = Object.keys(res);

    for (let i = 0; i < secciones.length; i++) {
      document.getElementById("seleccion").innerHTML += `
            <option value="${secciones[i]}">${secciones[i]}</option>`;
    }
  });


let seccion;
const seccionesArray = () => {
  seccion = document.getElementById("seleccion").value;
};

document.getElementById("btn-put").addEventListener("click",()=>{
  const nombreOriginal = document.getElementById("originalPUT").value;
  const nombre = document.getElementById("nuevoPUT").value;
  const img = document.getElementById("imgPUT").value;
  const descripccion = document.getElementById("descPUT").value;
  const precio = document.getElementById("precioPUT").value;
  fetch(`/almacen/editar/${seccion}/${nombreOriginal}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      seccion: seccion,
      nombreOriginal: nombreOriginal,
      nombre:nombre,
      img: img,
      descripccion: descripccion,
      precio: precio,
    }),
  })
    .then((res) => res.json())
    .then((res) => console.log(res));

    fetch("/almacen")
    .then((res) => res.json())
    .then((res) => {
      const arrays = Object.keys(res);
      for (let i = 0; i < arrays.length; i++) {
        for (let j = 0; j < res[arrays[i]].length; j++) {
          document.getElementById("div-articulos").innerHTML += `
        <div class="articulo">
        <h2>${res[arrays[i]][j].nombre}</h2>
        <img src="${res[arrays[i]][j].img}" alt="foto"/>
        <p><span>Descripcción: </span>${res[arrays[i]][j].descripccion}</p>
        <h3>Precio: ${res[arrays[i]][j].precio}</h3>
        <button id="btn-delete">Eliminar</button>
        </div>`;
        }
      }
    });


});


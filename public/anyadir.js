// Aqui añadimos un articulo nuevo

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

document.getElementById("btn-anyadir").addEventListener("click", () => {
  const nombre = document.getElementById("nombrePOST").value;
  const desc = document.getElementById("descPOST").value;
  const img = document.getElementById("imgPOST").value;
  const precio = document.getElementById("precioPOST").value;

  fetch(`/almacen/anyadir/${seccion}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nombre: nombre,
      descripccion: desc,
      img: img,
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
        </div>`;
        }
      }
    });
});

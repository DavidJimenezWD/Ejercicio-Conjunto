// Aqui añadimos un articulo nuevo

document.getElementById("btn-anyadir").addEventListener("click", () => {
  const nombre = document.getElementById("nombrePOST").value;
  const desc = document.getElementById("descPOST").value;
  const img = document.getElementById("imgPOST").value;
  const precio = document.getElementById("precioPOST").value;
  const seccion = document.getElementById("tipoPOST").value;

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

//Muestra todos los articulos en la index
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


// Aqui realizamos la busqueda atraves del input

document.getElementById("btn-buscar").addEventListener("click", () => {
  const seccion = document.getElementById("busqueda").value;
  document.getElementById("mostrar").innerHTML = "";
  fetch(`/almacen/${seccion}`)
    .then((res) => res.json())
    .then((res) => {
      for (let i = 0; i < res.length; i++) {
        document.getElementById("mostrar").innerHTML += `
        <div class="encontrados">
        <h2>${res[i].nombre}</h2>
        <img src="${res[i].img}" alt="foto"/>
        <p><span>Descripcción: </span>${res[i].descripccion}</p>
        <h3>Precio: ${res[i].precio}</h3>
        </div>`;
      }

      document.getElementById("div-articulos").innerHTML = "";
    });
});


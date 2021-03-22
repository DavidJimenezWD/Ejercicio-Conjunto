let newObj;

fetch("/almacen")
  .then((res) => res.json())
  .then((res) => {
    newObj = res;

    for (let i = 0; i < res.armarios.length; i++) {
      document.getElementById("div-armarios").innerHTML += `
        <div class="items_flex">   
              <h2>${res.armarios[i].nombre}</h2>
              <img src="${res.armarios[i].img}">
               <p><h4>Descripcción:</h4> ${res.armarios[i].descripccion}</p>
               <p><h4>Precio:</h4> ${res.armarios[i].precio}</p>
        </div>`;
    }
    for (let i = 0; i < res.mesas.length; i++) {
      document.getElementById("div-mesas").innerHTML += `
        <div class="items_flex">
               <h2>${res.mesas[i].nombre}</h2>
               <img src="${res.mesas[i].img}">
               <p><h4>Descripcción:</h4> ${res.mesas[i].descripccion}</p>
               <p><h4>Precio:</h4> ${res.mesas[i].precio}</p>
        </div>`;
    }
    for (let i = 0; i < res.mesas.length; i++) {
      document.getElementById("div-sillas").innerHTML += `
        <div class="items_flex">   
              <h2>${res.sillas[i].nombre}</h2>
              <img src="${res.sillas[i].img}">
               <p><h4>Descripcción:</h4> ${res.sillas[i].descripccion}</p>
               <p><h4>Precio:</h4> ${res.sillas[i].precio}</p>
        </div>`;
    }
  });

document.getElementById("btn-buscar").addEventListener("click", () => {
  let tipo = document.getElementById("busqueda").value;

  
});

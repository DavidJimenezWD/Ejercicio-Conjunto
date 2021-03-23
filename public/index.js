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
    for (let i = 0; i < res.sillas.length; i++) {
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
  let nombreSeccion = document.getElementById("busqueda").value.toLowerCase();

  const seccion = Object.keys(newObj);

  if (nombreSeccion === "armarios") {
    document.getElementById("div-armarios").innerHTML = "";
    document.getElementById("div-mesas").innerHTML = "";
    document.getElementById("div-sillas").innerHTML = "";
    for (let i = 0; i < newObj.armarios.length; i++) {
      document.getElementById("div-armarios").innerHTML += `
        <div class="items_flex">   
              <h2>${newObj.armarios[i].nombre}</h2>
              <img src="${newObj.armarios[i].img}">
               <p><h4>Descripcción:</h4> ${newObj.armarios[i].descripccion}</p>
               <p><h4>Precio:</h4> ${newObj.armarios[i].precio}</p>
        </div>`;
    }
  }else if (nombreSeccion === "mesas") {
    document.getElementById("div-armarios").innerHTML = "";
    document.getElementById("div-mesas").innerHTML = "";
    document.getElementById("div-sillas").innerHTML = "";

    for (let i = 0; i < newObj.mesas.length; i++) {
      document.getElementById("div-mesas").innerHTML += `
        <div class="items_flex">   
              <h2>${newObj.mesas[i].nombre}</h2>
              <img src="${newObj.mesas[i].img}">
               <p><h4>Descripcción:</h4> ${newObj.mesas[i].descripccion}</p>
               <p><h4>Precio:</h4> ${newObj.mesas[i].precio}</p>
        </div>`;
    }

  }else if (nombreSeccion === "sillas") {
    document.getElementById("div-armarios").innerHTML = "";
    document.getElementById("div-mesas").innerHTML = "";
    document.getElementById("div-sillas").innerHTML = "";
    for (let i = 0; i < newObj.sillas.length; i++) {
      document.getElementById("div-sillas").innerHTML += `
        <div class="items_flex">   
              <h2>${newObj.sillas[i].nombre}</h2>
              <img src="${newObj.sillas[i].img}">
               <p><h4>Descripcción:</h4> ${newObj.sillas[i].descripccion}</p>
               <p><h4>Precio:</h4> ${newObj.sillas[i].precio}</p>
        </div>`;
    }

  }else{
    alert("El tipo de producto no existe");
  }

});

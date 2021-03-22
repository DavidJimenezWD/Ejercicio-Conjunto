fetch("/").then(res=>res.json()).then(res=>{
        for(let i=0;i<res.armarios.length;i++){
            document.getElementById("div1").innerHTML+=`
               <h2>${res.armarios[i].nombre}</h2>
               <p>${res.armarios[i].descripcion}</p>
               <img src="${res.armarios[i].img}">
               <p>${res.armarios[i].precio}</p>`;
            
        }
});
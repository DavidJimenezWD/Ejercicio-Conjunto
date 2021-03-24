const mostrarTodo=require("./index");


// Aqui añadimos un articulo nuevo

document.getElementById("btn-anyadir").addEventListener("click",()=>{
    const nombre=document.getElementById("nombrePOST").value;
    const desc=document.getElementById("descPOST").value;
    const img=document.getElementById("imgPOST").value;
    const precio=document.getElementById("precioPOST").value;
    const seccion=document.getElementById("tipoPOST").value;
  
    fetch(`/almacen/anyadir/${seccion}`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:{nombre:nombre,descripccion:desc,img:img,precio:precio}

    }).then(res=>res.json()).then(res=>mostrarTodo());
  
  
  
  
  });
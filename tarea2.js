const $botonsubmit=document.querySelector("#submit")
$botonsubmit.onclick=function(){
    
    let nombreCompletoUsuario= document.querySelectorAll(".nombre-completo-usuario")
    let nombreCompleto="";
    for(let i=0;i<nombreCompletoUsuario.length;i++){
        nombreCompleto+=` ${nombreCompletoUsuario[i].value}`
    }
    document.querySelector("h1").innerText=`Bienvenido, ${nombreCompletoUsuario[0].value}`
    document.querySelector("#resultado").innerText=nombreCompleto
}


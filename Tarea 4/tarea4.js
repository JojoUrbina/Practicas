let contador=0;
let contadorMaximo=0;
let numeroFrecuente=0;
let numeroPromedio=0;
let sumaArray=0;
const listaNumerica=[];
function crearArrayLiHtml(elementoLiHtml,array){
    for(let i=0;i<document.querySelectorAll(`${elementoLiHtml}`).length;i++){
      array.push(document.querySelectorAll(`${elementoLiHtml}`)[i].innerText)
}
}

function calcularPromedioArray(array){
        for(let i=0;i<array.length;i++){
         sumaArray +=Number(array[i])

    }
    
     numeroPromedio= Number(sumaArray/array.length)
}
function generarNumeroFrecuenteArray(array){
    
    for(let a=0;a<array.length;a++){
        for(let b=0;b<array.length;b++){
            if(array[a]===array[b]){
                contador++
            }
            if(contador>contadorMaximo){
                contadorMaximo=contador
                numeroFrecuente=array[a]

            }
        }
        contador=0;
    }
   contadorMaximo=0;

}
function generarNumeroMayor(array){
    
    for(let a=0;a<array.length;a++){
        for(let b=0;b<array.length;b++){
            if(Number(array[a])>=Number(array[b])){
                contador++
            }
            if(contador>contadorMaximo){
                contadorMaximo=contador
                numeroMayor=array[a]
            }
        }
        contador=0;
    }
   contadorMaximo=0;
}
function generarNumerosMenor(array){
    
    for(let a=0;a<array.length;a++){
        for(let b=0;b<array.length;b++){
            if(Number(array[a])<=Number(array[b])){
                contador++
            }
            if(contador>contadorMaximo){
                contadorMaximo=contador
                numeroMenor=array[a]
                
            }
        }
        contador=0;
    }

 contadorMaximo=0;

}


function insertarDatosEnHtml(elemento,dato){
    document.querySelector(`${elemento}`).innerText+=` ${dato}`
}
crearArrayLiHtml("li",listaNumerica);
generarNumeroFrecuenteArray(listaNumerica)
calcularPromedioArray(listaNumerica)
generarNumeroMayor(listaNumerica)
generarNumerosMenor(listaNumerica)
insertarDatosEnHtml(".numero-promedio",numeroPromedio)
insertarDatosEnHtml(".numero-pequeño",numeroMenor)
insertarDatosEnHtml(".numero-mayor",numeroMayor)
insertarDatosEnHtml(".numero-frecuente",numeroFrecuente)




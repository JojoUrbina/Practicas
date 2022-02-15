const $botonCalcular=document.querySelector("#submit");
$botonCalcular.onclick=function(){
    const $horasVideos=document.querySelectorAll(".horas-video")
    const $minutosVideos=document.querySelectorAll(".minutos-video")
    const $segundosVideos=document.querySelectorAll(".segundos-video")
    let totalHoras=0;
    let totalMinutos=0;
    let totalSegundos=0;
    const horaEnMinutos=60;
    const minutoEnSegundos=60;
    let totalizarPorUnidadDeTiempo=function(elementoHoras,elementoMinutos,elementoSegundos){

    for(let i=0;i<elementoHoras.length;i++){
         totalHoras +=Number(elementoHoras[i].value)
     }
    for(let j=0;j<elementoMinutos.length;j++){
        totalMinutos +=Number(elementoMinutos[j].value)
        if(totalMinutos>=horaEnMinutos){
            totalHoras++
            totalMinutos=totalMinutos-horaEnMinutos
     }
     
     }
     for(let k=0;k<elementoSegundos.length;k++){
        totalSegundos +=Number(elementoSegundos[k].value)
        if(totalSegundos>=minutoEnSegundos){
            totalMinutos++
            totalSegundos=totalSegundos-minutoEnSegundos
    }
    }


}
totalizarPorUnidadDeTiempo($horasVideos,$minutosVideos,$segundosVideos)
document.querySelector("strong").innerText=` ${totalHoras} horas 
  ${totalMinutos} minutos y ${totalSegundos} segundos.`
}





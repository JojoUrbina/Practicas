const $botonCalcular =document.querySelector('#calcular')
$botonCalcular.onclick = function(){
    const mesesAlAño=12;
    const salarioAnual = Number(document.querySelector('#salario-anual-usuario').value);
    document.querySelector('#salario-mensual').value=Number(salarioAnual/mesesAlAño)
    ;
}


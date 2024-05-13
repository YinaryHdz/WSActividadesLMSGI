let numerosPromedio = [];
let numerosMayor = [];
let numerosParesEImpares = [];

function agregarNumero(tipo) {
    let inputId, numeros;
    if (tipo === 'promedio') {
        inputId = 'numeroPromedio';
        numeros = numerosPromedio;
    } else if (tipo === 'mayor') {
        inputId = 'numeroMayor';
        numeros = numerosMayor;
    } else if (tipo === 'parEImpar') {
    inputId = 'numeroParEImpar';
    numeros = numerosParesEImpares;
    }

    const input = document.getElementById(inputId);
    const numero = parseInt(input.value);
    if (!isNaN(numero)) {
        numeros.push(numero);
        input.value = '';
    } else {
        alert('Por favor ingresa un número válido.');
    }
}

function calcularPromedio() {
    const resultadoInput = document.getElementById('resultado');
    if (numerosPromedio.length === 0) {
        resultadoInput.value = 'No hay números para calcular el promedio.';
        return;
    }
    
    const suma = numerosPromedio.reduce((total, numero) => total + numero, 0);
    const promedio = suma / numerosPromedio.length;
    resultadoInput.value = 'El promedio de los números es: ' + promedio.toFixed(2);
}

function numeroMayor() {
    const resultadoInput = document.getElementById('resultadoNumeroMayor');
    if (numerosMayor.length === 0) {
        resultadoInput.value = 'No hay números para calcular el número mayor.';
        return;
    }
    
    let max = numerosMayor[0];
    for (let numero of numerosMayor) {
        if (numero > max) {
            max = numero;
        }
    }
    resultadoInput.value = 'El número mayor es: ' + max;
}

function calcularParesEImpares(){
    const resultadoInput = document.getElementById('resultadoParEImpar');
    if (numerosParesEImpares.length === 0) {
        resultadoInput.value = 'No hay números para calcular el número mayor.';
        return;
    }
    let par = 0;
    let impar = 0;
    for (let numero of numerosParesEImpares){
        if(numero % 2 === 0){
            par++;
        }else{
            impar++;
        }
    }
    resultadoInput.value = 'Hay ' + par+ ' pares y ' +impar + ' impares';
}

//Contador de numeros pares 
function contadorNumerosPares(){
    let contador = 0;
    let a = parseInt(document.getElementById("n1").value)
    let b = parseInt(document.getElementById("n2").value)
    for (let i =a; i<=b;i+=2){
        if (i % 2 == 0) {
        console.log("Los numeros pares comprendidos son: " + i)
        contador++;
    }else if (i % 2 == 1) {
        console.log("Los numeros pares comprendidos son: " + (++i))
    }
    }
    resultado= 'En total hay ' +contador+ ' numeros pares'
    document.getElementById("resultado").value = resultado;
}

//Conversor de temperatura 
function convertirTemperatura() {
    var temperatura = parseFloat(document.getElementById("temp").value);
    var direccion = document.getElementById("conversion").value;
    var resultado = document.getElementById("resul");
    if (direccion === "caf") {
        var fahrenheit = (temperatura * 1.8) + 32;
        resultado.value = temperatura + " grados Celsius son " + fahrenheit.toFixed(2) + " grados Fahrenheit.";
    } else if (direccion === "fac") {
        var celsius = (temperatura - 32)/ 1.8;
        resultado.value = temperatura + " grados Fahrenheit son " + celsius.toFixed(2) + " grados Celsius.";
    } 
}

//Generador de numero aleatorio 
function comprobarNumero() {
    var numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    var intentos = 0;
    var inputNumero = parseInt(document.getElementById("guess").value);
    var resultado = document.getElementById("res");

    if (isNaN(inputNumero)) {
        resultado.textContent = "Por favor, introduce un número válido.";
        return;
    }
    intentos++;
    if (inputNumero === numeroAleatorio) {
        resultado.textContent = "¡Felicidades! Has adivinado el número " + numeroAleatorio + " en " + intentos + " intentos.";
    } else if (inputNumero < numeroAleatorio) {
        resultado.textContent = "El número es muy bajo. Intenta con un número más alto.";
    } else {
        resultado.textContent = "El número es muy alto. Intenta con un número más bajo.";
    }
}

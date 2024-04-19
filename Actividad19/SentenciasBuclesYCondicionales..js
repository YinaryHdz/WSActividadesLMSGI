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
    resultado= 'Hay ' +contador+ ' numeros pares'
    document.getElementById("resultado").value = resultado;
}


//Conversor de temperatura 
function convertirTemperatura() {
    let temperatura = parseFloat(document.getElementById("temp").value);
    let direccion = document.getElementById("conversion").value;
    let resultado = document.getElementById("resul");
    if (direccion === "caf") {
        let fahrenheit = (temperatura * 1.8) + 32;
        resultado.value = temperatura + " ºC son " + fahrenheit.toFixed(2) + " ºF.";
    } else if (direccion === "fac") {
        let celsius = (temperatura - 32)/ 1.8;
        resultado.value = temperatura + " ºF son" + celsius.toFixed(2) + " ºC";
    } 
}

//Generador de numero aleatorio 
function comprobarNumero() {
    let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    let intentos = 0;
    let inputNumero = parseInt(document.getElementById("guess").value);
    let resultado = document.getElementById("res");

    if (isNaN(inputNumero)) {
        resultado.textContent = "Por favor, introduce un número válido.";
        return;
    }
    intentos++;
    if (inputNumero === numeroAleatorio) {
        resultado.textContent = "¡Felicidades! Has adivinado el número " + numeroAleatorio;
    } else if (inputNumero < numeroAleatorio) {
        resultado.textContent = "El número es muy bajo. Intenta con un número más alto.";
    } else {
        resultado.textContent = "El número es muy alto. Intenta con un número más bajo.";
    }
}

//Cambiar el color de la pantalla: 
function cambiarColor(){
    document.getElementById("cambioColor").addEventListener("click", function() {
        let color = document.getElementById("colorInput").value;
        document.body.style.backgroundColor = color;
        document.getElementById("color").style.backgroundColor = color;
    });  
}

//Comprobar usuario y contraseña
function usuarioYContrasenia(){
    let usuario = document.getElementById("usuario").value;  
    let contraseña = document.getElementById("contraseña").value;
    if (usuario == "goku" && contraseña == "Vegeta777"){
        alert('Bienvenido')
    }else{
        alert('Contraseña incorrecta')
    }
}

//Verificador de numeros primos 
function verificadorNumerosPrimos(){
    let resultado = document.getElementById("respuesta");
    let numero = document.getElementById('numero').value
    numero = parseInt(numero)
    let esPrimo = true;
    for(let i = 2; i<numero; i++){
        if(  numero % i== 0){
            esPrimo = false;
        }
    }
    if(esPrimo){
        resultado.textContent = 'El numero es primo'
    }else{
        resultado.textContent = 'El numero no es primo'
    }
}
//Secuencia Fibonacci
function SecuenciaFibonacci(){
    let numero = parseInt(document.getElementById("numeroFibo").value);
    let n1 = 0;
    let n2 = 1;
    let suma = 1;
    let i = 0;
    let fiboSecuencia = "";
    fiboSecuencia += n1 + ", " + n2 + ", ";
    for (i = 2; i < numero; i++) {
        suma = n1 + n2;
        n1 = n2;
        n2 = suma;
        fiboSecuencia += suma + ", ";
    }

    document.getElementById("fibo").innerText = fiboSecuencia;
}

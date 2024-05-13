class Procesador {
    constructor(marca, modelo, numeroNucleos, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.numeroNucleos = numeroNucleos;
        this.precio = precio;
    }

    getMarca() {
        return this.marca;
    }

    setMarca(marca) {
        this.marca = marca;
    }

    getModelo() {
        return this.modelo;
    }

    setModelo(modelo) {
        this.modelo = modelo;
    }

    getNumeroNucleos() {
        return this.numeroNucleos;
    }

    setNumeroNucleos(numeroNucleos) {
        this.numeroNucleos = numeroNucleos;
    }

    getPrecio() {
        return this.precio;
    }

    setPrecio(precio) {
        this.precio = precio;
    }
}

class PlacaBase{
    constructor (marca, precio, tipo){
        this.marca = marca;
        this.precio = precio;  
        this.tipo = tipo;
    }
    getMarca() {
        return this.marca;
    }

    setMarca(marca) {
        this.marca = marca;
    }
    getPrecio() {
        return this.precio;
    }

    setPrecio(precio) {
        this.precio = precio;
    }
    getTipo() {
        return this.tipo;
    }

    setTipo(tipo) {
        this.tipo = tipo;
    }
} 
class TarjetaGrafica {
    constructor(marca, modelo, nucleosCUDA, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.nucleosCUDA = nucleosCUDA;
        this.precio = precio;
    }
    
    getMarca() {
        return this.marca;
    }

    setMarca(marca) {
        this.marca = marca;
    }

    getModelo() {
        return this.modelo;
    }

    setModelo(modelo) {
        this.modelo = modelo;
    }

    getNucleosCUDA() {
        return this.nucleosCUDA;
    }

    setNucleosCUDA(numeroNucleos) {
        this.nucleosCUDA = this.nucleosCUDA;
    }

    getPrecio() {
        return this.precio;
    }

    setPrecio(precio) {
        this.precio = precio;
    }
}
class Periferico{
    constructor(marca, precio, tipo ){
        this.marca = marca;
        this.precio = precio;  
        this.tipo = tipo;
    }
    getMarca() {
        return this.marca;
    }

    setMarca(marca) {
        this.marca = marca;
    }
    getPrecio() {
        return this.precio;
    }

    setPrecio(precio) {
        this.precio = precio;
    }
    getTipo() {
        return this.tipo;
    }

    setTipo(tipo) {
        this.tipo = tipo;
    }
}
class RAM{
    constructor(marca, capacidad,precio){
        this.marca = marca;
        this.capacidad = capacidad;
        this.precio = precio;
    }
    getMarca() {
        return this.marca;
    }
    setMarca(marca) {
        this.marca = marca;
    }
    getCapacidad(){
        return this.capacidad;
    }
    setCapacidad(capacidad) {
        this.capacidad = capacidad;
    }
    getPrecio() {
        return this.precio;
    }

    setPrecio(precio) {
        this.precio = precio;
    }
}

class Ordenador {
    constructor(precio, tarjetaGrafica, placaBase, listaRAMs, listaPerifericos, procesador) {
        this.precio = precio;
        this.tarjetaGrafica = tarjetaGrafica;
        this.placaBase = placaBase;
        this.listaRAMs = listaRAMs;
        this.listaPerifericos = listaPerifericos;
        this.procesador = procesador;
    }

    getPrecio() {
        return this.precio;
    }

    setPrecio(precio) {
        this.precio = precio;
    }

    getTarjetaGrafica() {
        return this.tarjetaGrafica;
    }

    setTarjetaGrafica(tarjetaGrafica) {
        this.tarjetaGrafica = tarjetaGrafica;
    }

    getPlacaBase() {
        return this.placaBase;
    }

    setPlacaBase(placaBase) {
        this.placaBase = placaBase;
    }

    getListaRAMs() {
        return this.listaRAMs;
    }

    setListaRAMs(listaRAMs) {
        this.listaRAMs = listaRAMs;
    }

    getListaPerifericos() {
        return this.listaPerifericos;
    }

    setListaPerifericos(listaPerifericos) {
        this.listaPerifericos = listaPerifericos;
    }
    getProcesador() {
        return this.procesador;
    }

    setProcesador(procesador) {
        this.procesador = procesador;
    }


    calcularPrecio() {
        let precioTotal = this.precio;
        // Sumar precio del procesador
        precioTotal += this.procesador.getPrecio();
        // Sumar precio de la tarjeta gráfica
        precioTotal += this.tarjetaGrafica.getPrecio();
        // Sumar precio de la placa base
        precioTotal += this.placaBase.getPrecio();
        // Sumar precios de las RAMs
        for (let ram of this.listaRAMs) {
            precioTotal += ram.getPrecio();
        }
        // Sumar precios de los periféricos
        for (let periferico of this.listaPerifericos) {
            precioTotal += periferico.getPrecio();
        }
        precioTotal += this.precio;
        return precioTotal;
    }
    
}

// Crear instancias de cada clase y asignarles valores
let procesador = new Procesador("Intel", "Core i7", 8, 300);
let placaBase = new PlacaBase("ASUS", 150, "ATX");
let tarjetaGrafica = new TarjetaGrafica("NVIDIA", "GeForce RTX 3080", 8704, 800);
let periferico1 = new Periferico("Logitech", 50, "Ratón");
let periferico2 = new Periferico("Corsair", 100, "Teclado");
let ram1 = new RAM("Kingston", 16, 100);
let ram2 = new RAM("Corsair", 32, 200);

// Crear una lista de RAMs y periféricos
let listaRAMs = [ram1, ram2];
let listaPerifericos = [periferico1, periferico2];

// Crear una instancia de la clase Ordenador y asignarle valores
let ordenador = new Ordenador(2000, tarjetaGrafica, placaBase, listaRAMs, listaPerifericos, procesador);

// Calcular el precio total
let precioFinal = ordenador.calcularPrecio();
console.log("El precio total del ordenador es:" + precioFinal );



/*
Ejemplos tipos de datos en JavaScript
*/
//Tipo de dato String
var nombre = "Carlos";
console.log(nombre);

//Tipo de dato numerico
var numero = 1000;
console.log(numero);

//Tipo de dato objeto
var objeto = {
    nombre1 : "Juan",
    apellido : {
        primerapellido : "Perez",
        segundoapellido : "Lopez"
    },
}
console.log("Los apellidos son"+objeto.apellido.primerapellido)

/**
 * Tipo de dato object
 */
var celular = {
    color : "verde",
    ancho : {
        unidad : "inc",
        valor : 10
    },
    alto : 12,
    memoriaRam : {
        unidad : "gb",
        valor : 4
    },
    pixeles : {
        unidad : "MPX",
        valor : 68
    }
}

console.log("El ancho de mi celular es de " + celular.ancho.valor.valorDefinitivo + " " + celular.ancho.unidad)
console.log("Este celular es de color "+ celular.color)
console.log("Este celular tiene "+ celular.memoriaRam.valor+" "+ celular.memoriaRam.unidad +" de memoriaRam" )
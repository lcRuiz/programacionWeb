/**
 * Para ver información sobre
 * el tipo de dato de las variables
 */

var nombre = "David";
var edad = 30;
var mayorDeEdad = true;
function calcularAñoNacimiento(){}
/**
 * La función "typeof(param)"
 * retorna el tipo de dato de el parametro "param"
 * 
 * Esta función puede llamarse sin parentecis
 */
var tipos = {
    tipoNombre : typeof(nombre),
    tipoedad : typeof(edad),
    tipoMayorDeEdad : typeof mayorDeEdad,
    tipoFuncion : typeof calcularAñoNacimiento
}

console.log("El tipo de la variable \'nombre\' es: "+tipos.tipoNombre);
console.log("El tipo de la variable \"edad\" es: "+tipos.tipoedad);
console.log("El tipo de la variable \"mayorDeEdad\" es: "+tipos.tipoMayorDeEdad);
console.log("El tipo de la función \"calcularAñoNacimiento\" es: "+tipos.tipoFuncion);
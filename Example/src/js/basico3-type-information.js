/**
 * Para ver información sobre
 * el tipo de dato de las variables
 */

var nombre = "David";
var edad = 30;
var mayorDeEdad = true;
/**
 * La función "typeof(param)"
 * retorna el tipo de dato de el parametro "param"
 * 
 */
var tipos = {
    tipoNombre : typeof(nombre),
    tipoedad : typeof(edad),
    tipoMayorDeEdad : typeof(mayorDeEdad)
}

console.log("El tipo de la variable \'nombre\' es: "+tipos.tipoNombre);
console.log("El tipo de la variable \"edad\" es: "+tipos.tipoedad);
console.log("El tipo de la variable \"mayorDeEdad\" es: "+tipos.tipoMayorDeEdad);
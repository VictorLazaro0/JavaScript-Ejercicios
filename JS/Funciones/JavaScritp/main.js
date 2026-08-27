
//Funcion Normal  : multiples funciones
let distacia = parseFloat(prompt(" ingresa el valor de la distacia"));
let tiempo = parseFloat(prompt(" Ingresa el valor del tiempo"));

function calcularVelocidad(distancia,tiempo) {
    ///let distancia = 1000;
    //let tiempo = 50 ;
    return distancia / tiempo;
}
console.log("La velocidad del objeto es : "+calcularVelocidad(distacia,tiempo)+" metros por segundos al cuadrado .");


///////////////////
//const PI = Math.PI;
let radio = parseFloat(prompt("Ingresa el valor del radio :"))
//Funcion Normal 
function volumenEsfera(){
    //let radio = 45;
    let radioCubo = Math.pow(radio,3)
     return  (4 / 3) * Math.PI * radioCubo;
}
console.log("El volumen de la esfera es " + volumenEsfera().toFixed(4));


/**
 * parseInt() valores enteros, no puede con las letras solo se necesitan numero
 * si el string tiene letras ya no puede.
 * parseFloat() valores decimales ,se queda con los numeros y las letras 
 * no
 *   const sumar = (a, b) => a + b;
 *   const sumar → guardamos la función en una variable llamada sumar.
 *   (a, b) → son los parámetros que recibe la función.
 *   => → es la flecha que indica que estamos creando una función flecha.
 *   a + b → es lo que devuelve la función.
 */

 //let d = parseFloat(prompt(" ingresa el valor de la distacia"));
//let t = parseFloat(prompt(" Ingresa el valor del tiempo"));

//Funciones flechas funciones sencillas 
const calVelocidad = (distancia,tiempo) => distancia / tiempo;
console.log("La velocidad de objeto es : "+calVelocidad(distacia,tiempo)+" metros por segundo al cuadrado .");
//Funcion Flecha
//const PI = Math.PI;
//let radio = parseFloat(prompt("Ingresa el valor del radio :"))
/*
const calcularVolumen = radio => {
    let radioCubo = Math.pow(radio);
    let v = 4/3*PI*radioCubo;
    return v;
};
const calcularVolumen = radio => console.log(4/3*PI*Math.pow(radio, 3));
*/
const volEsfera = radio => (4 / 3) * Math.PI * radio ** 3;
console.log("El volumen de la esfera es " + volumenEsfera(radio).toFixed(4));

//Es una funcion devuelve el tipo de dato que esta guardano unavaliable
//typeof
console.log(typeof radio);
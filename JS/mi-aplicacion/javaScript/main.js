import{validarNombre,validarCorreo} from "./validaciones.js";
import{Usuario} from "./usuario.js"
const usuarios = [];
let opcion;

do {

   console.log(`
========================
      Que deseas Hacer 
========================
1. Crear usuario
2. Mostrar usuario
3. Buscar Usuario
4. Salir
    `);
 opcion = parseInt(prompt("Seleciona una opcion"));
switch(opcion){
    case 1: 
    let nombre = prompt("Ingresa tu nombre:");
    let correo = prompt("Ingresa tu correo :");
    console.log("Nombre:", validarNombre(nombre));
    console.log("Correo:", validarCorreo(correo));
    if(validarNombre(nombre) && validarCorreo(correo)){
    const usuario = new Usuario(nombre,correo);
    usuarios.push(usuario);
    console.log("Usuario creado correctamente")
    }else{
     console.log("datos no validos")
    }
    break;
    case 2 :
        console.log("datos del usuario")
       // console.log(usuarios);
        usuario.mostrarDatos(usuarios);
        break;
    case 3 :

     let  buscar = prompt("Ingresa el nombre que deseas buscar:")
     const busqueda = usuarios.find(usuario => usuario.nombre === buscar);
     if(busqueda){
         console.log("nombre encontrado");
     console.log(busqueda);

     }else {
          console.log("No se encontró ningún usuario con ese nombre.");
     }
     /*// Le pedimos al usuario que escriba el nombre que quiere buscar.
// prompt() muestra una ventana y devuelve lo que el usuario escribió.
let buscar = prompt("Ingresa el nombre que deseas buscar:");


// .find() busca dentro del array "usuarios" un elemento que cumpla
// la condición que está dentro de los paréntesis.
//
// "usuario" representa cada objeto que .find() va revisando.
// "usuario.nombre" accede a la propiedad nombre del objeto.
// "===" compara si el nombre del usuario es igual al nombre buscado.
//
// Si encuentra una coincidencia, .find() devuelve ese objeto.
// Si no encuentra ninguna, devuelve undefined.
const busqueda = usuarios.find(
    usuario => usuario.nombre === buscar
);


// if comprueba si "busqueda" contiene un objeto.
// Si .find() encontró un usuario, busqueda será ese objeto y
// la condición será verdadera.
if (busqueda) {

    // console.log() muestra un mensaje en la consola.
    console.log("Nombre encontrado");

    // Mostramos el objeto completo que encontró .find().
    console.log(busqueda);


// else se ejecuta cuando .find() NO encontró ningún usuario.
// En ese caso, busqueda vale undefined.
} else {

    // Mostramos un mensaje indicando que no hubo coincidencias.
    console.log("No se encontró ningún usuario con ese nombre.");
}
*/
    
     /*let encontrado = false ;
        for(let i = 0; i < usuarios.length; i++) {
        if(usuarios[i].nombre == buscar) {
            console.log("nombre encontrado");
             console.log(usuarios[i]);

            encontrado = true;
            break;
        }}
        if (!encontrado) {
        console.log("No se encontró ningún usuario con ese nombre.");
        }*/
        break;
        default:
            console.log("Opción no válida");
}
} while (opcion !== 4);
console.log("Gracias por usar el programa y salir")

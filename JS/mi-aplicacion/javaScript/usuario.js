 export class Usuario {
    nombre;
    correo;

    constructor(nombre,correo) {
        this.nombre = nombre;
        this.correo = correo;
    }//constructor Usuario
// Mostrar datos 
       mostrarDatos(usuarios) {
        for (const usuario of usuarios) {
            console.log("Nombre:", usuario.nombre);
            console.log("Correo:", usuario.correo);
        }
    }
}//Clase Usuario
 /**
  * Una propiedad estática es una propiedad que pertenece 
  * a la clase y no a cada objeto o instancia de esa clase.
  */
const usuario = new Usuario("Victor","Victor@gmail.com")

/**¿Qué significa export?
export significa “hacer disponible algo de este archivo 
para que otros archivos puedan utilizarlo”. */


/**
 * ¿Qué significa import?
import significa “traer algo que otro módulo exportó”.
 */

/**Export nombrado
Un export nombrado tiene un nombre específico.
import { sumar, restar } from "./operaciones.js";

Los nombres deben coincidir con los que exportaste.
import { sumar, restar } from "./operaciones.js";

Los nombres deben coincidir con los que exportaste. */



/**export default
export default se utiliza para indicar cuál es la exportación principal o predeterminada de ese archivo.
Regla para memorizar
// NOMBRADO
export function sumar() {}

import { sumar } from "./archivo.js";

// DEFAULT
export default function sumar() {}

import sumar from "./archivo.js";

Nombrado → { }
Default → sin { }
Y un archivo puede tener varios exports nombrados, pero solamente un export default.



*/
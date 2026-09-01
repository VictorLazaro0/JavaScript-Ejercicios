  export function validarCorreo(correo){
    let regex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);

}
/**
 * Regular Expressions, abreviado Regex, en español se traduce como expresiones 
 * regulares.
 *Es una forma de crear regexes para buscar, comprobar o validar texto.
 * https://ihateregex.io   // acordeon de expresiones regulares
 */
export function validarNombre(nombre){
    /**
     * [A-Za-z] → letras mayúsculas/minúsculas
     *  {3,}     → 3 o más
     *  ^        → comienzo
     *   $        → final
     */
   let regex = /^[A-Za-z]{3,40}$/;

   return regex.test(nombre)

}
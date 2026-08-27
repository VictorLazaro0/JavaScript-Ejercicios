
let n = parseFloat(prompt(" ingresa un numero "));

for(let i = 1 ; i <= n  ; i++){
 console.log("Proceso "+ i + " registrado...");
 
}// for
console.log("Todos los procesos han sido registrados")

/* Ejercicio 2 */
const arreglo = ["admin","clave123","pass","supersegura123"];

for(let i = 0; i < arreglo.length ; i++){
  if(arreglo[i].length >= 8){
    console.log("Contraseña"+ i + 1 +"  es valida")
  } else {
    console.log("Contraseña"+ i + 1+" no es valida")
  }
}

//Control de intentos para iniciar sesion 
let  i = 0;
do {
  let contra = prompt(" ingresa una contrasena ");
  i++;
  if( contra === "admin123"){
      console.log("acceso concedido");
      break; 
  }else  {
    console.log("Contra incorrecta");
  }
  
} while (i < 3);
if(i === 3){
  console.log("Cuenta bloqueada")
}
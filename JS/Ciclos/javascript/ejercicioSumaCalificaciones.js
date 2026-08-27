 const califiaciones = [4.3,5.0,4.1,4.4,3.1,4.0];

 let suma = 0;
  for(let i = 0; i < califiaciones.length; i++){
    suma += califiaciones[i];

    //La forma mas corta de hacer suma = suma + calificaciones 
  }
  let promedio = suma / califiaciones.length;
  console.log("El promedio es : " + promedio.toFixed(1));
/************************************************* */



 const promedioo = (califiaciones) => {
    let suma = 0;
    for(let i = 0; i < califiaciones.length; i++){
    suma += califiaciones[i];
  }
  return suma / califiaciones.length
 }
 console.log("El promedio es : " + promedioo.toFixed(1));
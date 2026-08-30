class Person {

    //Propiedades de mi clase 
  id;
  nombre;
  email;
  carrito;
  
constructor(id,nombre,email){
    this.id = id;
    this.nombre = nombre.toUpperCase();
    this.email = email;
    this.carrito =[];
};//Contructor Persona

  showData(){
    console.log(`  
        id persona : ${this.id},
        Nombre completo de la persona : ${this.nombre}
        Correo de conttacto : ${this.email}
        `)
  };//ModtrarDatos


  addProduct(producto){
    this.carrito.push(producto)


  };//Agregar Producto
  
  //El operador ... es un operador de JavaScript que agrupa o desborda elementos.
  // Como Rest: Agrupa múltiples argumentos sueltos en un solo arreglo.
  // Como Spread: Desborda los elementos de un arreglo u objeto para copiarlos o combinarlos.
  addProducts(...producto){
    this.carrito.push(...producto);

  };//Agregar Productos

  addProductos(productos){
    productos.forEach((prodcto) => this.carrito.push(prodcto)  
    );
  }// agregar productos
  calculateTotal(){
    let total = 0 ;
     for (let i = 0;  i < this.carrito.length; i++) {
        total = total + this.carrito[i]
    }
    return total;
  };//Calcular el total
}//class Person
class Usuario extends Person {
  ordenCosto ;
  costoEnvio ;
constructor(id,nombre,email,ordenCosto,costoEnvio){
 super(id,nombre,email)
 this.ordenCosto = ordenCosto;
 this.costoEnvio = costoEnvio;
}
// se sobre escribe el metodo
//// 
calculateTotal(){
  let total = 0;
   if(this.ordenCosto >= 299) {
    total = this.ordenCosto;
 console.log(" el costo ya va incluido ");

}else {
     total = this.ordenCosto + this.costoEnvio;
     console.log("El costo del envio es : " + this.costoEnvio + " El precio con el envio es ;" + total);
}
return total;
}
}//Clase Usuario

class UsuarioPro extends Person {
 descuento;
 ordenCosto;
 costoEnvio;
constructor(id,nombre,email,ordenCosto,costoEnvio){
 super(id,nombre,email)
 this.ordenCosto = ordenCosto;
 this.costoEnvio = costoEnvio;
}
///// Metodo calcular total
calculateTotal(){
  let total = 0;
  
  // 1. Calcular descuento
  let descuento = this.ordenCosto * 5 / 100;
  // 2. Aplicar descuento
    let precioFinal = this.ordenCosto - descuento
    
   if(precioFinal >= 199) {
    total = precioFinal;
 console.log(" el costo ya va incluido ");

}else {
     total = precioFinal + this.costoEnvio;
     console.log("El costo del envio es : " + this.costoEnvio + " El precio con el envio es ;" + total);
}
return total;
}
}// Clase UsuarioPro

//const juan = new Person(1233 ,"juan","juan@gmail.com",["zapatos"]);
const juanito = new Person(33 ,"juanito","juanito@gmail.com");
console.log(juanito);
juanito.addProduct("Coca cola");
juanito.addProduct("Chicles  ");
juanito.addProducts(" papas","leche","Cafe","Pan");

console.log(juanito);
//juanito.showData();

// Clase para hacer las pruebas

/**rea una clase Main donde únicamente ejecutes y pruebes tu aplicación. 
 * Es decir, no tiene 
 * propiedades ni constructor, solo un método que ejecuta el programa. */
class Main{
static ejecutar() {
      const usuario = new Usuario(
            1,
            "Juan",
            "juan@gmail.com",
            150,
            50
        );

        console.log(usuario.nombre);
        console.log(usuario.email)

        const total = usuario.calculateTotal();

        console.log("Total:", total);
         const usuariopro = new UsuarioPro(
            1,
            "Victor",
            "Victor@gmail.com",
            30,
            50
        );

        console.log(usuario.nombre);
        console.log(usuario.email)

        const total1 = usuariopro.calculateTotal();

        console.log("Total:", total1);
}
}
Main.ejecutar();
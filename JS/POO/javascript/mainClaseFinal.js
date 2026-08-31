class Person { //Caracteristicas generales de las personas

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
  //Polimorfismo y abstracion 
  calculateTotal(){
  };//Calcular el total
}//class Person
// la Clase usuario hereda de persona 
class Usuario extends Person { //Class Usuario
    //Propiedad Tipo
    tipo; // Es muy particular de la clase usuario 
    constructor(id,nombre,email){
        super(id,nombre,email)//Super es Persona
        this.tipo = "Usuario normal";
    }//Constructor usuario

// se sobre escribe el metodo
//// 
calculateTotal(){
console.log("Calculando el precio total para Usuario Normal ")
};

}//Clase Usuario

class UsuarioPro extends Person {
    //Propiedad tipo
 tipo;
constructor(id,nombre,email){
 super(id,nombre,email)
 this.tipo = "Usuario Pro"
}//Constructor Usuario Pro
///// Metodo calcular total
calculateTotal(){
    console.log("Usuario Pro : descuento 5%, etc.Calculando...")
}

}// Clase UsuarioPro

class Main{
    static main(){
            const juanito = new Usuario(33 ,"juanito","juanito@gmail.com");
            const victor = new UsuarioPro(22,"Pedrito","pedrito@gmail.com")
            console.log(juanito);
            juanito.addProduct("Coca cola");
            juanito.addProduct("Chicles  ");
            juanito.addProducts(" papas","leche","Cafe","Pan");
            console.log(victor);
            console.log(juanito);
            juanito.calculateTotal();
            victor.calculateTotal();
    }

}
Main.main();
//const juan = new Person(1233 ,"juan","juan@gmail.com",["zapatos"]);


// Clase para hacer las pruebas

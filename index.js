document.querySelector("h3").style.color = "pink";
document.querySelector("h1").style.color = "violet";


let resultado = 0
//va a ser luego un array de objetos con los usuarios y sus datos
const usuarios = []

//producto no hace falta meterlo como parametro en el constructor.
class Usuario {
    constructor(nombre, donacion) {
        this.nombre = nombre;
        this.donacion = donacion;
        this.productos = [];
    }

    saludar() {
        console.log(`Bienvenido ${this.nombre}, gracias por donar ${this.donacion}`)
    }

    agregarProducto(producto) {
        this.productos.push(producto)
    }

    obtenerProductos() {
        console.log(`${this.nombre} compro estos productos: ${this.productos}`)
    }
}

let usuario1 = new Usuario('Maria', 500)
let usuario2 = new Usuario('Laura', 500)
let usuario3 = new Usuario('Ana', 500)

//agregamos todos los usuarios con su donacion a un array. queda un array de objetos
usuarios.push(usuario1)
usuarios.push(usuario2)
usuarios.push(usuario3)

//imprime el saludo con el nombre del usuario y la donacion que hizo
usuario1.saludar()
usuario2.saludar()
usuario3.saludar()

//agregamos los productos que "compró "el usuario
usuario1.agregarProducto('pipeta')
usuario1.agregarProducto('collar')
usuario3.agregarProducto('alimento')

//obtener los productos de ese usuario
usuario1.obtenerProductos()
usuario3.obtenerProductos()

//suma de lo donado
function suma(obj) {
    obj.forEach(data => {
        let donado = data.donacion
        resultado = resultado + donado
        return resultado
    });
}

//muestra el array de objetos , cada usuario con lo donado, nombre y si tiene o no productos
console.log(usuarios)
suma(usuarios)
console.log(`El total donado es: ${resultado}`)//1500

let nombreUsuarios = []
//obtener un array solamente con los nombres de los usuarios
for (nomb of usuarios) {
    nombreUsuarios.push(nomb.nombre)
}

console.log('Los nombres de los usuarios son: ' + nombreUsuarios) //maria ana laura
console.log(nombreUsuarios) // ['maria','ana','laura'] 

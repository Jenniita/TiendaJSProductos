


//Creamos todo lo que irá en el HTML
const main = document.createElement("main");

//Section de los productos
const sectionProductos = document.createElement("section")
sectionProductos.classList.add("section-productos")

//Para buscar los productos
const input = document.createElement("input")

//Array de botones para el filtrado 
const botonesFiltrar = [
    { id: 1, nombre: "Moviles", visible: true },
    { id: 2, nombre: "Tablets", visible: true },
    { id: 3, nombre: "Portatiles", visible: true },
    { id: 4, nombre: "Ordenador", visible: true },
]
//Div para los botones
const contenedorBotones = document.createElement("div")
contenedorBotones.classList.add("btn-contenedor")

//El seleccionador de mayor a menor precio
const select = document.createElement("select")
//Array de las opciones del select
const opcionesSelect = [
    { id: 1, nombre: "Mayor a menor", visible: true },
    { id: 2, nombre: "Menor a mayor", visible: true }
]

//H1 página
const h1 = document.createElement("h1")

//H2 de Productos
const h2 = document.createElement("h2")

//section de las tarjetas
const contenedorTarjetas = document.createElement("section")
contenedorTarjetas.classList.add("tarjetas-contenedor")



//Información tarjetas
//Array con los productos de la tienda
const productosTienda = [
    { id: 1, categoria: "moviles", descripcion: "asdasda", nombre: "Movil Samsung", precio: 500 },
    { id: 2, categoria: "moviles", descripcion: "asdasda", nombre: "Movil Samsung", precio: 500 },
    { id: 3, categoria: "moviles", descripcion: "asdasda", nombre: "Movil Samsung", precio: 500 },
    { id: 4, categoria: "moviles", descripcion: "asdasda", nombre: "Movil Samsung", precio: 500 },
    { id: 5, categoria: "moviles", descripcion: "asdasda", nombre: "Movil Samsung", precio: 500 },
    { id: 6, categoria: "moviles", descripcion: "asdasda", nombre: "Movil Samsung", precio: 500 },
]


//Y ahora seleccionamos el root del HTML
const root = document.querySelector(".root")

//Al root le metemos el main
root.appendChild(main)
//Al main le añadimos el h1
main.appendChild(h1)
//Agregamos texto al h1
h1.textContent = "Los mejores Móviles e Informática"

//Al section de productos le agregamos el h2
sectionProductos.appendChild(h2)
h2.textContent = "Productos"

//Para nombrar a los botones, los recorremos con un foreach y luegos los añadiremos en el div
botonesFiltrar.forEach(nombreBotones => {
    //creamos el boton
    const boton = document.createElement("button")
    //le añadimos el nombre
    boton.textContent = nombreBotones.nombre;
    //Y lo añadimos al div
    contenedorBotones.appendChild(boton)
})

//Ponemos lo que tendrá el input
input.placeholder = "Buscar producto..."

//Añadimos el input
contenedorBotones.appendChild(input)

//Ponemos las opciones del select recorriendolo con un foreach pq es un array
opcionesSelect.forEach(nombreOpcion => {
    const opcion = document.createElement("option")
    opcion.textContent = nombreOpcion.nombre;
    select.appendChild(opcion)
    contenedorBotones.appendChild(select)
})


//Vamos a crear las tarjetas con una función que las vaya "pintando"
function pintar(producto) {
    //Limpiamos el contenido que haya en el contenedor
    contenedorTarjetas.innerHTML = "";

    //Y ahora recorremos el array de los productos para hacer lar tarjetas
    productosTienda.forEach(({ id, categoria, descripcion, nombre, precio }) => {
        //Creamos las tarjetas individuales y le ponemos una clase
        const tarjeta = document.createElement("div")
        tarjeta.classList.add("tarjeta")
        //Y pintamos el html con los datos
        tarjeta.innerHTML = `
            <h3>${nombre}</h3>
            <p>${categoria}</p>
            <p>${descripcion}</p>
            <p>${precio}</p> `

        //Y agregamos la tarjeta al contenedor de las tarjetas
        contenedorTarjetas.appendChild(tarjeta)
    })
}

//Y ponemos la función en marcha
pintar(productosTienda)

//Y ahora añadimos el div de botones al root
main.appendChild(contenedorBotones)
//Y al section de los productos le agregamos los botones
sectionProductos.appendChild(contenedorBotones)
//Y agregamos al main el section de los productos, ya con el h2, y los botones
main.appendChild(sectionProductos)
//Y le agregamos al section de productos el contenedor que tendrá las tarjetas
sectionProductos.appendChild(contenedorTarjetas)



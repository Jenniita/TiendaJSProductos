
let estado = "original"



//---------------------------------------------------------------------------------
//Creamos las variables que irán en el HTML 

//Main del HTML (puesto)
const main = document.createElement("main");

//Section de los productos (puesto)
const sectionProductos = document.createElement("section")
sectionProductos.classList.add("section-productos")

//Input buscar los productos (puesto en el html) (falta programarlo)
let input = document.createElement("input")

//Array de botones para el filtrado (puesto en el html) (falta programarlo)
const botonesFiltrar = [
    { id: 1, nombre: "Móviles", visible: true },
    { id: 2, nombre: "Tablets", visible: true },
    { id: 3, nombre: "Portátiles", visible: true },
    { id: 4, nombre: "Ordenadores", visible: true },
    { id: 5, nombre: "Todos", visible: true }
]

//Div para los botones (puesto)
const contenedorBotones = document.createElement("div")
contenedorBotones.classList.add("btn-contenedor")

//El seleccionador de mayor a menor precio (puesto) (programado)
let select = document.createElement("select")
//Array de las opciones del select (programado)
let opcionesSelect = [
    { id: 1, nombre: "Mayor a menor", visible: true },
    { id: 2, nombre: "Menor a mayor", visible: true },
    { id: 3, nombre: "Sin orden", visible: true }
]

//H1 página (puesto)
const h1 = document.createElement("h1")

//H2 de Productos (puesto)
const h2 = document.createElement("h2")

//Section de las tarjetas (puesto)
const contenedorTarjetas = document.createElement("section")
contenedorTarjetas.classList.add("tarjetas-contenedor")

//Array carrito vacío en el que se irán metiendo los productos
const carrito = [];

//---------------------------------------------------------------------------------
//Información tarjetas

//Array con los productos de la tienda
const productosTienda = [
    { id: 1, categoria: "móviles", descripcion: "Pantalla AMOLED de 6,1 pulgadas y cámara principal de 50 MP.", nombre: "Samsung Galaxy A55", precio: 399, imagen: "https://pycmovil.com/wp-content/uploads/elementor/thumbs/img_4366-rqp63vz0l6vlmpcb8m5ro5gdrn40ktqp2mwa8iby5c.jpeg" },
    { id: 2, categoria: "móviles", descripcion: "Teléfono compacto con pantalla OLED y cámara de alta resolución.", nombre: "Google Pixel 8a", precio: 549, imagen: "https://pycmovil.com/wp-content/uploads/elementor/thumbs/img_4365-rqp635nj9tvklmejias7qc3h4upqlau7n0mosreyzk.jpeg" },
    { id: 3, categoria: "móviles", descripcion: "Móvil con pantalla fluida de 120 Hz y batería de larga duración.", nombre: "Xiaomi Redmi Note 13 Pro", precio: 329, imagen: "https://pycmovil.com/wp-content/uploads/elementor/thumbs/img_4444-rqp62lwxab4jtt77pk91rz2snrf13nnukaxhpy88m8.jpeg" },
    { id: 4, categoria: "móviles", descripcion: "Diseño ligero, cámara de 48 MP y rendimiento rápido para el día a día.", nombre: "iPhone 15", precio: 859, imagen: "https://pycmovil.com/wp-content/uploads/elementor/thumbs/img_3781-rqp6cbkvwof7sr3azre9jiu9n3jkn27zwdm48vtsbk.jpeg" },
    { id: 5, categoria: "móviles", descripcion: "Pantalla AMOLED brillante y carga rápida de 67 W.", nombre: "OnePlus Nord 3", precio: 449, imagen: "https://pycmovil.com/wp-content/uploads/elementor/thumbs/img_3514-rqp6s64x5449k22jg40t30v27zfdfc52etlujubteo.jpeg" },
    { id: 6, categoria: "móviles", descripcion: "Móvil 5G con pantalla amplia y espacio para todas tus aplicaciones.", nombre: "Motorola Edge 40 Neo", precio: 299, imagen: "https://pycmovil.com/wp-content/uploads/elementor/thumbs/img_3503-1-rqp7jar8dz96mwny1c66joezfbpqkuu6h3fc6c3rts.jpeg" },
    { id: 7, categoria: "móviles", descripcion: "Teléfono resistente al agua con pantalla Dynamic AMOLED.", nombre: "Samsung Galaxy S24", precio: 899, imagen: "https://pycmovil.com/wp-content/uploads/2026/10/img_0211-1-300x300.jpeg" },
    { id: 8, categoria: "móviles", descripcion: "Cámara Leica y pantalla AMOLED de gran calidad.", nombre: "Xiaomi 14", precio: 999, imagen: "https://pycmovil.com/wp-content/uploads/2026/10/img_0152-300x300.jpeg" },
    { id: 9, categoria: "móviles", descripcion: "Móvil 5G con pantalla OLED de 6,7 pulgadas y batería de 5000 mAh.", nombre: "OnePlus 12R", precio: 699, imagen: "https://pycmovil.com/wp-content/uploads/2026/10/img_0153-300x300.jpeg" },
    { id: 10, categoria: "móviles", descripcion: "Teléfono compacto con chip A15 Bionic y cámara dual.", nombre: "iPhone 13", precio: 599, imagen: "https://pycmovil.com/wp-content/uploads/2026/10/img_0154-300x300.jpeg" },
    { id: 11, categoria: "móviles", descripcion: "Pantalla Super AMOLED y cámara con estabilización óptica.", nombre: "Samsung Galaxy A35", precio: 329, imagen: "https://pycmovil.com/wp-content/uploads/2026/10/img_0155-2048x2048.jpeg" },
    { id: 12, categoria: "móviles", descripcion: "Móvil económico con pantalla de 90 Hz y conectividad 5G.", nombre: "Xiaomi Redmi 13C", precio: 159, imagen: "https://pycmovil.com/wp-content/uploads/2026/10/img_0100-1-300x300.jpeg" },
    { id: 13, categoria: "móviles", descripcion: "Cámara avanzada con zoom óptico y pantalla OLED de 120 Hz.", nombre: "Google Pixel 8 Pro", precio: 1099, imagen: "https://pycmovil.com/wp-content/uploads/2026/10/img_0101-1-300x300.jpeg" },
    { id: 14, categoria: "móviles", descripcion: "Diseño plegable con pantalla exterior para consultar notificaciones.", nombre: "Motorola Razr 40", precio: 799, imagen: "https://pycmovil.com/wp-content/uploads/2026/09/img_9075-2-2048x2048.jpeg" },
    { id: 15, categoria: "móviles", descripcion: "Móvil 5G con pantalla AMOLED y carga rápida de 120 W.", nombre: "Xiaomi 13T", precio: 599, imagen: "https://pycmovil.com/wp-content/uploads/2026/06/img_5211.jpeg" },
    { id: 16, categoria: "tablets", descripcion: "Tablet de 10,9 pulgadas compatible con Apple Pencil.", nombre: "Apple iPad 10.ª generación", precio: 449 },
    { id: 17, categoria: "tablets", descripcion: "Pantalla AMOLED de 11 pulgadas y S Pen incluido.", nombre: "Samsung Galaxy Tab S9", precio: 899 },
    { id: 18, categoria: "tablets", descripcion: "Tablet ligera con pantalla 2K y cuatro altavoces.", nombre: "Xiaomi Pad 6", precio: 399 },
    { id: 19, categoria: "tablets", descripcion: "Pantalla de 10,4 pulgadas ideal para leer y ver contenido.", nombre: "Samsung Galaxy Tab S6 Lite", precio: 349 },
    { id: 20, categoria: "tablets", descripcion: "Tablet compacta con chip A15 Bionic y pantalla de 8,3 pulgadas.", nombre: "Apple iPad mini", precio: 649 },
    { id: 21, categoria: "tablets", descripcion: "Pantalla de 11 pulgadas y batería de larga duración para estudiar.", nombre: "Lenovo Tab P11", precio: 279 },
    { id: 22, categoria: "tablets", descripcion: "Tablet de 12,4 pulgadas con pantalla Super AMOLED y S Pen.", nombre: "Samsung Galaxy Tab S9+", precio: 1149 },
    { id: 23, categoria: "tablets", descripcion: "Pantalla de 10,5 pulgadas y modo lectura para uso diario.", nombre: "Nokia T21", precio: 249 },
    { id: 24, categoria: "tablets", descripcion: "Tablet de 10,9 pulgadas con chip M2 y conectividad Wi-Fi 6E.", nombre: "Apple iPad Air", precio: 799 },
    { id: 25, categoria: "tablets", descripcion: "Tablet Android con pantalla de 11 pulgadas y sonido Dolby Atmos.", nombre: "Lenovo Tab P12", precio: 399 },
    { id: 26, categoria: "tablets", descripcion: "Pantalla de 8,7 pulgadas y diseño cómodo para llevar de viaje.", nombre: "Samsung Galaxy Tab A9", precio: 189 },
    { id: 27, categoria: "tablets", descripcion: "Tablet de 12,1 pulgadas con resolución 2.5K y carga rápida.", nombre: "Xiaomi Pad 6S Pro", precio: 699 },
    { id: 28, categoria: "tablets", descripcion: "Tablet resistente con pantalla de 10,1 pulgadas para toda la familia.", nombre: "TCL Tab 10L", precio: 149 },
    { id: 29, categoria: "tablets", descripcion: "Pantalla de 11 pulgadas, cuatro altavoces y funda con teclado.", nombre: "Huawei MatePad 11.5", precio: 399 },
    { id: 30, categoria: "tablets", descripcion: "Tablet de 14,6 pulgadas con pantalla AMOLED para productividad.", nombre: "Samsung Galaxy Tab S9 Ultra", precio: 1399 },
    { id: 31, categoria: "portátiles", descripcion: "Portátil ligero con pantalla Retina de 13,6 pulgadas y chip M2.", nombre: "Apple MacBook Air 13", precio: 1299 },
    { id: 32, categoria: "portátiles", descripcion: "Equipo de 15,6 pulgadas con procesador Ryzen 5 y SSD de 512 GB.", nombre: "ASUS VivoBook 15", precio: 699 },
    { id: 33, categoria: "portátiles", descripcion: "Portátil profesional con pantalla Full HD y procesador Intel Core i5.", nombre: "Lenovo ThinkPad E14", precio: 899 },
    { id: 34, categoria: "portátiles", descripcion: "Diseño fino, pantalla OLED y 16 GB de memoria para trabajar.", nombre: "HP Pavilion Plus 14", precio: 999 },
    { id: 35, categoria: "portátiles", descripcion: "Portátil de 16 pulgadas con gráficos RTX 4050 para jugar y crear.", nombre: "Acer Nitro 16", precio: 1299 },
    { id: 36, categoria: "portátiles", descripcion: "Ultraligero de 14 pulgadas con pantalla OLED y procesador Ryzen 7.", nombre: "ASUS Zenbook 14", precio: 1199 },
    { id: 37, categoria: "portátiles", descripcion: "Portátil convertible con pantalla táctil y procesador Intel Core i5.", nombre: "Lenovo Yoga 7", precio: 1099 },
    { id: 38, categoria: "portátiles", descripcion: "MacBook Pro de 14 pulgadas con chip M3 y pantalla Liquid Retina XDR.", nombre: "Apple MacBook Pro 14", precio: 1999 },
    { id: 39, categoria: "portátiles", descripcion: "Equipo de 15,6 pulgadas con procesador Intel Core i7 y SSD de 1 TB.", nombre: "Dell Inspiron 15", precio: 1049 },
    { id: 40, categoria: "portátiles", descripcion: "Portátil gaming con pantalla de 144 Hz y gráficos GeForce RTX 4060.", nombre: "MSI Katana 15", precio: 1499 },
    { id: 41, categoria: "portátiles", descripcion: "Portátil de 14 pulgadas con batería de larga duración y 16 GB de RAM.", nombre: "HP Envy x360 14", precio: 1199 },
    { id: 42, categoria: "portátiles", descripcion: "Equipo equilibrado de 15 pulgadas para estudiar y trabajar.", nombre: "Acer Aspire 5", precio: 649 },
    { id: 43, categoria: "portátiles", descripcion: "Portátil premium con pantalla táctil OLED de 13,4 pulgadas.", nombre: "Dell XPS 13", precio: 1599 },
    { id: 44, categoria: "portátiles", descripcion: "Portátil de 16 pulgadas con procesador Ryzen 7 y pantalla WUXGA.", nombre: "Lenovo IdeaPad Slim 5", precio: 899 },
    { id: 45, categoria: "portátiles", descripcion: "MacBook Air de 15 pulgadas con chip M3 y autonomía para todo el día.", nombre: "Apple MacBook Air 15", precio: 1599 },
    { id: 46, categoria: "ordenadores", descripcion: "Sobremesa compacto con procesador Ryzen 5 y SSD de 512 GB.", nombre: "HP Pavilion Desktop", precio: 749 },
    { id: 47, categoria: "ordenadores", descripcion: "Torre gaming con procesador Intel Core i5 y gráficos RTX 4060.", nombre: "MSI MAG Infinite S3", precio: 1399 },
    { id: 48, categoria: "ordenadores", descripcion: "Ordenador de sobremesa profesional con Intel Core i7 y 16 GB de RAM.", nombre: "Dell OptiPlex 7010", precio: 1199 },
    { id: 49, categoria: "ordenadores", descripcion: "Mini PC con procesador Ryzen 7, ideal para oficina y multimedia.", nombre: "ASUS ExpertCenter PN53", precio: 699 },
    { id: 50, categoria: "ordenadores", descripcion: "Todo en uno con pantalla Full HD de 23,8 pulgadas y teclado incluido.", nombre: "Lenovo IdeaCentre AIO 3", precio: 899 },
    { id: 51, categoria: "ordenadores", descripcion: "Torre gaming con Intel Core i7, 32 GB de RAM y gráficos RTX 4070.", nombre: "HP OMEN 25L", precio: 1899 },
    { id: 52, categoria: "ordenadores", descripcion: "Sobremesa versátil con Ryzen 5 y almacenamiento SSD de 1 TB.", nombre: "Acer Aspire TC", precio: 799 },
    { id: 53, categoria: "ordenadores", descripcion: "Ordenador compacto para tareas de oficina con Intel Core i5.", nombre: "Lenovo ThinkCentre neo 50q", precio: 649 },
    { id: 54, categoria: "ordenadores", descripcion: "Todo en uno con pantalla 4K de 27 pulgadas y procesador Apple M3.", nombre: "Apple iMac 24", precio: 1799 },
    { id: 55, categoria: "ordenadores", descripcion: "Torre gaming con Ryzen 7, refrigeración líquida y gráficos RTX 4070.", nombre: "Corsair Vengeance i7400", precio: 2199 },
    { id: 56, categoria: "ordenadores", descripcion: "Mini ordenador silencioso con procesador Intel Core i3 y SSD de 256 GB.", nombre: "Intel NUC 13 Pro", precio: 499 },
    { id: 57, categoria: "ordenadores", descripcion: "Sobremesa de alto rendimiento con Intel Core i9 para creación de contenido.", nombre: "Dell XPS Desktop", precio: 2299 },
    { id: 58, categoria: "ordenadores", descripcion: "Todo en uno de 24 pulgadas con procesador Ryzen 5 y cámara integrada.", nombre: "HP All-in-One 24", precio: 849 },
    { id: 59, categoria: "ordenadores", descripcion: "Torre gaming con Ryzen 5 y gráficos Radeon RX 7600.", nombre: "PC Gaming Nitro N50", precio: 1199 },
    { id: 60, categoria: "ordenadores", descripcion: "Estación de trabajo con Intel Core i7 y tarjeta gráfica profesional.", nombre: "HP Z2 Tower G9", precio: 1699 },
]

//---------------------------------------------------------------------------------
//Agregamos las variables creadas al HTML

//Seleccionamos el root del document
const root = document.querySelector(".root")

//Al root le metemos el main
root.appendChild(main)
//Al main le añadimos el h1
main.appendChild(h1)
//Agregamos texto al h1
h1.textContent = "Los mejores Móviles e Informática"

//Al section de productos le agregamos el h2
sectionProductos.appendChild(h2)
//Agregamos texto al h2
h2.textContent = "Productos"

//Para nombrar a los botones, los recorremos con un foreach y luegos los añadiremos en el div contenedor de los botones
botonesFiltrar.forEach(nombreBotones => {
    //creamos el boton en el documento, especificando la etiqueta, que será button
    const boton = document.createElement("button")
    //le añadimos el nombre, sacando del array de los botones el valor de la clave "nombre"
    boton.textContent = nombreBotones.nombre;
    //Y lo añadimos al div contenedor para los botones
    contenedorBotones.appendChild(boton)

    //EVENTO PARA LOS BOTONES
    boton.addEventListener("click", () => {
        //Le pasamos como parámetro el nombre del botón al que le estará haciendo click
        ordenarCategoria(nombreBotones.nombre)
    })
})

//Ponemos lo que tendrá el input
input.placeholder = "Buscar producto..."
//Añadimos el input al contenedor de los botones
contenedorBotones.appendChild(input)

//Para nombras las opciones del select, hacemos lo mismo que con los botones
opcionesSelect.forEach(nombreOpcion => {
    //creamos la opción en el documento
    const opcion = document.createElement("option")
    //Le rellenamos el nombre con el valor de la clave nombre del array de las opciones del Selec que tenemos creado
    opcion.textContent = nombreOpcion.nombre;
    //Añadimos las opciones al select
    select.appendChild(opcion)
    //Y el select al contenedor de los botones, que tiene los botones, el input y ahora el select
    contenedorBotones.appendChild(select)
})

//Y ahora añadimos el div de botones al root
main.appendChild(contenedorBotones)
//Y al section de los productos le agregamos los botones
sectionProductos.appendChild(contenedorBotones)
//Y agregamos al main el section de los productos, ya con el h2, y los botones
main.appendChild(sectionProductos)
//Y le agregamos al section de productos el contenedor que tendrá las tarjetas
sectionProductos.appendChild(contenedorTarjetas)


//---------------------------------------------------------------------------------
//FUNCIONES - RENDERIZADO

//Función para ordenar segun las opciones del select
function opcionesSelectRend() {

    //Renderizamos el HTML vacío, para ir rellenando
    contenedorTarjetas.innerHTML = "";

    //OPCIONES DEL SELECT

    //variable que mostrará el array de productos en función al estado. De primeras el estado será el original, pues es el que está inicilizado al principio
    let visibles = [...productosTienda];

    //Orden Menor a Mayor
    if (estado === "asc") {
        //Sort es un método inmutable, puesto que me devuelve otro array, en este caso ordenados de menor a mayor
        visibles.sort((a, b) => a.precio - b.precio);

        //Orden Mayor a Menor
        //Si el orden corresponde con "desc" el precio(número)
    } else if (estado === "desc") {
        visibles.sort((a, b) => b.precio - a.precio);
    }

    //Hacemos que la función de pintar, es decir, la que renderiza, renderice según la variable visibles que dará el array correspondiente de los productos
    pintar(visibles)
}

//Función para los botones por categoria
function ordenarCategoria(categoria) {

    let visibles = [...productosTienda];

    if (categoria === "Móviles") {
        visibles = productosTienda.filter(producto => producto.categoria === "móviles");
    } else if (categoria === "Tablets") {
        visibles = productosTienda.filter(producto => producto.categoria === "tablets");
    } else if (categoria === "Portátiles") {
        visibles = productosTienda.filter(producto => producto.categoria === "portátiles");
    } else if (categoria === "Ordenadores") {
        visibles = productosTienda.filter(producto => producto.categoria === "ordenadores");
    } else if (categoria === "Todos") {
        visibles = [...productosTienda];
    }

    pintar(visibles);


}
//Función para renderizar
//Vamos a crear las tarjetas con una función que las vaya "pintando"
function pintar(productos) {

    //Limpiamos el contenido que haya en el contenedor
    contenedorTarjetas.innerHTML = "";

    //Y ahora recorremos el array de los productos para hacer lar tarjetas
    productos.forEach(({ imagen, id, categoria, descripcion, nombre, precio }) => {
        //Creamos las tarjetas individuales (un div) y le ponemos una clase
        const tarjeta = document.createElement("div")
        tarjeta.classList.add("tarjeta")
        //Y pintamos el html con los datos
        tarjeta.innerHTML = `
            <img src="${imagen}" alt="${nombre}">
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


//---------------------------------------------------------------------------------
//EVENT LISTENER DE LOS BOTONES, SELECT E INPUT
//OPCIONES DEL SELECT

//Cuando la opción del select cambie, según el estado, se ejecutará la función de opciones del select que hemos creado y ordenará de una forma u otra
select.addEventListener("change", () => {
    if (select.value === opcionesSelect[0].nombre) {
        estado = "desc";
    } else if (select.value === opcionesSelect[1].nombre) {
        estado = "asc";
    } else if (select.value === opcionesSelect[2].nombre) {
        estado = "original"
    }

    opcionesSelectRend();
});

//BOTONES CATEGORIAS


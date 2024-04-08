let empleados=Array(
    {
        id:1,
        nombre:"maria jose toro",
        cargo:"contador",
        telefono:"3145594246",
       correo:"mariatoromuuuu@gmail.com",
       salario:5600000,
       contactoEmergencia:"3189898747",
       foto:"./img/empleada1.avif"
    },
    {
        id:2,
        nombre:"ana videnth cano",
        cargo:"supervisora",
        telefono:"3145594247",
       correo:"anacano@gmail.com",
       salario:5000000,
       contactoEmergencia:"3189898787",
       foto:"./img/empleada2.jpg"  
    },
    {
        id:3,
        nombre:"lina monsalve",
        cargo:"señora del alcantarillado",
        telefono:"3145594241",
       correo:"mariamonsalve@gmail.com",
       salario:1300000,
       contactoEmergencia:"3189895747",
       foto:"./img/aseo1.jpg"
    },
    {
        id:4,
        nombre:"camila oquendo",
        cargo:"vigilante",
        telefono:"3145594746",
       correo:"camilaoquendo@gmail.com",
       salario:1300000,
       contactoEmergencia:"3129898747",
       foto:"./img/vigilante.jpg"
    },
    {
        id:5,
        nombre:"katerine moreno",
        cargo:"recursos humanos",
        telefono:"3145504246",
       correo:"lindakaterine@gmail.com",
       salario:2000000,
       contactoEmergencia:"3209898747",
       foto:"./img/empleada3.jpg"
    },
    {
        id:6,
        nombre:"dayana machado",
        cargo:"aseadora",
        telefono:"3145594220",
       correo:"machadoglendy@gmail.com",
       salario:1300000,
       contactoEmergencia:"3189898780",
       foto:"./img/emple4.jpg"
    },
    {
        id:7,
        nombre:"andry escobar",
        cargo:"asesora de ventas",
        telefono:"3145594246",
       correo:"escobarandry@gmail.com",
       salario:1600000,
       contactoEmergencia:"3182098747",
       foto:"./img/emple5.jpg"
    },
    {
        id:8,
        nombre:"manuela mesa",
        cargo:"asesora",
        telefono:"3135594246",
       correo:"manuelamesa@gmail.com",
       salario:1300000,
       contactoEmergencia:"3189898713",
       foto:"./img/empleada6.jpg"
    },
    {
        id:9,
        nombre:"ana castañeda",
        cargo:"aseadora",
        telefono:"3141394246",
       correo:"castañedaana@gmail.com",
       salario:1300000,
       contactoEmergencia:"3189892447",
       foto:"./img/emplea8.jpg"
    },
    {
        id:10,
        nombre:"wendy sanchez",
        cargo:"repartidora",
        telefono:"3805594246",
       correo:"wendysanchez@gmail.com",
       salario:1300000,
       contactoEmergencia:"3188098747",
       foto:"./img/emple9.jpg"
    },
    {
        id:11,
        nombre:"mariany gaviria",
        cargo:"asesora",
        telefono:"3145824246",
       correo:"marianyg@gmail.com",
       salario:1300000,
       contactoEmergencia:"3189898907",
       foto:"./img/nueva.jpg"
    },
    {
        id:12,
        nombre:"mariangel mocoso",
        cargo:"call center",
        telefono:"3145594270",
       correo:"mocosomariangel@gmail.com",
       salario:1300000,
       contactoEmergencia:"3189894047",
       foto:"./img/emple11.jpg"
    },
    {
        id:13,
        nombre:"gabriela sarria",
        cargo:"call center",
        telefono:"3143094246",
       correo:"mariatoromuuuu@gmail.com",
       salario:5600000,
       contactoEmergencia:"3189898747",
       foto:"./img/emple12.jpg"
    },
    {
        id:14,
        nombre:"yuri alzate",
        cargo:"aseadora",
        telefono:"3145594246",
       correo:"yuri@gmail.com",
       salario:1300000,
       contactoEmergencia:"3189738747",
       foto:"./img/emple13.jpg"
    },
    {
    id:15,
    nombre:"rusbeli ortega",
    cargo:"marketing",
    telefono:"3505594246",
   correo:"rusbeli@gmail.com",
   salario:2000000,
   contactoEmergencia:"3189508747",
   foto:"./img/emplea14.jpg"
    },
    {
        id:16,
        nombre:"nallerly jaramillo",
        cargo:"auxiliar de produccion",
        telefono:"3145244246",
       correo:"nallerly@gmail.com",
       salario:1300000,
       contactoEmergencia:"3189468747",
       foto:"./img/emple15.jpg"
    },
    {
        id:17,
        nombre:"manuela orozco",
        cargo:"asesora de ventas",
        telefono:"3145594246",
       correo:"manuela@gmail.com",
       salario:1300000,
       contactoEmergencia:"3161898747",
       foto:"./img/emple16.jpg"
    },
    {
        id:18,
        nombre:"laura garcia",
        cargo:"gerente",
        telefono:"3147894246",
       correo:"mariatoromuuuu@gmail.com",
       salario:2000000,
       contactoEmergencia:"3189898747",
       foto:"./img/emple17.jpg"
    },
    {
        id:19,
        nombre:"brenda ortiz",
        cargo:"contadora",
        telefono:"3145570246",
       correo:"brendau@gmail.com",
       salario:5600000,
       contactoEmergencia:"3189898747",
       foto:"./img/emple18.jpg"
    },
    {
        id:20,
        nombre:"zharick sALGADO",
        cargo:"aseadora",
        telefono:"3145594346",
       correo:"shari@gmail.com",
       salario:1300000,
       contactoEmergencia:"3559898747",
       foto:"./img/emple20.jpg"
    }
)


//creando una referencia al contenedor de empleados
let contenedor=document.getElementById("contenedor")

//pasos para crear una lista dinamica de elementos

//1 debo recorer la base de datos del problema:
empleados.forEach(function(empleado){

    let columna=document.createElement("div")
    columna.classList.add("col")

    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","shadow")

    let foto=document.createElement("img")
    foto.classList.add("img-fluid","mx-auto","d-block")
    foto.src=empleado.foto

    let nombre=document.createElement("h3")
    nombre.textContent=empleado.nombre

    let cargo=document.createElement("h3")
    cargo.textContent=empleado.cargo

    let telefono=document.createElement("h3")
    telefono.textContent=empleado.telefono

    let correo=document.createElement("h3")
    correo.textContent=empleado.correo

    let salario=document.createElement("h3")
    salario.textContent=empleado.salario

    //se asocian las estructuras en orden logico
    
    
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(foto)
    columna.appendChild(tarjeta)
    contenedor.appendChild(columna)
    tarjeta.appendChild(cargo)
    tarjeta.appendChild(telefono)
    tarjeta.appendChild(correo)
    tarjeta.appendChild(salario)

})
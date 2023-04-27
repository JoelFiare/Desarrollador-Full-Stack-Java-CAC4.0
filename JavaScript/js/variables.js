//tipos de variables en javascript

//crear las variables necesarias para los datos de una persona
let nombre = "Juan";
let apellido = "Perez";

//crear variables para los datos de una persona
let edad = 28;
let peso = 75;
let altura = 1.80;
let esCasado = true;
let fechaNacimiento = new Date(1988, 6, 28);
let direccion = Math.random() * 100;

//crear variables objeto para los datos de una persona
let persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 28,
    peso: 75,
    altura: 1.80,
    esCasado: true
}

//función hablar de una persona
function hablar(persona){
}

//funciones
alert(persona.nombre + " " + persona.apellido); //mostrar informacion en una ventana emergente.
console.log(persona.nombre + " " + persona.apellido); //mostrar informacion en la consola del navegador.
prompt(persona.nombre + " " + persona.apellido); //mostrar una ventana emergente con un input.
confirm(persona.nombre + " " + persona.apellido); //mostrar una ventana emergente con un boton.


const edades = [37,26,41,21,27,23,44];

//buscar el mayor de una lista de edades
let mayor = edades[0];
let pos = 0;

for (let i = 1; i < edades.length; i++) {
    if (edades[i] > mayor) {
      mayor = edades[i];
      pos = i;
    }
}
console.log(mayor);
console.log(pos);
document.getElementById("resultado").innerHTML = mayor;

//sumatoria de todos los elementos de una lista

let suma = 0;   
for (let i = 0; i < edades.length; i++) {
    suma += edades[i];
}
console.log(suma);
console.log(edades.reduce((a,b) => a+b, 0));

//promedio de edades
function funcionPromedios(suma, cantidad) {
    if (cantidad === 0) {
        return 0;
    }
    return suma / cantidad;
}

const promedio = funcionPromedios(suma, edades.length);

const alumnos = [
    {
        id:1,
        dni:2345,
    },
    {
        id:2,
        dni:6758,
    },
];

//calcular la suma de los dni de un array de objetos
const sumaDni = alumnos.reduce((prev,current) => prev + current.dni, 0);
console.log(sumaDni, funcionPromedios(sumaDni, alumnos.length));


//quiero el numero 5
const elementos = [1,2,3,4,5,6,7,8,9,10];
let piso = -1;

for (let i = 0; i < elementos.length; i++) {
    if (elementos[i] === 5) {
        piso = i;
        break;
    }
}

//ingresar un valor 
const valor = +prompt("ingrese un valor");
const idx = edades.findIndex(x => x === valor);
if (idx > -1) {
    console.log("esta en", idx);
} else {
console.log("no esta");
}


const valores = [
    {id:37, valor:1200},
    {id:26, valor:2400},
    {id:25, valor:3400},
];
const idxx = valores.findIndex(x => x.id === valor);
if(idxx > -1) {
    console.log("esta en", idxx);
}


//convertir estos elementos usando map
const valores2 = edades.map(x => x.valor);
console.log(valores2);


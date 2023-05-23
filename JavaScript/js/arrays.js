const edades = [18,21,55,75,36,55,85,21,10,5,36];

//busquen al mayor
//indice mayor
let indiceMayor;
let mayor;

for(let idx=0;idx < edades.length;idx++) {
    if(mayor === undefined || edades[idx] > mayor) {
        mayor = edades[idx];
        indiceMayor = idx;
    }
}

//busquen al menor

let menor;
//indice del menor
let indiceMenor;

for(let idx=0;idx < edades.length;idx++) {
    if(menor === undefined || edades[idx] < menor) {
        menor = edades[idx];
        indiceMenor = idx;
    }
}
//si hay mas de un  mayor o menor poner dentro de un array los mayores/menor

let mayoresMenores = [];

for(let idx=0;idx < edades.length;idx++) {
    if(edades[idx] === mayor || edades[idx] === menor) {
        mayoresMenores.push(edades[idx]);
    }
}

//sumar las edades
//acumulador
let acumulador=0;

//contar cantidad de 55
let cantidadDe55;

//0 -> hasta el final
for(let idx=0;idx < edades.length;idx++) {
    acumulador = acumulador +  edades[idx];
}

console.log(acumulador);
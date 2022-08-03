/* 
console.log("PRIMERO")
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

console.log("SEGUNDO")
for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

console.log("WHILE")
let i=11;
while (i > 2) {
   i--;
   console.log("El valor de i es: " + i);
}

console.log("D0 WHILE")
let result = 0;
let x = 11;
do {
  x = x - 1;
  result = result - x;
  console.log("El valor de i es: " + x);
} while (x > 2);  */

// Suma de numeros
/* 
console.log("SUMA DE NUMEROS")
while (true){
    let valor = prompt("cuanto es 2+2=");
    if(valor == 4){
      alert(`Felicitaciones 2 + 2 = ${valor}`);
      break;
    }else{
      alert(`La respuesta no es ${valor}, vulve a intentarlo`);
    }
}
 */
//PRIMER ELEMNTO DE UN ARRAY
/* console.log("Opcion 1")
const array = ["a", "b", "c", "d", "e"];

const primerElemento = ( (array ) => {
    console.log(array[0]);
});
primerElemento(array); 

console.log("Opcion 2")
const primerElemento2 = ( (array2 ) => {
    let fElement = array2[Symbol.iterator]();
    console.log(fElement.next().value);
});
primerElemento2(array); */

//QUE IMPRIMA TODOS EL ARRAY

/* console.log("Opcion 1");
const allArrays = (element => {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        console.log(element);
    }
})
allArrays(array)

console.log("Opcion 2");
const allArrays2 = (element => {
    const n = array.forEach(element => console.log(element));
})
allArrays2(array)

console.log("Opcion 3");
const allArrays3 = (element => {
    const n = array.map(element => console.log(element));
})
allArrays2(array) */

//QUE IMPRIMA UN OBJETO

const obj = {
    dia: "domingo", 
    mes: "agosto", 
    ano: 1988
}

console.log("Opcion 1")
function Mostrar(obj) {
    for (const key in obj) {
        console.log(`${obj[key]}`)
    }
}
Mostrar(obj);






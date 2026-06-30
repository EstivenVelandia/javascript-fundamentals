<<<<<<< HEAD
// Ejercicio1.js (Cálculo Geométrico)
//calcula y muestra las propiedades geométricas de una figura, en este caso, un rectángulo.

let figura = "rectangulo";

switch (figura) {

    case "triangulo":

let a = 5;
let b = 4;
let c = 6;
let h = 3;

    console.log("Figura: Triángulo");
    console.log("Perímetro:", a + b + c);
    console.log("Área:", (b * h) / 2);

break;

case "rectangulo":

    let largo = 8;
    let ancho = 4;

console.log("Figura: Rectángulo");
console.log("Perímetro:", 2 * (largo + ancho));
console.log("Área:", largo * ancho);

break;

case "cuadrado":

let lado = 5;

        console.log("Figura: Cuadrado");
        console.log("Perímetro:", lado * 4);
        console.log("Área:", lado * lado);

break;

case "circulo":

        let radio = 3;

console.log("Figura: Círculo");
console.log("Perímetro:", 2 * Math.PI * radio);
console.log("Área:", Math.PI * radio * radio);

break;

default:
    console.log("Figura no válida");
=======
// Ejercicio1.js (Cálculo Geométrico)
//calcula y muestra las propiedades geométricas de una figura, en este caso, un rectángulo.

let figura = "rectangulo";

switch (figura) {

    case "triangulo":

let a = 5;
let b = 4;
let c = 6;
let h = 3;

    console.log("Figura: Triángulo");
    console.log("Perímetro:", a + b + c);
    console.log("Área:", (b * h) / 2);

break;

case "rectangulo":

    let largo = 8;
    let ancho = 4;

console.log("Figura: Rectángulo");
console.log("Perímetro:", 2 * (largo + ancho));
console.log("Área:", largo * ancho);

break;

case "cuadrado":

let lado = 5;

        console.log("Figura: Cuadrado");
        console.log("Perímetro:", lado * 4);
        console.log("Área:", lado * lado);

break;

case "circulo":

        let radio = 3;

console.log("Figura: Círculo");
console.log("Perímetro:", 2 * Math.PI * radio);
console.log("Área:", Math.PI * radio * radio);

break;

default:
    console.log("Figura no válida");
>>>>>>> f464fa4f6d217d7b42e333de9f0edf0349b9bf56
}
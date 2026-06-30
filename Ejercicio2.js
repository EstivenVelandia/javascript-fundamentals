<<<<<<< HEAD
// Ejercicio2.js (Estadísticas de Edades)
//Procesa un grupo o array de edades para realizar un análisis demográfico y estadístico básico.

const edades = [15, 20, 35, 60, 75, 12, 18, 45, 30, 90];

let menores = 0;
let mayores = 0;
let adultosMayores = 0;

let edadMinima = edades[0];
let edadMaxima = edades[0];

let suma = 0;

edades.forEach(edad => {

if (edad < 18) {
        menores++;
} else {
        mayores++;
}

    if (edad >= 60) {
        adultosMayores++;
}

    if (edad < edadMinima) {
        edadMinima = edad;
}

    if (edad > edadMaxima) {
        edadMaxima = edad;
}

suma += edad;
});

let promedio = suma / edades.length;
console.log("Menores de edad:", menores);
console.log("Mayores de edad:", mayores);
console.log("Adultos mayores:", adultosMayores);
console.log("Edad más baja:", edadMinima);
console.log("Edad más alta:", edadMaxima);
=======
// Ejercicio2.js (Estadísticas de Edades)
//Procesa un grupo o array de edades para realizar un análisis demográfico y estadístico básico.

const edades = [15, 20, 35, 60, 75, 12, 18, 45, 30, 90];

let menores = 0;
let mayores = 0;
let adultosMayores = 0;

let edadMinima = edades[0];
let edadMaxima = edades[0];

let suma = 0;

edades.forEach(edad => {

if (edad < 18) {
        menores++;
} else {
        mayores++;
}

    if (edad >= 60) {
        adultosMayores++;
}

    if (edad < edadMinima) {
        edadMinima = edad;
}

    if (edad > edadMaxima) {
        edadMaxima = edad;
}

suma += edad;
});

let promedio = suma / edades.length;
console.log("Menores de edad:", menores);
console.log("Mayores de edad:", mayores);
console.log("Adultos mayores:", adultosMayores);
console.log("Edad más baja:", edadMinima);
console.log("Edad más alta:", edadMaxima);
>>>>>>> f464fa4f6d217d7b42e333de9f0edf0349b9bf56
console.log("Promedio:", promedio);
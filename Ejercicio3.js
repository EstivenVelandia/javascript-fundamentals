<<<<<<< HEAD
// Ejercicio3.js (Ordenamiento y Mezcla de Vectores / Arrays)
//¿Qué hace? Combina dos listas de números (vectores) que ya vienen ordenados y los fusiona en una sola lista final de forma estrictamente ascendente.

const vector1 = [1, 3, 6, 9, 17];
const vector2 = [2, 4, 10, 17];

const mezcla = vector1.concat(vector2);

mezcla.sort((a, b) => a - b);

console.log("Vector 1:", vector1);
console.log("Vector 2:", vector2);
=======
// Ejercicio3.js (Ordenamiento y Mezcla de Vectores / Arrays)
//¿Qué hace? Combina dos listas de números (vectores) que ya vienen ordenados y los fusiona en una sola lista final de forma estrictamente ascendente.

const vector1 = [1, 3, 6, 9, 17];
const vector2 = [2, 4, 10, 17];

const mezcla = vector1.concat(vector2);

mezcla.sort((a, b) => a - b);

console.log("Vector 1:", vector1);
console.log("Vector 2:", vector2);
>>>>>>> f464fa4f6d217d7b42e333de9f0edf0349b9bf56
console.log("Mezcla ordenada:", mezcla);
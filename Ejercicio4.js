<<<<<<< HEAD
// Ejercicio4.js (Estructura de Datos / Objeto Persona)
//Almacena, organiza y muestra los datos personales y de perfil de un usuario.

const personas = [

    {
nombre: "Juan",
 cedula: "12345",
fechaNacimiento: "2000-05-10",
correo: "juan@gmail.com",
ciudadResidencia: "Bogotá",
ciudadOrigen: "Tunja",

        canciones: [
            {
                artista: "Shakira",
            titulo: "Antología"
            },
            {
             artista: "Soda Stereo",
                titulo: "De Música Ligera"
            },
            {
            artista: "Morat",
                titulo: "Besos en Guerra"
            }
        ]
    },

    {
    nombre: "Ana",
    cedula: "98765",
    fechaNacimiento: "1998-03-20",
    correo: "ana@gmail.com",
    ciudadResidencia: "Medellín",
    ciudadOrigen: "Cali",

    canciones: [
            {
    artista: "Adele",
                titulo: "Hello"
            },
            {
         artista: "Coldplay",
                titulo: "Yellow"
            },
            {
        artista: "Bruno Mars",
                titulo: "Grenade"
            }
        ]
    }
];

function mostrarPersona(posicion) {

if (posicion >= 0 && posicion < personas.length) {

        const persona = personas[posicion];

    console.log("Nombre:", persona.nombre);
    console.log("Cédula:", persona.cedula);
    console.log("Fecha Nacimiento:", persona.fechaNacimiento);
    console.log("Correo:", persona.correo);
    console.log("Ciudad Residencia:", persona.ciudadResidencia);
    console.log("Ciudad Origen:", persona.ciudadOrigen);

        console.log("Canciones favoritas:");

persona.canciones.forEach(cancion => {
            console.log(
    cancion.artista + " - " + cancion.titulo
            );
        });

    } else {
console.log("Posición no válida");
    }
}

=======
// Ejercicio4.js (Estructura de Datos / Objeto Persona)
//Almacena, organiza y muestra los datos personales y de perfil de un usuario.

const personas = [

    {
nombre: "Juan",
 cedula: "12345",
fechaNacimiento: "2000-05-10",
correo: "juan@gmail.com",
ciudadResidencia: "Bogotá",
ciudadOrigen: "Tunja",

        canciones: [
            {
                artista: "Shakira",
            titulo: "Antología"
            },
            {
             artista: "Soda Stereo",
                titulo: "De Música Ligera"
            },
            {
            artista: "Morat",
                titulo: "Besos en Guerra"
            }
        ]
    },

    {
    nombre: "Ana",
    cedula: "98765",
    fechaNacimiento: "1998-03-20",
    correo: "ana@gmail.com",
    ciudadResidencia: "Medellín",
    ciudadOrigen: "Cali",

    canciones: [
            {
    artista: "Adele",
                titulo: "Hello"
            },
            {
         artista: "Coldplay",
                titulo: "Yellow"
            },
            {
        artista: "Bruno Mars",
                titulo: "Grenade"
            }
        ]
    }
];

function mostrarPersona(posicion) {

if (posicion >= 0 && posicion < personas.length) {

        const persona = personas[posicion];

    console.log("Nombre:", persona.nombre);
    console.log("Cédula:", persona.cedula);
    console.log("Fecha Nacimiento:", persona.fechaNacimiento);
    console.log("Correo:", persona.correo);
    console.log("Ciudad Residencia:", persona.ciudadResidencia);
    console.log("Ciudad Origen:", persona.ciudadOrigen);

        console.log("Canciones favoritas:");

persona.canciones.forEach(cancion => {
            console.log(
    cancion.artista + " - " + cancion.titulo
            );
        });

    } else {
console.log("Posición no válida");
    }
}

>>>>>>> f464fa4f6d217d7b42e333de9f0edf0349b9bf56
mostrarPersona(0);
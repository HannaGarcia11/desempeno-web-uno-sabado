let nombreHeroe = prompt("Ingrese el nombre de su heroe");
let puntosSalud = 50;
let puntosExperiencia = 0;

function mostrarEstadisticas() {
    console.log("Héroe:" + nombreHeroe, "Salud:" + puntosSalud, "Experiencia:" + puntosExperiencia);
}

//mostrarEstadisticas();

const recibirDanio = function(cantidadDanio) {
    puntosSalud -= cantidadDanio; 
    if(puntosSalud <= 0) {
        console.log("¡Has sido derrotado!");
        console.log("Recibiste", + cantidadDanio + "de daño." + "Salud restante: " + puntosSalud);
    }
}

const ganarExperiencia = (cantidadExp) => {
    puntosExperiencia += cantidadExp; 
    console.log("¡Ganaste", + cantidadExp + "de experiencia!." + "XP total: " + puntosExperiencia);
}

recibirDanio(100);
ganarExperiencia(15);
mostrarEstadisticas();

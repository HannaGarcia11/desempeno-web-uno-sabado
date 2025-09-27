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

//recibirDanio(100);
//ganarExperiencia(15);
//mostrarEstadisticas();

const simularBatalla = () => {
    for(let i = 1; i <= 3; i++) {
        console.log("Turno " + i + ":");
        recibirDanio(25);
    if (puntosSalud <= 0) {
        console.log("La batalla terminó en el turno " + i);
        return;
    }
}
    if (puntosSalud > 0) {
        ganarExperiencia(100);
    }
};

function diagnosticoHeroe() {
    if(puntosSalud > 70) {
        console.log("Tu salud es excelente.");
    } else if(puntosSalud > 40) {
        console.log("Estás herido, considera usar una pocion.");
    } else if(puntosSalud > 0) {
        console.log("¡Peligro! Salud crítica.");
    } else {
        console.log("Has sido derrotado.");
    }

    switch(puntosExperiencia) {
        case 10:
            console.log("Eres un novato.");
            break;
        case 50:
            console.log("Te estás convirtiendo en un guerrero respetable.");
            break;
        case 100:
            console.log("Eres una leyenda viviente.");
            break;
    }   
}

simularBatalla();
diagnosticoHeroe();







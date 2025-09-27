let nombreHeroe = prompt("Ingrese el nombre de su heroe");
let puntosSalud = 50;
let puntosExperiencia = 0;

function mostrarEstadisticas() {
    console.log("Héroe:" + nombreHeroe, "Salud:" + puntosSalud, "Experiencia:" + puntosExperiencia);
}

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

function iniciarAventura () {
    while(true){
        let opcion = prompt("Menú de Aventura:\n1 - Luchar contra un monstruo\n2 - Tomar poción de salud\n3 - Completar misión (ganar XP)\n4 - Ver diagnóstico del Héroe\n5 - Mostrar Estadísticas\n6 - Retirarse de la aventura");
        switch(opcion) {
            case "1":
                simularBatalla();
                break;
            case "2":
                puntoRestaurar = parseInt(prompt("¿Cuátos puntos de salud deseas restaurar?"));
                puntosSalud += puntoRestaurar;
                break;
            case "3":
                xpGanada = parseInt(prompt("¿Cuánta experiencia ganada?"));
                ganarExperiencia(xpGanada);
                break;
            case "4":
                diagnosticoHeroe();
                break;
            case "5":
                mostrarEstadisticas();
                break;
            case "6":
                console.log("Has decidido retirarte de la aventura. ¡Hasta la próxima!");
                return;
            default:
                console.log("Opción no válida.");
        }
    }
}
iniciarAventura();







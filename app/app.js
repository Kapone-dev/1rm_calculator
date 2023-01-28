const promedy = require("./modules/promedio");
const repeticiones = require("./modules/repeticiones");

const WEIGHT = 100; // Peso utilizado
const REPS = 1; // Repeticiones hechas

const oneRM = promedy(WEIGHT, REPS);

console.log(`El 1RM de ${WEIGHT}kg con ${REPS} repeticiones es ${oneRM.toFixed(2)}kg`);

const rm12 = repeticiones(oneRM);

if (Array.isArray(rm12)) {
    console.log("Tabla de 12RM");
    rm12.forEach((rm, index) => {
        console.log(`${index + 1}RM: ${rm}kg`);
    });
}
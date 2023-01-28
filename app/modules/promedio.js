const epley = (weight, reps) => {
    return weight * (1 + reps / 30.0);
}

const brzycki = (weight, reps) => {
    return weight * (36.0 / (37.0 - reps));
}

const lombardi = (weight, reps) => {
    return weight * reps ** 0.10;
}

const mayhew = (weight, reps) => {
    return 100 * weight / (52.2 + 41.9 * Math.E ** (-0.055 * reps));
}

const oconner = (weight, reps) => {
    return weight * (1 + reps / 40.0);
}

/**
 * 
 * @param {Number} weight El peso Utilizado
 * @param {Number} reps La cantidad de repeticiones hechas.
 * @returns Number El prmedio de los 5 métodos de cálculo de 1RM
 */
module.exports = (weight, reps) => {
    if (isNaN(weight) || isNaN(reps)) {
        throw new TypeError('weight and reps must be numbers')
    } else {
        const promedy = (epley(weight, reps) + brzycki(weight, reps) + lombardi(weight, reps) + mayhew(weight, reps) + oconner(weight, reps)) / 5.0;
        return promedy;
    }
}
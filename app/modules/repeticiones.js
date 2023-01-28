/**
 * Segun el 1rm entregado haremos una tabla de hasta un 12rm con el 1rm
 * @param {Number} oneRM El 1RM calculado
 * @returns {Array} Un array con los 12rm
 *  
 */

module.exports = (oneRM) => {
    if (isNaN(oneRM)) {
        throw new TypeError('oneRM must be a number')
    } else {
        const rm12 = [];
        const formulas = [
            1, // 100%
            0.95, // 95%
            0.90, // 90%
            0.86, // 86%
            0.82, // 82%
            0.78, // 78%
            0.74, // 74%
            0.70, // 70%
            0.65, // 65%
            0.61, // 61%
            0.57, // 57%
            0.53 // 53%
        ];
        
        formulas.forEach((formula) => {
            rm12.push(Math.round(oneRM * formula));
        });

        return rm12;
    }
}
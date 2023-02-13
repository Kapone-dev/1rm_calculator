function changeResult(weight, reps) {

    const maximumWeight = weight * (1 + reps / 30.0);

    const title = `<h2>1RM: ${maximumWeight.toFixed(2)}kg</h2>`;
    let table = "<table> ";

    // Procedemos a crear la tabla y guardarla en una string.
    for (let i = 1; i > 0.09; i -= 0.05) {
        const weightPercent = maximumWeight * i;
        table += `<tr><td>${(i * 100).toFixed(0)}%</td><td>${weightPercent.toFixed(1)}kg</td></tr>`;
    }

    return `${title}\n${table} </table>`;
}

function showResults() {
    const weight = document.getElementById('weight').value;
    const reps = document.getElementById('reps').value;


    document.getElementById('result').innerHTML = changeResult(weight, reps);
}
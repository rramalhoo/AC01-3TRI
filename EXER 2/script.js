function sortearNumeros() {
    const resultadoElement = document.getElementById('resultado');
    const numerosSorteados = new Set();
    let resultadoString = "";

    while (numerosSorteados.size < 6) {
        const numero = Math.floor(Math.random() * 60) + 1;
        numerosSorteados.add(numero);
    }

    let primeiro = true;
    for (const numero of numerosSorteados) {
        if (!primeiro) {
            resultadoString += ", ";
        }
        resultadoString += numero;
        primeiro = false;
    }

    resultadoElement.textContent = "Números sorteados: " + resultadoString;
}
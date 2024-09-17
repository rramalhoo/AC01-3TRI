document.addEventListener("DOMContentLoaded", function() {
    const botaoSortear = document.getElementById("sortearNumeros");
    const numerosSorteadosElement = document.getElementById("numerosSorteados");

    function sortearNumerosMegaSena() {
        let numerosSorteados = [];
        while (numerosSorteados.length < 6) {
            let numeroAleatorio = Math.floor(Math.random() * 60) + 1;
            if (!numerosSorteados.includes(numeroAleatorio)) {
                numerosSorteados.push(numeroAleatorio);
            }
        }
        return numerosSorteados;
    }

    botaoSortear.addEventListener("click", function() {
        let numeros = sortearNumerosMegaSena();
        numerosSorteadosElement.textContent = numeros.join(" - ");
    });
});

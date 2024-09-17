let placarJogador1 = 0;
let placarJogador2 = 0;
let maxRodadas = 5;
let jogoContraRobo = false;

document.addEventListener("DOMContentLoaded", function() {
    const placarElement = document.getElementById("placar");
    const mensagemElement = document.getElementById("mensagem");
    const botaoNovaRodada = document.getElementById("novaRodada");

    document.getElementById("jogarDoisJogadores").addEventListener("click", function() {
        document.getElementById("jogo").style.display = "block";
        jogoContraRobo = false;
        resetarPlacar();
    });

    document.getElementById("jogarContraRobo").addEventListener("click", function() {
        document.getElementById("jogo").style.display = "block";
        jogoContraRobo = true;
        resetarPlacar();
    });

    botaoNovaRodada.addEventListener("click", function() {
        if (placarJogador1 < maxRodadas && placarJogador2 < maxRodadas) {
            jogarRodada();
        }
    });

    function jogarRodada() {
        let numeroJogador1 = Math.floor(Math.random() * 10) + 1;
        let numeroJogador2 = jogoContraRobo ? Math.floor(Math.random() * 10) + 1 : prompt("Jogador 2, escolha um número entre 1 e 10");

        if (numeroJogador2 === null) return;

        mensagemElement.textContent = `Jogador 1: ${numeroJogador1}. Jogador 2: ${numeroJogador2}.`;

        if (numeroJogador1 > numeroJogador2) {
            placarJogador1++;
            mensagemElement.textContent += " Jogador 1 ganhou!";
        } else if (numeroJogador2 > numeroJogador1) {
            placarJogador2++;
            mensagemElement.textContent += " Jogador 2 ganhou!";
        } else {
            mensagemElement.textContent += " Empate!";
        }

        placarElement.textContent = `Jogador 1: ${placarJogador1} | Jogador 2: ${placarJogador2}`;

        if (placarJogador1 === maxRodadas) {
            mensagemElement.textContent = "Jogador 1 ganhou!";
            botaoNovaRodada.disabled = true;
        } else if (placarJogador2 === maxRodadas) {
            mensagemElement.textContent = "Jogador 2 ganhou!";
            botaoNovaRodada.disabled = true;
        }
    }

    function resetarPlacar() {
        placarJogador1 = 0;
        placarJogador2 = 0;
        placarElement.textContent = `Jogador 1: ${placarJogador1} | Jogador 2: ${placarJogador2}`;
        mensagemElement.textContent = "";
        botaoNovaRodada.disabled = false;
    }
});

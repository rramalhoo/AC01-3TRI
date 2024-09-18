let placarJogador1 = 0;
let placarJogador2 = 0;
const maxRodadas = 5;
let jogoContraRobo = false;

const placarElement = document.getElementById("placar");
const mensagemElement = document.getElementById("mensagem");
const botaoNovaRodada = document.getElementById("novaRodada");
const botaoDoisJogadores = document.getElementById("jogarDoisJogadores");
const botaoContraRobo = document.getElementById("jogarContraRobo");

botaoDoisJogadores.onclick = function() {
    jogoContraRobo = false;
    resetarPlacar();
};

botaoContraRobo.onclick = function() {
    jogoContraRobo = true;
    resetarPlacar();
};

botaoNovaRodada.onclick = function() {
    if (placarJogador1 < maxRodadas && placarJogador2 < maxRodadas) {
        jogarRodada();
    }
};

function jogarRodada() {
    let numeroJogador1 = Math.floor(Math.random() * 10) + 1;
    let numeroJogador2;

    if (jogoContraRobo) {
        numeroJogador2 = Math.floor(Math.random() * 10) + 1;
    } else {
        do {
            numeroJogador2 = parseInt(prompt("Jogador 2, escolha um número entre 1 e 10"), 10);
        } while (isNaN(numeroJogador2) || numeroJogador2 < 1 || numeroJogador2 > 10);
    }

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
        mensagemElement.textContent = "Jogador 1 ganhou o jogo!";
        botaoNovaRodada.disabled = true;
    } else if (placarJogador2 === maxRodadas) {
        mensagemElement.textContent = "Jogador 2 ganhou o jogo!";
        botaoNovaRodada.disabled = true;
    } else {
        botaoNovaRodada.disabled = false;
    }
}

function resetarPlacar() {
    placarJogador1 = 0;
    placarJogador2 = 0;
    placarElement.textContent = `Jogador 1: ${placarJogador1} | Jogador 2: ${placarJogador2}`;
    mensagemElement.textContent = "";
    botaoNovaRodada.disabled = false;
}

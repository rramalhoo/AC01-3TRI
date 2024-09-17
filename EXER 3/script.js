function calcularValor() {
    const entradaData = document.getElementById('entradaData').value;
    const entradaHora = document.getElementById('entradaHora').value;
    const saidaData = document.getElementById('saidaData').value;
    const saidaHora = document.getElementById('saidaHora').value;

    if (!entradaData || !entradaHora || !saidaData || !saidaHora) {
        document.getElementById('resultado').textContent = 'Por favor, preencha todos os campos.';
        return;
    }

    const entrada = new Date(`${entradaData}T${entradaHora}`);
    const saida = new Date(`${saidaData}T${saidaHora}`);

    const diferencaHoras = (saida - entrada) / (1000 * 60 * 60); // em horas
    if (diferencaHoras < 0) {
        document.getElementById('resultado').textContent = 'A data e hora de saída devem ser posteriores à data e hora de entrada.';
        return;
    }

    const valorPorHora = 15; // R$15,00 por hora
    const valorTotal = diferencaHoras * valorPorHora;

    document.getElementById('resultado').textContent = `Tempo de estacionamento: ${diferencaHoras.toFixed(2)} horas. Valor a pagar: R$${valorTotal.toFixed(2)}`;
}

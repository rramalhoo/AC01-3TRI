function calcularValor() {
    const entradaData = document.getElementById('entradaData').value;
    const entradaHora = document.getElementById('entradaHora').value;
    const saidaData = document.getElementById('saidaData').value;
    const saidaHora = document.getElementById('saidaHora').value;

    if (!entradaData || !entradaHora || !saidaData || !saidaHora) {
        document.getElementById('resultado').textContent = 'Por favor, preencha todos os campos.';
    } else {
        const diaEntrada = entradaData.substring(0, 2);
        const mesEntrada = entradaData.substring(3, 5);
        const anoEntrada = entradaData.substring(6, 10);

        const diaSaida = saidaData.substring(0, 2);
        const mesSaida = saidaData.substring(3, 5);
        const anoSaida = saidaData.substring(6, 10);

        const entrada = new Date(`${anoEntrada}-${mesEntrada}-${diaEntrada}T${entradaHora}`);
        const saida = new Date(`${anoSaida}-${mesSaida}-${diaSaida}T${saidaHora}`);

        if (isNaN(entrada.getTime()) || isNaN(saida.getTime())) {
            document.getElementById('resultado').textContent = 'Data ou hora inválida.';
        } else {
            const diferencaHoras = (saida - entrada) / (1000 * 60 * 60);
            
            if (diferencaHoras < 0) {
                document.getElementById('resultado').textContent = 'A data e hora de saída devem ser posteriores à data e hora de entrada.';
            } else {
                const valorPorHora = 15;
                const valorTotal = diferencaHoras * valorPorHora;
                document.getElementById('resultado').textContent = `Tempo de estacionamento: ${diferencaHoras.toFixed(2)} horas. Valor a pagar: R$${valorTotal.toFixed(2)}`;
            }
        }
    }
}

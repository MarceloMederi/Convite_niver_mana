// --- Contagem Regressiva para a Festa ---

// Defina a data e hora do evento. 
// O formato é Mês Dia, Ano Hora:Minuto:Segundo. 
// ATENÇÃO: Você precisa ajustar o ANO (ex: 2025)!
const dataEvento = new Date("November 29, 2025 13:00:00").getTime(); 

// Atualiza a contagem a cada 1 segundo (1000 milissegundos)
const x = setInterval(function() {

    // Pega a data e hora de agora
    const agora = new Date().getTime();

    // Calcula a distância (tempo que falta)
    const distancia = dataEvento - agora;

    // Cálculos de tempo (dias, horas, minutos, segundos)
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    // Exibe o resultado no elemento HTML com o id "contagem-regressiva"
    document.getElementById("contagem-regressiva").innerHTML = 
        "Faltam: " + dias + "d " + horas + "h " + minutos + "m " + segundos + "s ";

    // Quando a contagem terminar (distância < 0)
    if (distancia < 0) {
        clearInterval(x); // Para o contador
        document.getElementById("contagem-regressiva").innerHTML = "**A FESTA É HOJE!** Vamos celebrar!";
    }
}, 1000);
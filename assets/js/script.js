// --- FUNÇÃO DE CONTROLE DO CONVITE ---
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Elementos do DOM
    const btnAbrir = document.getElementById('btn-abrir-convite');
    const telaAbertura = document.getElementById('tela-abertura');
    const conteudoPrincipal = document.getElementById('conteudo-principal');
    const musica = document.getElementById('musica-convite');

    // 2. Lógica para Abrir, Tocar e Revelar
    btnAbrir.addEventListener('click', () => {
        // Tenta tocar a música (exige interação do usuário)
        musica.play().catch(error => {
            console.warn("Falha ao tentar tocar a música: o navegador pode ter bloqueado.", error);
        });

        // Oculta a tela de abertura com transição
        telaAbertura.style.opacity = '0';
        
        // Remove a tela de abertura após a transição de opacidade (0.5s)
        setTimeout(() => {
            telaAbertura.classList.add('hidden');
        }, 500); 

        // Mostra o conteúdo principal.
        // O CONTEÚDO AGORA APARECE SUAVEMENTE (FADE-IN) devido ao:
        // 1. Removendo a classe 'hidden' (que tem display:none).
        // 2. Definindo a opacidade para 1.
        // O CSS (.convite-container) cuida da transição de 1.5s.
        conteudoPrincipal.classList.remove('hidden');
        conteudoPrincipal.style.opacity = '1'; 
    });


    // --- 3. Lógica da Contagem Regressiva ---
    
    // Define a data e hora do evento. 
    // ATENÇÃO: Ajuste o ANO conforme necessário (ex: 2025)!
    const dataEvento = new Date("November 29, 2025 13:00:00").getTime(); 
    const contagemElemento = document.getElementById("contagem-regressiva");

    const x = setInterval(function() {
        const agora = new Date().getTime();
        const distancia = dataEvento - agora;

        // Cálculos de tempo
        const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

        if (distancia > 0) {
            contagemElemento.innerHTML = 
                "Faltam: " + dias + "d " + horas + "h " + minutos + "m " + segundos + "s ";
        } else {
            clearInterval(x); // Para o contador
            contagemElemento.innerHTML = "**A FESTA É HOJE!** Vamos celebrar!";
        }
    }, 1000);

});
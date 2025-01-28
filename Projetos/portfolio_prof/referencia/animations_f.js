// Registra o plugin ScrollTrigger no GSAP, necessário para criar animações acionadas pelo scroll da página.
gsap.registerPlugin(ScrollTrigger); 

// Animação para o elemento com o ID "hero".
gsap.from("#hero", { 
    // Define que a opacidade inicial do elemento será 0 (totalmente transparente).
    opacity: 0, 
    // O elemento começará deslocado 500px para a esquerda fora da tela.
    x: -500, 
    // A animação levará 1 segundo para ser concluída.
    duration: 1, 
    // Define a suavização da animação (começa rápida e desacelera suavemente no final).
    ease: "power1.out", 
});

// Animação para o conteúdo dentro do elemento com o ID "about" (classe .about_content).
gsap.from("#about .about_content", { 
    // Configurações do ScrollTrigger, que controla a animação com base no scroll da página.
    scrollTrigger: {
        // Define o elemento que será monitorado para ativar a animação.
        trigger: "#about", 
        // Define quando a animação será ativada:
        // "start" indica que ela começará quando o topo de "#about" atingir 80% da altura visível da janela.
        start: "top 80%", 
    },
    // Define que a opacidade inicial do elemento será 0 (totalmente transparente).
    opacity: 0, 
    // O elemento começará deslocado 150px para a esquerda.
    x: -150, 
    // A animação levará 1,5 segundos para ser concluída.
    duration: 1.5, 
    // Define a suavização da animação (começa rápida e desacelera suavemente no final).
    ease: "power1.out", 
});

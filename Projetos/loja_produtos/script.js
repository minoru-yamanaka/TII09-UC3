// Seleciona todos os elementos com a classe 'card' e armazena-os na variável 'cards'
const cards = document.querySelectorAll('.card');

// Seleciona o botão de redefinir pelo seu ID e armazena-o na variável 'btnRedefinir'
const btnRedefinir = document.getElementById('btnRedefinir');

// Para cada elemento 'card', adiciona um ouvinte de evento para o clique
cards.forEach(card => {
    // Quando um 'card' for clicado, alterna a classe 'selecionado'
    card.addEventListener("click", () => {
        card.classList.toggle("selecionado"); // Alterna a classe 'selecionado' para destacar ou desmarcar o produto
    });
});

// Para cada 'card', adiciona um ouvinte de evento para o botão 'btnRedefinir'
cards.forEach(card => {
    // Quando o botão 'btnRedefinir' for clicado, remove a classe 'selecionado' de todos os 'cards'
    btnRedefinir.addEventListener("click", () => {
        card.classList.remove("selecionado"); // Remove a classe 'selecionado' de cada 'card', desfazendo a seleção
    });
});

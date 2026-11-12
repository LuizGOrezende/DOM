
// Seleciona todas as caixas
const caixas = document.querySelectorAll(".caixa");

// Seleciona os botões
const botaoPrincipal = document.querySelector(".principal");
const botaoSecundario = document.querySelector(".secundario");

// Ao clicar em cada caixa, adiciona uma borda verde
caixas.forEach(caixa => {
    caixa.addEventListener("click", function() {
        caixa.style.border = "3px solid green";
    });
});

// Botão principal: todas as caixas ficam com borda azul
botaoPrincipal.addEventListener("click", function() {
    caixas.forEach(caixa => {
        caixa.style.border = "3px solid blue";
    });
});

// Botão secundário: remove todas as bordas
botaoSecundario.addEventListener("click", function() {
    caixas.forEach(caixa => {
        caixa.style.border = "none";
    });
});

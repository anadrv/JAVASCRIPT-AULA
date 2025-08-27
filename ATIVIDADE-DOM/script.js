let azul = document.querySelectorAll(".azul");
let vermelho = document.querySelectorAll(".vermelho");

azul.forEach(azul => {
    azul.classList.add("vermelho");
    azul.classList.remove("azul");
});

azul.forEach(vermelho => {
    vermelho.classList.add("azul");
    vermelho.classList.remove("vermelho");
});


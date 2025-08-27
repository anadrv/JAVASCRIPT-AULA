
let btn = document.getElementById("btn");

function changeColors() {

    let corAzul = document.querySelectorAll(".azul");
let corVermelho = document.querySelectorAll(".vermelho");

    corAzul.forEach(azul => {
    azul.classList.add("vermelho");
    azul.classList.remove("azul");
});

corVermelho.forEach(vermelho => {
    vermelho.classList.add("azul");
    vermelho.classList.remove("vermelho");
});
}

btn.addEventListener("click", changeColors);






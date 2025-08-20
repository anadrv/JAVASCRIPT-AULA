let mesa = ["Ana"];

mesa.push("Sabrina", "Carol");
mesa.unshift("Gabriel", "Lavinia", "Julia");

let position = mesa.indexOf("Ana");

mesa.splice(position, 1);
console.log(mesa);
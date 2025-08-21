let xdinaryHeroes = ["Gunil", "Jungsu", "Gaon", "Ode", "Junhan", "Jooyeon", "Jooyeon"];

console.log(xdinaryHeroes);

document.writeln(xdinaryHeroes);

let um = xdinaryHeroes[0];
let dois = xdinaryHeroes[1];

console.log(um);
document.writeln(dois);

let maknae = xdinaryHeroes.indexOf("Jooyeon");
console.log(maknae);

//xdinaryHeroes.push("Ham-il", "Nyangduu", "Jiduck", "Fox.De", "Tyonen", "JJuf");
xdinaryHeroes.unshift("Ham-il", "Nyangduu", "Jiduck", "Fox.De", "Tyonen", "JJuf");
//xdinaryHeroes.shift(); - remove o primeiro
//xdinaryHeroes.pop(); - remove o ultimo


//xdinaryHeroes.splice(um, 1); - remove pelo indice

const nome = "-"

xdinaryHeroes.splice(1, 0, nome)
console.log(xdinaryHeroes);
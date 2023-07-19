//1.Ler os comandos
//2.> é igual a i+1, < iguala i-1

let sequencia = "<<<<<<<<<<<<<<<<<";
let i = 0;
let indice;

for (const botao of sequencia) {
  botao === ">" ? i++ : i--;
}

if (i > 7) {
  indice = i % 7;
} else if (i < 0) {
  indice = 7 + (i % 7);
} else {
  indice = i;
}

console.log(indice);

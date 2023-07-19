let resultados = ["V", "E", "V", "E"];
let pontuacao = 0;

for (const nota of resultados) {
  if (nota === "V") {
    pontuacao += 3;
  } else if (nota === "E") {
    pontuacao += 1;
  }
}
console.log(pontuacao);

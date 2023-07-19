let notas = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100];
let soma = 0;
let maiorNota = notas[0];
let menorNota = notas[0];

for (const nota of notas) {
  nota > maiorNota ? (maiorNota = nota) : maiorNota;
  nota < menorNota ? (menorNota = nota) : menorNota;
  soma += nota;
}

let media = (soma - (maiorNota + menorNota)) / (notas.length - 2);
console.log(media);

let precos = [10, 20, 30, 5, 1];
let soma = 0;
let valorPagar = 0;
let menorValor = precos[0];

for (const element of precos) {
  soma += element;

  element < menorValor ? (menorValor = element) : menorValor;
}

if (precos.length < 5) {
  valorPagar = soma;
} else {
  valorPagar = soma - menorValor;
}

console.log(valorPagar);

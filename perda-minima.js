//Subtrair valor[elemento] de cada valor[i]
//Se valor da subtração for negativo, multiplica resultado por 1
//Verificar se essa subtração é menor que a perdaMinima e maior que zero

precos = [30, 10, 54, 76, 1, 4, 35];
perdaMinima = precos[0] - precos[1];
if (perdaMinima < 0) {
  perdaMinima = -perdaMinima;
}

for (let i = 0; i < precos.length; i++) {
  for (let j = i + 1; j < precos.length; j++) {
    let subtracao = precos[i] - precos[j];
    if (subtracao > 0) {
      subtracao < perdaMinima ? (perdaMinima = subtracao) : perdaMinima;
    }
  }
}

console.log(perdaMinima);

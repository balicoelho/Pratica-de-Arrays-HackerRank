//percorrer o array e identificar se primeira primeira letra=primeira letra
// && segundaletra=segundaletra
//se for insiro na linha final

let primeiraLetra = "a";
let segundaLetra = "v";
let palavras = ["aveia", "manha", "ave"];
let resultado = "";

for (const palavra of palavras) {
  palavra[0] === primeiraLetra && palavra[1] === segundaLetra
    ? (resultado += `${palavra}\n`)
    : resultado;
}

resultado.length === 0 ? (resultado = "NENHUMA") : resultado;

console.log(resultado);

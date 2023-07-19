let palpite = "a";
let palavra = "abelaha";
let acertos = 0;

for (const letra of palavra) {
  letra === palpite ? (acertos += 1) : acertos;
}
console.log(acertos);

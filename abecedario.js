letra = "m";
palavras = ["mamao", "maca", "melao", "melancia", "khjh", "sldkfldskf", "ksdj"];
let cont = 0;
for (const palavra of palavras) {
  palavra[0] !== letra ? cont++ : cont;
}

console.log(cont);

let word = "*Canis %lupus )familiaris";
let caracteres = "!@#$%&*().";
let newWord = "";

for (let caractere of word) {
  if (
    caractere === "!" ||
    caractere === "@" ||
    caractere === "#" ||
    caractere === "$" ||
    caractere === "%" ||
    caractere === "&" ||
    caractere === "(" ||
    caractere === ")" ||
    caractere === "." ||
    caractere === "*"
  ) {
  } else {
    newWord += caractere;
  }
}

console.log(newWord);

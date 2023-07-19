let disparos = [0, 50, 90, 80, 100, 80, 40];
let cont = 0;
for (const disparo of disparos) {
  disparo > 70 ? cont++ : cont;
}

cont >= 3 ? console.log(cont) : console.log("ELIMINADO");

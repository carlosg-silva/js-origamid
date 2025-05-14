var carro = "Fusca";

function mostrarCarro() {
  console.log(carro);
}

mostrarCarro(); // Fusca no console
console.log(carro); // Erro, carro is not defined

if (true) {
  const mes = "Dezembro";
  console.log(mes);
}

// console.log(mes);

{
  var carro2 = "Fusca2";
  const ano = 2018;
}

let i = 5;

console.log(carro2);
// console.log(ano); // erro ano is nor defined

for (let i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}

console.log(i * 10);

const semana = "Sexta";
// semana = "Quinta";

console.log(semana);

const data = {
  ano: 2018,
  mes: "Dezembro",
}; // Consigo modificar valores mas não o tipo da constante

data.ano = 2019;

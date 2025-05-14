// Por qual motivo o código abaixo retorna com erros?
{
  var cor = "preto";
  // const marca = "Fiat"; // Escopo interno
  // let portas = 4; // Escopo interno
}
// console.log(var, marca, portas); // Primeiro foi chamado var e não a variável cor que seria a forma correta
//As demais let e const estão no escopo de bloco

// Como corrigir o erro abaixo?
// function somarDois(x) {
//   const dois = 2;
//   return x + dois;
// }
// function dividirDois(x) {
//   return x + dois;
// }
// somarDois(4);
// dividirDois(6);

//correção
const dois = 2;

function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x / dois;
}
console.log(somarDois(4));
console.log(dividirDois(6));

// O que fazer para total retornar 500?
const numero = 50;

for (let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);

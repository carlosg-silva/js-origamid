// Crie uma função para verificar se um valor é Truthy
function isTruthy(value) {
  if (value) {
    return console.log("É true");
  } else {
    return console.log("É false");
  }
}
isTruthy(1);

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado) {
  return lado * 4;
}
console.log(perimetroQuadrado(6));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return console.log(`${nome} ${sobrenome}`);
}
nomeCompleto("Carlos", "Silva");
// Crie uma função que verifica se um número é par
function par(numero) {
  if (numero % 2 === 0) {
    return console.log(`${numero} é par.`);
  } else if (numero % 2 >= 1) {
    return console.log(`${numero} não é par`);
  } else {
    return console.log("Insera um número");
  }
}

par(3);
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipo(dado) {
  return typeof dado;
}
console.log(tipo(true));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener("scroll", function () {
  return console.log("Carlos Antonio");
});

// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
var naoVisitei = precisoVisitar(20);
var visitei = jaVisitei(20);

console.log(naoVisitei, visitei);

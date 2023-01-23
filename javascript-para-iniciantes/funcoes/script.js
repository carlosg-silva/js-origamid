// Crie uma função para verificar se um valor é Truthy
function verificarTruthy(valor) {
  return !!valor;
}
// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(lado) {
  var quadrado = lado * 4;
  return console.log(quadrado);
}
perimetro(4);
// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}
console.log(nomeCompleto("Carlos", "Antonio"));
// Crie uma função que verifica se um número é par
function parImpar(numero) {
  if (numero % 2 === 0) {
    return `O número ${numero} é par`;
  } else {
    return `O número ${numero} é impar`;
  }
}
console.log(parImpar(7));
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDado(dado) {
  var tipo = typeof dado;
  console.log(tipo);
}
tipoDado("");
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome
// quando o evento 'click' ocorrer.
addEventListener("click", function () {
  console.log("Carlos");
});
// Corrija o erro abaixo
var totalPaises = 193; // A variável estava dentro da primeira função, assim a segunda função não coneguia acessar o valor da mesma.
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);

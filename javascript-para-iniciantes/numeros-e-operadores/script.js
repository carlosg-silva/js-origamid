// Qual o resultado da seguinte expressão?
var total = 10 + (5 * 2) / 2 + 20; /* O resultado é 35 */
console.log(total);
// Crie duas expressões que retornem NaN
var notNaN1 = "frase" % 2;
var notNaN2 = "frase" * 5;
console.log(notNaN1, notNaN2);
// Somar a string '200' com o número 50 e retornar 250
var str = "200";
var num = 50;
var somaStr = +str + num;
console.log(somaStr);
// Incremente o número 5 e retorne o seu valor incrementado
var numero = 5;
console.log(++numero);

// Como dividir o peso por 2?
var numero = +"80" / 2;
var unidade = "kg";
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso; // NaN (Not a Number)
console.log(pesoPorDois);

// Qual o resultado da seguinte expressão?
var total = 10 + (5 * 2) / 2 + 20;
// O reultado é 35
console.log(total);
// Crie duas expressões que retornem NaN
var exp1 = 10 / "2s";
var exp2 = 35 + "a" * 2;
console.log(exp1, exp2);
// Somar a string '200' com o número 50 e retornar 250
var num1 = "200";
var num2 = 50;
var soma = +num1 + num2;
console.log(soma);
// Incremente o número 5 e retorne o seu valor incrementado
var x = 5;
x++;
console.log(x);
// Como dividir o peso por 2?
var numero = "80";
var unidade = "kg";
var peso = +numero; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)
console.log(pesoPorDois + unidade);

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 32;
var idadeParente = 48;
if (minhaIdade > idadeParente) {
  console.log("É maior");
} else if (minhaIdade === idadeParente) {
  console.log("É igual");
} else {
  console.log("É menor");
}
// Qual valor é retornado na seguinte expressão?
//Retorna 3
var expressao = 5 - 2 && 5 - " " && 5 - 2;
console.log(expressao);
// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "Andre"; // Truthy
console.log(!!nome);

var idade = 28; // Truthy
console.log(!!idade);

var possuiDoutorado = false; // Falsy
console.log(!!possuiDoutorado);

var empregoFuturo; // Falsy
console.log(!!empregoFuturo);

var dinheiroNaConta = 0; // Falsy
console.log(!!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
  console.log("Brasil tem mais habitantes");
} else {
  console.log("Brasil tem menos habitantes");
}

// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão");
} else {
  console.log("Falso");
}

function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(2));

function pi() {
  return 3.14;
}

var total = 5 * pi();

console.log(pi(), total);

function imc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc;
}

console.log(imc(120, 1.82));

function corFavorita(cor) {
  if (cor === "azul") {
    return "Eu gosto do céu";
  } else if (cor === "verde") {
    return "Eu gosto de mato";
  } else {
    return "Eu não gosto de cores";
  }
}

function mostraConsole() {
  console.log("Oi");
}

addEventListener("click", mostraConsole);

function imc2(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
}

imc2(80, 1.8); // retorna o imc
// console.log(imc2(80, 1.8)); // retorna o imc e undefined

function terceiraIdade(idade) {
  console.log(typeof idade);
  if (typeof idade !== "number") {
    return "Por favor preencha um número";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}

console.log(terceiraIdade("oi"));

function faltaVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Falta visitar ${totalPaises - paisesVisitados} países`;
}

var profissao = "Designer";

function dados() {
  var nome = "André";
  var idade = 28;
  function outrosDados() {
    var endereco = "Rio de Janeiro";
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados()); // Retorna 'André, 29, Rio de Janeiro, Designer'
// outrosDados(); // retorna um erro

function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(10));

function pi() {
  return 3.14;
}

var total = 5 * pi();
console.log(total);

function imc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc;
}
console.log(imc(80, 1.8));

function corFavorita(cor) {
  if (cor === "azul") {
    return "Eu gosto do céu";
  } else if (cor === "verde") {
    return "Eu gosto da grama";
  } else {
    return "Eu não gosto de cores";
  }
}
console.log(corFavorita());

addEventListener("click", function () {
  console.log("Oi");
});

function imc2(peso, altura) {
  constimc = peso / altura ** 2;
  console.log(imc);
}

imc(80, 1.8); //retorna o imc
console.log(imc(80, 1.8)); // retorna o imc e undefined

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
  return `Falta visitar ${totalPaises - paisesVisitados}  países`;
}

var profissao = "Designer";

function dados() {
  var nome = "Carlos";
  var idade = 28;
  function outrosDados() {
    var endereco = "São Paulo";
    var idade = 30;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados()); // Retorna 'Carlos, 29, Rio de Janeiro, Designer'
outrosDados(); // retorna um erro

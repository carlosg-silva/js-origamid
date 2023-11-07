// const perimetro = new Function("lado", "return lado * 4");

// function somar(n1, n2) {
//   return n1 + n2;
// }

// console.log(somar.name);

// function darOi(nome, idade) {
//   console.log("Oi para você " + nome + idade);
// }

// darOi.call({}, "Carlos", 31);

// window.marca = "Carro";
// window.ano = 288;

// function descricaoCarro(velocidade) {
//   console.log(this);
//   console.log(this.marca + " " + this.ano + velocidade);
// }

// descricaoCarro.call({ marca: "Honda", ano: 2015 });

// const carros = ["Ford", "Fiat", "VW"];
// const frutas = ["Banana", "Uva", "Pêra"];

// carros.forEach.call(frutas, (item) => {
//   console.log(item);
// });

// function Dom(seletor) {
//   this.element = document.querySelector(seletor);
// }

// Dom.prototype.ativo = function (classe) {
//   console.log(this);
//   // this.element.classList.add(classe);
// };

// Dom.prototype.ativo();

// // const ul = new Dom("ul");

// const li = {
//   element: document.querySelector("li"),
// };

// ul.ativo.call("ativao");
// console.log(ul);

// const frutas = ["Banana", "Uva", "Pêra"];

// Array.prototype.mostrarThis() {
//   console.log(this);
// }

const li = document.querySelectorAll("li");
const arrayLi = Array.from(li);

const filtro = Array.prototype.filter.bind(li, function (item) {
  return item.classList.contains("ativo");
});

console.log(filtro());

console.log(li);

const numeros = [33, 232, 33, 434, 54, 5424, 4];

const carro = {
  marca: "Ford",
  ano: 2018,
  acelerar: function (aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
  },
};

const honda = {
  marca: "Honda",
};

const acelerarHonda = carro.acelerar.bind(honda);

console.log(acelerarHonda(300, 20));

console.log(carro);

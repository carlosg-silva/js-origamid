// const carros = ["Ford", "Fiat", "Honda"];

// carros.forEach((item, index, array) => {
//   console.log(item.toUpperCase(), index, array);
// });

// console.log(carros);

// const li = document.querySelectorAll("li");

// const retornoForeach = li.forEach((item, index) =>
//   item.classList.add("ativa" + index)
// );

// const carros = ["Ford", "Fiat", "Honda"];

// const novaArray = carros.map((item, index, array) => {
//   return item.toUpperCase();
// });

// const numeros = [2, 4, 5, 6, 78];
// const numerosX2 = numeros.map((n) => n * 2);

// console.log(numerosX2);

// console.log(novaArray);
// console.log(carros);

// const aulas = [
//   {
//     nome: "HTML 1",
//     min: 15,
//   },
//   {
//     nome: "HTML 2",
//     min: 10,
//   },
//   {
//     nome: "CSS 1",
//     min: 20,
//   },
//   {
//     nome: "JS 1",
//     min: 25,
//   },
// ];

// const tempoAulas = aulas.map((aula) => aula.min);

// const nomeAulas = (aula) => aula.nome;

// const nomeAulas2 = function (aula) {
//   return aula.nome;
// };

// const arrayNomeAulas = aulas.map(nomeAulas);

// console.log(arrayNomeAulas);
// console.log(tempoAulas);

// const aulas = [10, 25, 30];

// const reduceAulas = aulas.reduce((acumulador, item) => {
//   console.log(acumulador, item);
//   return acumulador + item;
// }, 0);

// console.log(reduceAulas);

// const numeros = [10, 25, 30, 3, 54, 33, 22];

// const maiorNumero = numeros.reduce((anterior, atual) => {
//   return anterior > atual ? anterior : atual;
// }, 0);

// console.log(maiorNumero);

// const aulas = [
//   {
//     nome: "HTML 1",
//     min: 15,
//   },
//   {
//     nome: "HTML 2",
//     min: 10,
//   },
//   {
//     nome: "CSS 1",
//     min: 20,
//   },
//   {
//     nome: "JS 1",
//     min: 25,
//   },
// ];

// const listaAulas = aulas.reduce((acumulador, aula, index) => {
//   acumulador[index] = aula.nome;
//   return acumulador;
// })

const frutas = ["Banana", "", "Pêra", "Uvas"];

// const temUva = frutas.some((item) => {
//   console.log(item);
//   return item === "Uva";
// });

const every = frutas.every((fruta) => {
  return fruta;
});

const indexUva = frutas.findIndex((item) => {
  return item === "Uvas";
});

console.log(every);
// console.log(temUva);

const numeros = [6, 43, 22, 88, 101, 29];

const maiorQue3 = numeros.every((n) => n >= 3);

const aulas = [
  {
    nome: "HTML 1",
    min: 15,
  },
  {
    nome: "HTML 2",
    min: 10,
  },
  {
    nome: "CSS 1",
    min: 20,
  },
  {
    nome: "JS 1",
    min: 25,
  },
];

const maiores15 = aulas.filter((aula) => {
  return aula.min >= 15;
});

console.log(maiores15);

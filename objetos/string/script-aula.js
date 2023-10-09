// const comida = "Pizza";
// const agua = new String(" Agua");

// console.log(comida.length);
// console.log(agua.length); // espaço também conta

// const frase = "A melhor comida";

// console.log(frase[frase.length - 1]);
// console.log(frase.charAt(frase.length - 1));

const frase = "A melhor linguagem é ";
const linguagem = "Javascript";

const fraseFinal = frase.concat(linguagem, "!!", "Oi shsiou");

const fruta = "Banana";
const listaFrutas = "Melancia, Banana, Laranja";

console.log(listaFrutas.includes(fruta, 14));

console.log(fruta.startsWith("Bana"));
console.log(fruta.endsWith("na"));

const transacao1 = "Depósito de cliente";
const transacao2 = "Depósito de fornecedor";
const transacao3 = "Taxa de camisas";

console.log(transacao1.slice(0, 3));
console.log(transacao1.slice(1));
console.log(transacao1.slice(0, -2));
console.log(transacao1.slice(-5));

const preco = "R$ 99,00";

const listaPrecos = ["R$ 99", "R$ 199", "R$ 12000"];

listaPrecos.forEach((item) => {
  console.log(item.padStart(10, "-"));
});

const frase2 = "Ta";

frase2.repeat(5); //TaTaTaTaTa

let listaItens = "Camisas Bonés Calças Bermudas Vestidos Saias";

listaItens = listaItens.replace(/[ ]+/g, ", ");

const arrayLista = listaItens.split(", ");

console.log(arrayLista);

const htmlText = "<div>O melhor item</div><div>A melhor lista</div>";
const htmlArray = htmlText.split("div");
const novoHtml = htmlArray.join("section");

console.log(htmlText);
console.log(htmlArray);
console.log(novoHtml);

const frutasArray = ["Banana", "Melancia", "Laranja"];

const sexo1 = "Feminino";
const sexo2 = "feminino";
const sexo3 = "FEMININO";

console.log(sexo1.toLocaleLowerCase() === "feminino");

const valor = "  R$ 23.00  ";
valor.trim(); // 'R$ 23.00'
valor.trimStart(); // 'R$ 23.00  '
valor.trimEnd(); // '  R$ 23.00'

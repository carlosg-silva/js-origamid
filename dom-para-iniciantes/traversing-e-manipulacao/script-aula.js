/* const h1 = document.querySelector("h1");
const animaisLista = document.querySelector(".animais-descricao");
console.log(h1.innerHTML);
console.log(h1.outerHTML);

h1.innerHTML = "<p>Novo Título</p>";

console.log(h1.innerHTML);
/* console.log(animaisLista.innerText); */

/* const lista = document.querySelector(".animais-lista");

console.log(lista.children[--lista.children.length]);
console.log(lista.querySelector("li:last-child"));

console.log(lista.childNodes);

const animais = document.querySelector(".animais");
const contato = document.querySelector(".contato");
const titulo = contato.querySelector(".titulo");

const mapa = document.querySelector(".mapa");

contato.replaceChild(lista, titulo);

 contato.insertBefore(animais, mapa); 

const novoH1 = document.createElement("h1");
novoH1.innerText = "Novo Título";
novoH1.classList.add("titulo");

mapa.appendChild(novoH1);
 */

const h1 = document.querySelector("h1");
const faq = document.querySelector(".faq");

const cloneH1 = h1.cloneNode(true);

cloneH1.classList.add("azul");
faq.appendChild(cloneH1);

faq.appendChild(h1);

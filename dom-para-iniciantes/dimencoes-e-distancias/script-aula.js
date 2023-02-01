const listaAnimais = document.querySelector(".animais-lista");

const height = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop;
console.log(animaisTop);

const raposaH2 = document.querySelector("h2");
const raposaLeft = raposaH2.offsetLeft;

const rect = raposaH2.getBoundingClientRect();

console.log(rect.top);

if (rect.top < 0) {
  console.log("Passou do elemento");
}

console.log(
  window.innerWidth,
  window.innerHeight,
  window.outerWidth,
  window.outerHeight,
  window.pageYOffset
);

const small = window.matchMedia("(max-width:600px").matches;

if (small) {
  console.log("Usuário mobile");
} else {
  console.log("Usuário desktop");
}

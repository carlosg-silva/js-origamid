const listaAnimais = document.querySelector(".animais-lista");

const height = listaAnimais.scrollHeight;
const animaisTopo = listaAnimais.offsetTop;
console.log(animaisTopo);

const primeiroh2 = document.querySelector("h2");
const h2left = primeiroh2.offsetLeft;
console.log(h2left);

const h2rect = primeiroh2.getBoundingClientRect();
console.log(h2rect.height);

if (h2rect.top < 0) {
  console.log("Passou do elemento");
}

console.log(
  window.innerWidth,
  window.outerWidth,
  window.innerHeight,
  window.outerHeight,
  window.pageXOffset
);

const small = window.matchMedia("(max-width: 600px)").matches;

if (small) {
  console.log("Usuário mobile");
} else {
  console.log("Usuário Desktop");
}

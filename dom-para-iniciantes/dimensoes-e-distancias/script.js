// Verifique a distância da primeira imagem
// em relação ao topo da página
const img = document.querySelector("img");
const imagemTop = img.offsetTop;
console.log(imagemTop);
// Retorne a soma da largura de todas as imagens

function somaImagens() {
  const imgs = document.querySelectorAll("img");
  let soma = 0;
  imgs.forEach((img) => {
    soma += img.offsetWidth;
  });
  console.log(soma);
}

window.onload = function () {
  somaImagens();
};

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll("a");

links.forEach((link, index) => {
  if (link.offsetWidth >= 48 && link.offsetHeight >= 48) {
    console.log(`Link ${index} de acordo`);
  } else {
    console.log(`Link ${index} não está de acordo`);
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const menu = document.querySelector(".menu");
let browser = window.innerWidth;

if (browser < 720) {
  menu.classList.add("menu-mobile");
}
console.log(menu);

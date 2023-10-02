// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImg = document.querySelector("img");
const imgTop = primeiraImg.offsetTop;
console.log(imgTop);
// Retorne a soma da largura de todas as imagens
function somaImgs() {
  const imgs = document.querySelectorAll("img");
  let soma = 0;
  imgs.forEach((img) => {
    soma += img.offsetWidth;
  });
  console.log(soma);
}

window.onload = function () {
  somaImgs();
};
// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll("a");
links.forEach((link) => {
  if (link.offsetWidth && link.offsetHeight >= 48) {
    console.log(link, "Possui o mínimo recomendado");
  } else {
    console.log(link, "Não possui o mínimo recomendado");
  }
});
// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const mobile = window.matchMedia("(max-width: 720px)").matches;

if (mobile) {
  const menu = document.querySelector(".menu");
  menu.classList.add("menu-mobile");
}

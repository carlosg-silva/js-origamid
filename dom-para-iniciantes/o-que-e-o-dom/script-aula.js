// window.alert("Isso mesmo");

const href = window.location.href;

console.log(href);

if (
  href ===
  "http://127.0.0.1:5500/js-origamid/dom-para-iniciantes/o-que-e-o-dom/"
) {
  console.log("É igual");
}

const h1Selecionado = document.querySelector("h1");
console.log(h1Selecionado);

const h1Classes = h1Selecionado.classList;
console.log(h1Classes);

function callbackh1() {
  console.log("Clicou em", h1Selecionado.innerText);
}

h1Selecionado.addEventListener("click", callbackh1);

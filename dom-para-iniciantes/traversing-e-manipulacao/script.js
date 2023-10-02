// Duplique o menu e adicione ele em copy
const menu = document.querySelector(".menu");
const copy = document.querySelector(".copy");

const menu2 = menu.cloneNode(true);

copy.appendChild(menu2);
// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector(".faq");
const primeiroDt = faq.querySelector("dt");

// Selecione o DD referente ao primeiro DT
const proximoDd = primeiroDt.nextElementSibling;

console.log(proximoDd);

// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector(".animais");

faq.innerHTML = animais.innerHTML;

// Duplique o menu e adicione ele em copy
const menu = document.querySelector(".menu");
const cloneMenu = menu.cloneNode(true);

const copy = document.querySelector(".copy");
copy.appendChild(cloneMenu);

// Selecione o primeiro DT da dl de Faq
const faqLista = document.querySelector(".faq-lista");
const faqDt = faqLista.querySelector("dt");

// Selecione o DD referente ao primeiro DT
const faqDd = faqDt.nextElementSibling;
console.log(faqDd);

// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector(".animais");
const faq = document.querySelector(".faq");
faq.innerHTML = animais.innerHTML;

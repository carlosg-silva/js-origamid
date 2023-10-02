// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const links = document.querySelectorAll('a[href^="#"]');

function handleLink(event) {
  event.preventDefault();

  // Verifica se o link atual já possui as classes "ativo" e "clicou"
  const link = event.currentTarget;
  const hasAtivoClass = link.classList.contains("ativo");
  const hasClicouClass = link.classList.contains("clicou");

  // Remove as classes de todos os links
  links.forEach((otherLink) => {
    otherLink.classList.remove("ativo");
    otherLink.classList.remove("clicou");
  });

  // Adiciona ou remove as classes apenas do link atual
  if (!hasAtivoClass) {
    link.classList.add("ativo");
  } else {
    link.classList.remove("ativo");
  }

  if (!hasClicouClass) {
    link.classList.add("clicou");
  } else {
    link.classList.remove("clicou");
  }
}

links.forEach((link) => {
  link.addEventListener("click", handleLink);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const todosElementos = document.querySelectorAll("body *");

function handleElemento(event) {
  event.currentTarget.remove();
}

// todosElementos.forEach((elemento) => {
//   elemento.addEventListener("click", handleElemento);
// });

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// Se o usuário clicar na tecla (t), aumente todo o texto do site.
function handleClickT(event) {
  console.log(event.key);
  if (event.key === "t") {
    document.documentElement.classList.toggle(".textomaior");
  }
}

window.addEventListener("keydown", handleClickT);

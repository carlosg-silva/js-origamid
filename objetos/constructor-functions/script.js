// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
  nome: "Nome pessoa",
  idade: 0,
  andar() {
    console.log(this.nome + " andou");
  },
};

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function () {
    console.log(nome + " - " + idade + " andou");
  };
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const joao = new Pessoa("João", 20);
joao.andar();

const maria = new Pessoa("Maria", 25);
maria.andar();

const bruno = new Pessoa("Bruno", 15);
bruno.andar();
// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos
function Dom(seletor) {
  this.element = function () {
    const list = document.querySelectorAll(seletor);
    return list;
  };

  this.addClass = function (classe) {
    this.element().forEach((el) => {
      el.classList.add(classe);
    });
  };

  this.removeClass = function (classe) {
    this.element().forEach((el) => {
      el.classList.remove(classe);
    });
  };
}

const li = new Dom("li");

li.addClass("ativo");
li.removeClass("ativo");

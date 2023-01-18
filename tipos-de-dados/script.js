// Declare uma variável contendo uma string
var str = "Esta é uma string";
console.log(str);

// Declare uma variável contendo um número dentro de uma string
var idade = 30;
var fraseIdade = `Meu nome é Carlos e tenho ${idade} anos`;
var idadeStr = "30";
console.log(fraseIdade);
console.log(idadeStr);

// Declare uma variável com a sua idade
console.log(idade);

// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
var nome = "Carlos";
var sobrenome = "Silva";
var nomeCompleto = `${nome} ${sobrenome}`; /* Utilizando template string */
console.log(nomeCompleto);

// Coloque a seguinte frase em uma variável: It's time
var frase = "It's time";
console.log(frase);

// Verifique o tipo da variável que contém o seu nome
var verificarNome = typeof nome;
console.log(verificarNome);

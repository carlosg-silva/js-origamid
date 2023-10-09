// Liste 5 objetos nativos
Object;
String;
Array;
Function;
Number;
// Liste 5 objetos do browser
Document;
Window;
NodeList;
navigator;
XMLHttpRequest;
// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox
if (typeof document.webkitHidden !== "undefined") {
  console.log("Existe");
} else {
  console.log("Não existe");
}

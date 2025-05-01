
var elemento = document.createElement("p");

elemento.classList = "elemento";

var texto = document.createTextNode("texto teste do paragrafo.");

elemento.appendChild(texto);

console.log(elemento);


//podemos pegar o pai de um elemento usando apenas o comando "parentNode";

var titulo = document.querySelector("title");

var pai = titulo.parentNode;

//para trocar os elementos usamos o "replacechild".

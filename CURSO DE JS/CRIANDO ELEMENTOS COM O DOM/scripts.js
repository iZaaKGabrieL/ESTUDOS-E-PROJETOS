//CRIANDO UM NOVO ELEMENTO PARA O HTML

var novoparagrafo = document.createElement("p");
console.log(novoparagrafo); 

//PARA CRIAR O TEXTO PARA INSERIR NA TAG CRIADA ACIMA:

var texto = document.createTextNode("isto e um exemplo de texto criado para uma tag tambem criada usando JAVASCRIPT");


//  PARA INSERIR O PARAGRAFO A  TAG CRIADA A ACIMA:

novoparagrafo.appendChild(texto);
console.log(novoparagrafo);

var body = document.querySelector("body");

body.appendChild(novoparagrafo);
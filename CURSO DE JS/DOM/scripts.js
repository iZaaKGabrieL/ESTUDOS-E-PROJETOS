var lista = ['aziveis', 'roxo', 'laranja', 'verde', 'amarelo'];

var listaUL = document.createElement('ul');

var body = document.getElementsByTagName('body');

//console.log(body[0]);

body[0].appendChild(listaUL);

var Nobody = document.getElementsByTagName('ul')

console.log(Nobody[0]);



for(var i = 0; i < lista.length; i++){

    //console.log(lista[i]);
    
    var liFor = document.createElement('li');

    var textLi = document.createTextNode(lista[i]);

    liFor.appendChild(textLi);

    Nobody[0].appendChild(liFor);
};
/*BASICAMENTE O JSON NO JAVASCRIPT TEM O PAPEL DE TRANSFORMAR OBJETOS EM TEXTOS E TAMBEM AO CONTRARIO, TRANSFORMAR TEXTOS EM OBJETOS. */

/* QUANDO VAMOS UTILIZAQR O JSON TEMOS DOIS METODOS COMUNS QUE USAMOS.

JSON.parse() ->  converte texto no padrão JSON para objetos.
JSON.stringify() -> converte objetos  em texto padrão JSON . */

/*  O COMANDO "XMLHttpRequest();"  E USADO PARA FAZER UMA REQUISIÇÃO DE UM SITE ISSO E PEGAR OU ACESSAR INFORMAÇÕES DE UM SITE DE FORMA REMOTA.

E O "open('GET', URL DO SITE)" E USADO PARA ACESSAR A URL DO SITE, EXEMPLO DE COMANDO ABAIXO.


const ajax = new XMLHttpRequest();

ajax.open('GET', URL DO SITE);

ajax.send();

ajax.onload = function(){

document.getElementById('id').innerHTML = this. responseText;

}



*/


function buscaCEP() {
    let  input = document.getElementById("cep").value;

    const ajax = new XMLHttpRequest();
    ajax.open('GET','https://viacep.com.br/ws/' + input + '/json/');

    ajax.send();

    ajax.onload = function(){
        document.getElementById('texto').innerHTML = this.responseText;
}




}




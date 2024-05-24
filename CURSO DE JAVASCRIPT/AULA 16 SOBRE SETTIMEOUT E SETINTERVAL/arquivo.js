/*  EVENTOS DE TEMPO NO JAVASCRIPT

OS EVENTOS DE TEMPO NO JAVA SCRIPT PERMITEM A EXECUÇÃO DE UM CODIGO EM INTERVALOS DE TEMPO ESPECIFICADOS. ESSES INTERVALOS DE TEMPO SÃO CHAMADOS DE EVENTOS DE CRONOMETAGEM.

Os  dois métodos-chave para usar com JavaScript são :

setTimeout(function tempo em milsegundos)
-> Executa uma função, depois de esperar um número especificado de milisegundos.

setInterval(function, milisegundos)
-> E o mesmo que o SetTimeout(), mas repete a execução da função continuamente .

Exemplo de como e feita uma função usando o setTimeout():

function nomeDaFunção(){
    setTimeout(function, tempo em milisegundos)
}

feito isso, a função so vai ser excutada de acordo com o tempo que  voce colocou acima.
*/

function ativarContagem(){
    document.getElementById('tempo').innerHTML = "Começou a contagem!";
    //apenas ativa a função.
     tempo = setTimeout(function(){
        document.getElementById('tempo').innerHTML = "testando o evento setTimeout";
        document.body.style.backgroundColor = "yellow";
     }, 1000)
}


function pararTempo() {
    /* observação, para parar uma função com setTimeout() precisamos coloca-lo dentro de uma variavel e usar comando 
     clearTimeout(nome da variavel que esta com o setTimeout().)
     */
    clearTimeout(tempo)
    document.getElementById('tempo').innerHTML = "Parou";
}
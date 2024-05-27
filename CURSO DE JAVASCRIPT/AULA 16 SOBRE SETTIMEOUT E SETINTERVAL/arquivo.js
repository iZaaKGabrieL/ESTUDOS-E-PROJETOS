/*  EVENTOS DE TEMPO NO JAVASCRIPT

OS EVENTOS DE TEMPO NO JAVA SCRIPT PERMITEM A EXECUÇÃO DE UM CODIGO EM INTERVALOS DE TEMPO ESPECIFICADOS. ESSES INTERVALOS DE TEMPO SÃO CHAMADOS DE EVENTOS DE CRONOMETAGEM.

Os  dois métodos-chave para usar com JavaScript são :

setTimeout(function tempo em milsegundos)
-> Executa uma função, depois de esperar um número especificado de milisegundos.

setInterval(function, milisegundos)
-> E o mesmo que o SetTimeout(), mas repete a execução da função continuamente, ISSO E SEMPRE QUE VOCE ESCOLHER UM PERIODO DE TEMPO A FUNÇÃO SERAR ACIONADA ATÉ QUE O PERIODO DE TEMPO QUE VOCE ESCOLHEU CHEGUE AO FIM.

Exemplo de como e feita uma função usando o setTimeout():

function nomeDaFunção(){
    setTimeout(function, tempo em milisegundos)
}

feito isso, a função so vai ser excutada de acordo com o tempo que  voce colocou acima.
*/
var tempo;

function ativarContagem(){
   // document.getElementById('tempo').innerHTML = "Começou a contagem!";
    /*apenas ativa a função.
     tempo = setTimeout(function(){
        document.getElementById('tempo').innerHTML = "testando o evento setTimeout";
        document.body.style.backgroundColor = "yellow";
     }, 1000)*/
      tempo = setInterval(function (){
        var cronometro = document.getElementById('tempo').innerHTML;
        var soma = parseInt(cronometro) + 1;
            document.getElementById('tempo').innerHTML = soma;
        }, 1000);
}



function pararTempo() {
    clearInterval(tempo);
    //document.getElementById('tempo').innerHTML = "Parou";
};
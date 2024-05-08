/* Arrays que tem como valor variaveis comuns, para pegar apenas um dos seus valores usamos apenas "pessoa[posição do valor]", agora quando usamos Arrays que em seu valor temos objetos, para pega-los usamos "pessoa.nome do objeto aqui;" Ah e tem mais, Matrizes e Arrays são as mesmas coisas :D .

SOBRE METODOS NO JS:

METODOS SÃO BASICAMENTE FUNÇOES QUE ESTÃO QUASE PRONTAS E QUE SERVE PARA TRABALHARMOS COM NOSSAS ARRAYS.

*/


const lista = ["arroz", "feijão", "carne", "verdura"];
// Array com String abaixo
 const pessoa  = ["Isaac ", "Gabriel ", 18]
 // array com objeto abaixo:
 const people = {nome: "isaac ",  sobrenome: "Gabriel ", idade: "18"}
pessoa.splice(1,0, "o mais lindo", "e o mais inteligente", );
//alert(pessoa);

const pessoasLindas = ["lili Renhart", "Lizzy Brodway", "lululovley", "Samara"];
pessoasLindas.sort();
alert(pessoasLindas);
 const numeros = [1,22,3,55,40,3,7,6,5,10,9,100];
 numeros.sort(function (a, b)  {return a - b});
alert(numeros);
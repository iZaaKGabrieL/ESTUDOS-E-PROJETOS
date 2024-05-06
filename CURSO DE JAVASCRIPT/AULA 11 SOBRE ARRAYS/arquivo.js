/* Arrays que tem como valor variaveis comuns, para pegar apenas um dos seus valores usamos apenas "pessoa[posição do valor]", agora quando usamos Arrays que em seu valor temos objetos, para pega-los usamos "pessoa.nome do objeto aqui;" Ah e tem mais, Matrizes e Arrays são as mesmas coisas :D .
*/


const lista = ["arroz", "feijão", "carne", "verdura"];
// Array com String abaixo
 const pessoa = ["Isaac ", "Gabriel ", 18]
 // array com objeto abaixo:
 const people = {nome: "isaac ",  sobrenome: "Gabriel ", idade: "18"}
 alert(lista.length);
 alert(Array.isArray(pessoa));
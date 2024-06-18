   
/* MANIPULAR DATAS NO JAVASCRIPT*/

/* PARA MANIPULAÇÃO DE DATAS USAMOS UM COMANDO MUITO CONHECIDO, QUE E O "NEW DATE ();" , ELE DEVE SERA ATRIBUIDO A UMA VARIAVEL PARA QUE FUNCIONE CORRETAMENTE. EXEMPLO DE UM PROGAMA BASICO USANDO ESTE COMANDO :

let data = new date(); 
console.log(data);

ESTE COMANDO IRA MOSTRAR A DATA 
.

AGORA VAMOS PARA A PARTE PRATICA. */
let data = new Date();
//PEGAR O ANO COM ESSE COMANDO
let ano = data.getFullYear();
console.log(ano);

//COMANDO PARA PEGAR O MêS ATUAL SO QUE O 0 SERIA JANEIRO E O 11 DEZEMBRO
let mes = data.getMonth();
console.log(mes);

const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho","Agosto", "Setembro", "Outubro", "Novembro", "Dezembro" ]

let mesesNaTela = meses[data.getMonth()];
console.log(mesesNaTela);

//PEGAR DIA DO MêS 1 ATE 31

let dia = data.getDate();
console.log(dia);

//PEGAR O DIA DA SEMANA,vai de 0 que seria domingo ate 6 que seria o sabado

let semana = data.getDay();
console.log(semana);

const week = ["Domingo", "Segunda", "terça", "Quarta", "Quinta", "Sexta", "Sabado"]

let diaDaSemana = week[data.getDay()];
console.log(diaDaSemana);

//AGORA PARA MOSTRAR A HORA 0 ATE 23

let hora = data.getHours();
console.log(hora);

//PARA MOSTRAR OS MINUTOS QUE E DE 0 ATE 59

let minuto = data.getMinutes();
console.log(minuto);

//PARA MOSTRAR  OS SEGUNDOS QUE TAMBEM VAI DE 0 A 59

let segundos = data.getSeconds();
console.log(segundos);

//PARA MOSTRAR OS MILISEGUNDOS VAI DE 0 ATE 999

let mili = data.getMilliseconds();
console.log(mili);












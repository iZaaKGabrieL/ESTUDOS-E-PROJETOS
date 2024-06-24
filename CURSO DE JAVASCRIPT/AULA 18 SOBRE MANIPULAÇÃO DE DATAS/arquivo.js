   
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

//PEGAR A DATA NO FORMATO BRASILEIRO

let databr = data.toLocaleString("pt-BR");
console.log(databr);

// PARA PEGAR OS VALORES SEPARADOS

d = new Date();

diaMes = d.getDate();

mes = d.getMonth() + 1;

ano = d.getFullYear();


let datCompleta = diaMes + "/" + mes + "/" + ano;

console.log(datCompleta);

// AGORA COMO COMPARAR DATAS

var hoje = new Date();

var vencimento =  new Date(2016, 0, 25);

if(hoje > vencimento){
    console.log("Sua conta esta vencida.");

}else{
    console.log("AINDA NÃO VENCEU E NÃO SERAR PAGO TAXA.");
}

// DIFERENÇA  ENTRE  DUAS DATAS EM DIAS 

var dataInicial = new Date();

var  dataFinal = new Date(2025, 5,  24);

var diferencaTempo = dataFinal.getTime() - dataInicial.getTime();

var diferencaDias = Math.ceil(diferencaTempo /  (24 * 60 * 60 * 1000));
console.log(diferencaDias);











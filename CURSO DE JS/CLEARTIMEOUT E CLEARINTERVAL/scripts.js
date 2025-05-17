//clearTimeout

var x = 0;

var myTimer = setTimeout(function(){

console.log("acionado!");

}, 3000);

x = 10;

if(x > 0){
    clearTimeout(myTimer);
};

console.log("O  x passou de zero");


//clearInterval 

var myInterval = setInterval(function(){
    console.log("testando 1...2...3");
}, 600);

setTimeout(function(){
    console.log("ja esta testado.");
    clearInterval(myInterval);
}, 4000);
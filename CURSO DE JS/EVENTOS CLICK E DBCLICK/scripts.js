var botao = document.getElementById("btn");

console.log(botao);

botao.addEventListener("click", function(){
    console.log("voce cliclou!");

    console.log(this);

    this.style.color = "blue";
});
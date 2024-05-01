/* OBJETOS SÃO VARIAVEIS COM VARIOS VALORES DENTRO DELAS, DENTRO DOS OBJETOS TAMBEM EXISTEM FUNÇÕ~ES QUE TAMBEM SAO CONHECIDAS COMO METODOS. */

let carro = 
{marca: "fiat",
modelo: "palio", 
ano: 2013,
placa: "ABC-123", 
buzina: function() {
    alert("biiiiiiiiiiiiiiiiiiii");
}
, completo: function(){
    return "A marca e  " + this.marca + " e o modelo e " + this.modelo
}
}
console.log(carro.completo());



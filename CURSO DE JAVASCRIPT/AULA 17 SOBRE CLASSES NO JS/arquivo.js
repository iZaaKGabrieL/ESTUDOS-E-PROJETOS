/* Em 2015 foi introduzido no JavaScript as Classes. As classes são um conceito antigo na progamação e varias linguagens usam elas. Porem no JavaScript isso e relativamente Novo, por esse motivo muitas pessoas que estão querendo aprender JS tem muita dificuldade em aprender como as Classes funcionam.

Basicamete as Classes são como "FABRICAS" para criar objetos. 
Pode se dizer que são "funções especiais" para a criação de objetos.

Assim como as fabricas na vida real precisam das maquinas para construir os objetos, as classes no JavaScript usam um método chamado "constructor()" para fabricar objetos. */

class Carro {
    constructor(valor1, valor2, valor3){
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }
}

const camaro = new carro ("chevrolet", "camaro", 2018);
console.log(camaro);
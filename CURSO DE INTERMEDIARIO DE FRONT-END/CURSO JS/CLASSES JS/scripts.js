// GETTERS E SETTERS
//GETTER => E QUANDO O OBJETO E LIDO.
//SETTER => E QUANDO O OBJETO E ATRIBUIDO.
 //exemplo:
 
let user = {
      name: "Isaac",
     surname: "Gabriel",
     get NomeCompleto() {
        return `${this.name} ${this.surname}`;
}}


Object.defineProperty(user, "nomeDela", {
    get(){
        return `${this.name} ${this.surname}`;
    },

    set(value){
        [this.name, this.surname] = value.split(" ");
    }
})

user.nomeDela = "lili reinhart";

console.log(user.nomeDela); // lili reinhart
console.log(user.NomeCompleto); // Isaac Gabriel

for (let key in user) alert(key);

// IGNORE TUDO ACIMA.


//PARA CRIARMOS UMA CLASSE NO JS, PRECISAMOS DECLARAR A CLASSE COM A PALAVRA CHAVE "class" E O NOME DA CLASSE, EXEMPLO:

class triangulo{
    constructor(altura, largura){
        this.altura = altura;
        this.largura = largura;
    }
};


///EXPRESSÕES DE CLASSES E UMA OUTRA FORMA DE DEFINIR CLASSES, POREM ELAS PODEM SER DEFINIDAS COM NOME OU 
// NÃO. O NOME DA CLASSE QUE E DADO A UMA CLASSE E LOCAL CORPO DA CLASSE.

//EXEMPLO DE CLASSE SEM NOME:
const quadrado = class {
    construtor(lados){
        this.lados = lados
    }
};

//EXEMPLO COM NOME:
const quadradoComNome = class quadradoComNome{
    construtor(lados){
        this.lados = lados;
    }
};

//NOTA:
//AS EXPRESSÕES DE CLASSES  TAMBEM SOFREM COM O PROBLEMA DE HOISTING, OU SEJA ELAS SO PODEM SER USADAS APOS A DECLARAÇÃO DA MESMA, AO CONTRARIO DAS CLASSES DECLARADAS COM A PALAVRA CHAVE "class".
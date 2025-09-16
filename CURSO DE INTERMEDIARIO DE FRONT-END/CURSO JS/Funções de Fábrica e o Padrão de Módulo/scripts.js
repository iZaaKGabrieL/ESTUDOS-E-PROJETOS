function ContadorDeLike(){

    let likes = 0;
    return function() {
        likes++
        console.log("AGORA TEMOS UM TOTAL DE LIKES DE:", likes);
    }


}

const curtidas = ContadorDeLike();

curtidas();
curtidas();
curtidas();
curtidas();
curtidas();

console.log("============================IGNORA TUDO ACIMA================================");

const calculator = (function() {
    //ABAIXO ESTA AS FUNÇÕES PRIVADAS QUE SERVIRAM PARA SEREM USADAS PARA CALCULOS E NAO ESTARAM EXPOSTAS.

    const som = (a, b) => a + b;
    const divis = (a, b) => a / b;
    const subt = (a, b) => a - b;
    const multip = (a, b) => a * b;

    //APENAS OQUE ESTIVER DENTRO DO return SERA EXPOSTO E PODERAR SER USADO FORA DO MÓDULO
    return {som, divis, subt, multip};

})();

//EXEMPLOS ABAIXO:
console.log(calculator.som(10, 15));     // 25
console.log(calculator.multip(3, 3));    // 9
console.log(calculator.subt(80, 40));    // 40
console.log(calculator.divis(10, 2));    // 5



function Player(name, marker){
this.name = name;
this.marker = marker;
}


///METODOS ESTATICOS SÃO PARTES DA CLASSE QUE NAO PRECISAM DE OBJETOS PARA QUE FUNCIONEM, BASICAMENTE O OBJETO QUE PRECISA DOS METODOS ESTATICOS.
//EXEMPLO ABAIXO:
class Empresa{

    constructor(funcionario, cracha){
    this.funcionario = funcionario;
    this.cracha = cracha; 
    };

     novoFuncionario(){
        console.log(`Bem-vindo ${this.funcionario} ao time!`);


    }

    static CriarCrachar(cracha){
        return `Seu crachá e ${cracha}`;
    }
};

const funcionario1 = new Empresa("Isaac", "34hfo1390fa000");
funcionario1.novoFuncionario(); // Bem-vindo Isaac ao time, seu crachá é hfo1390fa00034
console.log(Empresa.CriarCrachar('34hfo1390fa000')); // Seu crachá e hfo1390fa00034


///QUANDO UM METODO ESTATICO OU PROTOTIPO E CHAMADO SEM UM OBJETO ELE RETORNA UM ERRO, EXEMPLO ABAIXO:

class aviao{
    decolar() {
        return this;
    }

    static pousar() {
        return this;
    };   
};

let plane = new aviao();
plane.decolar(); // aviao {}

///=======================IGNORA TUDO ACIMA=========================

let aviazinho = plane.decolar; // Erro, pois o metodo pousar é estatico e nao pode ser chamado sem um objeto.
aviazinho(); // Erro;


//Resumo — Symbol.species
//👉 O que é?

//É um symbol especial que define qual construtor será usado quando métodos como map(), filter(), slice() criarem um novo objeto.

//👉 Sem Symbol.species
class MinhaArray extends Array {}
const arr = new MinhaArray(1, 2, 3);

const novo = arr.map(x => x * 2);

console.log(novo instanceof MinhaArray); // true ✅


//O método (map) cria uma nova instância da mesma classe (MinhaArray).

//👉 Com Symbol.species
class MinhaArray extends Array {
  static get [Symbol.species]() {
    return Array; // manda criar Array normal
  }
}

const arrei = new MinhaArray(1, 2, 3);
const novu = arrei.map(x => x * 2);

console.log(novo instanceof Array);      // true ✅
console.log(novo instanceof MinhaArray); // false ❌


///=======================IGNORA TUDO ACIMA=========================


/// O "SUPER" SERVE PARA CHAMAR METODOS DA CLASSE PAI, EXEMPLO ABAIXO:


class gato{
    constructor(nome){
        this.nome = nome;   
}


falar(){
    console.log(`${this.nome}` + "diz: Miau!");
}
};
class gatito extends gato{
    falar(){
        super.falar();
        console.log(`${this.nome}` + "diz: MIAU MIAUUUUUUUUUUUUUUUUUUUUUUUUUUU!");
    }

};

    let novogatinho = new gatito("bilu");
    novogatinho.falar();


console.log(this);

let pessoa = {

    nome: "Isaac",
    idade: 19,


    meuNome: function(){
        console.log("meu nome e " + this.nome);
    },

    Aniversario: function(){
        this.idade += 1;
    }
}

pessoa.meuNome();

pessoa.Aniversario();
console.log(pessoa.idade);
const obj = [
    {
    "nome": "Isaac",
    "idade": 30,
    "estudando": true,
    "hobbies": ["jogar", "ler livros ou HQ", "Assistir filmes e series"]
},
];

//CONVERTER OBJS JS PARA JSON E ENVIAR PARA APIS OU SERVIDORES:

const dadosJson = JSON.stringify(obj);

console.log(dadosJson);


//PARA CONVERTER DE JSON PARA OBJETO:

const objdados = JSON.parse(dadosJson);

console.log(objdados);
//___________________________


//este parametro serve para percorrer objeto, dentro dos colchetes voce pode escolher como cada objeto deve ser tratado.


objdados.map((pessoa) => {
    console.log(pessoa.nome)
})
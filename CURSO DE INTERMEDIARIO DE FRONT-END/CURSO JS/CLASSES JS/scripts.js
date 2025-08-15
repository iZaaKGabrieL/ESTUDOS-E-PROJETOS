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
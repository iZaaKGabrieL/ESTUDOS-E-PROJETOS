function Player(name, marker){
    this.name = name;
    this.marker = marker;

    this.sayname = function sayname(){
    console.log(this.name);
    console.log(`escolheu: ${this.marker}`);
}

};

const jogador = new Player('isaac', '0');
const jogador2 = new Player('Jarvis', 'X');

jogador.sayname();
jogador2.sayname();


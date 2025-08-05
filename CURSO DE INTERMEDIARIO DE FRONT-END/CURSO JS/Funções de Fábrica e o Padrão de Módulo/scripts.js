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

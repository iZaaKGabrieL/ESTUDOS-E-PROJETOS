function mostrar(num){
    console.log("O calculo resultou nos numeros: " + num);
};



function soma(a, b, callback){
    var op = a + b;
    callback(op);


};


function multipli(a, b, callback){
    var op = a * b;
    callback(op);
    
};

soma(3, 3, mostrar);

multipli(3, 6, mostrar);
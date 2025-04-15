//parsefloat() --> transforma strings em numeros flutuantes.

console.log(parseFloat('45.80'));

// parseInt() --> faz basicamente o mesmo que o de cima

console.log(parseInt('24'));

// toFixed() --> arredonda um numero grande para um resumido.

console.log(24.8473193842.toFixed(1 ));

//isNaN() --> serve para verificar se tem um numero, se tiver vai resultar em false e se não tiver vai dar true .

console.log(isNaN('ola mundo'));
console.log(isNaN(22));

//Number.MAX_VALUE E O MAIOR VALOR QUE O JS RECONHECE, ACIMA DISSO ELE CONSIDERA COMO INFINITE. Numbere.MIN_VALUE E MINIMO VALOR QUE O JS RECONHECE.

 console.log(Number.MAX_VALUE);
 console.log(Number.MIN_VALUE);
//lenght --> DA UM NUMEROS DE ELEMENTOS PARA O ARRAY
var nums = [1,2,3,4,5,6,7,8,9];
console.log(nums.length);

//push --> serve para adicionar elementos em um array
console.log(nums.push(23));

//pop() --> remove um elemento do fim de um array

nums.pop();
console.log(nums);

//unshift --> adiciona elementos no começo do array

nums.unshift(" ↙ oia os number ai ↙ ");
console.log(nums);

//shift --> serve para remover elementos do começo do array

nums.shift();
console.log(nums);

// splice --> podemos adiciona um elemento no meio de uma array. Ex: nums.splice(numero do indice, deletecount(0), valor que deseja adiciona.)

nums.splice(3, 0, 1980);
console.log(nums);


//indexOF() --> acha o indice de um elemento da array

console.log(nums.indexOf(5));

//join --> transformar Arrays em Strings

console.log(nums.join(" "));

//reverse --> Inverte Arrays

console.log(nums.reverse()); 
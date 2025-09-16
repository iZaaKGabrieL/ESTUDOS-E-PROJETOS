/// esse arquivo poderá importar o que precisar. Não importa? Não pode usá-la. Para fazer importações nomeadas, precisamos especificar os nomes dos itens que queremos importar { }e fornecer o caminho para o arquivo de onde estamos importando (quando lidarmos com a importação de bibliotecas de terceiros posteriormente, você pode usar apenas o nome da biblioteca em vez do caminho completo do arquivo).

//ABAIXO TEMOS UM EXEMPLO DE IMPORTAÇÃO NOMEADA E PADRÃO;

import greeting,  {farewell}  from "./scripts1.js"; // importação nomeada

console.log(greeting);// Output: Hello, Odinite!
console.log(farewell); // Output: Goodbye, Odinite!


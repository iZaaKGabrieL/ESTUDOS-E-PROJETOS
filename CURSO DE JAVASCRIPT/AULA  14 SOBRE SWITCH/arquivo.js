/* E usado para realizar ações em diferentes condições no mesmo bloco de verificação. Caso a condição não seja compativel não será executada e o valor padrão será acionado . 
Ele e bastante parecido com o if e else porém ele tem algumas funções a mais .
Como por exemplo o "case" que e usado para criar os casos e o "default que e usado para acionar uma resposta padrão, quando nenhuma outra for acionada e o "break" . Exemplo de switch

switch (comando ou  função ou valor da variavel){
        case "valor":
            oque vai acontecer
            break;

        case "vermelho":
           oque vai acontecer
            break;

        case "valor":
            oque vai acontecer

        case "valor de algo":
            oque vai acontecer 
            break;
        default:
            se nada acima acontecer, vai acontecer oque estiver aqui.
Normalmente isso e usado dentro de funções .

O método  "nome da variavel.toLowerCase();" e usado para deixar letras minusculas!
*/

function verificarCor() {
    let cor = document.getElementById("cor").value;

    switch (cor){
        case "azul":
            document.body.style.backgroundColor = "blue";
            break;
        case "vermelho":
            document.body.style.backgroundColor = "red";
            break;
        case "verde":
            document.body.style.backgroundColor = "green";
            break;
        case "laranja":
            document.body.style.backgroundColor = "yellow";
            break;
        default:
    };
}
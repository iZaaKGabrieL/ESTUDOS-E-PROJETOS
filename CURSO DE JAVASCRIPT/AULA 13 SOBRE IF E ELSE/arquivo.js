/*if e else são usados quando queremos que algo acontece apenas quando determinada coisa acontecer no caso usariamos o IF, caso a determinada coisa não aconteça, usamos o ELSE .
Isso e , se(if) determinada coisa for verdadeira, vai acontecer algo ou alguma ação, se não(else), ira acontecer outra coisa .
*/

/*var hora = new Date().getHours();
 alert(hora);

 if (hora <12){
    alert("bom dia");
 }
 else if (hora <18){
    alert("boa tarde");
 }

 else{
    alert("boa noite");
 }*/

 function verificar() {
    let nome = document.getElementById("nome").value;

    if (nome == ""  ||  nome == null){
        let p = document.getElementById("teste");
        p.innerHTML = "o campo nao pode ficar vazio.";
        p.style.color = "red";

    }else{
        let p = document.getElementById("teste");
        p.innerHTML = "TUDO CERTO COM SEU CADASTRO .";
        p.style.color ="lightblue";
    }
 }
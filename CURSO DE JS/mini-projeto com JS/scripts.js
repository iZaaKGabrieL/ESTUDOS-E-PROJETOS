
//evento que adiciona tarefa

function addTask() {

const tituloTarefa = document.querySelector("#bloco").value;

if(tituloTarefa){

//clonando template

const template = document.querySelector(".template");

const templateClonado = template.cloneNode(true);

//adiciona titulo
templateClonado.querySelector(".texto").textContent = tituloTarefa;

//removendo classes desnecessarias

templateClonado.classList.remove("template");
templateClonado.classList.remove("hide");


const list = document.querySelector("#anotacao");

list.appendChild(templateClonado);

//remover tarefa

const removeTarefa = templateClonado.querySelector(".botaoDesfeito").addEventListener("click", function(){
    botaodesfeito(this);
});


function botaodesfeito(task){
    task.parentNode.remove(true);
};


//concluir tarefa

const concluirTarefa = templateClonado.querySelector(".botaoFeito").addEventListener("click", function() {
    botaofeito(this);

 
});

function botaofeito(task){
    const tarefaCompleta = task.parentNode;
    tarefaCompleta.classList.toggle("done");
};   


//LIMPAR INPUT

document.querySelector("#bloco").value = ""
};

};






//evento de tarefa

const btn = document.querySelector("#btn");

btn.addEventListener("click", function(e){
    e.preventDefault();

    addTask();

});
var botaoadicionar = document.querySelector("#adicionar-paciente");
botaoadicionar.addEventListener("click", function(event){
    event.preventDefault();

var form = document.querySelector("#form-adiciona");
// extraindo as informações do paciente do form
var paciente = obtempacientedoformulario(form);

// criando a tabela do paciente



var erro = validapaciente(paciente);

if(erro.length > 0){
  exibemensagemdeerro(erro);

    return;
}



 adicionapacientenatabela(paciente);
 
 


form.reset();
var mensagemerro = document.querySelector("#mensagem-erro");
mensagemerro.innerHTML = "";

});

function adicionapacientenatabela(paciente){
    var pacientetr  = montatr(paciente); // parei aqui
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacientetr);
}



function exibemensagemdeerro(erro){
    var ul = document.querySelector("#mensagem-erro");
    
    ul.innerHTML = "";

    erro.forEach(function(erro){
var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
    });


}


function obtempacientedoformulario(form){
 var paciente = {
     nome: form.nome.value,
     peso:form.peso.value,
    altura:form.altura.value,
    gordura:form.gordura.value,
    imc: calculaimc(form.peso.value, form.altura.value)

    

 }


 return paciente;

}


function montatr(paciente){
    var pacientetr = document.createElement("tr");
 pacientetr.classList.add("paciente");

 pacientetr.appendChild(montatd(paciente.nome,"info-nome"));
 pacientetr.appendChild(montatd(paciente.peso,"info-peso"));
 pacientetr.appendChild(montatd(paciente.altura,"info-altura"));
 pacientetr.appendChild(montatd(paciente.gordura,"info-gordura"));
 pacientetr.appendChild(montatd(paciente.imc,"info-imc"));
 
// adicionando o paciente na tabela

    return pacientetr;
}


function montatd(dados,classe){
    var td =document.createElement("td");
    td.textContent = dados;
    td.classList.add(classe);
    return td;
}


function validapaciente(paciente){

    var erros = [];

    if(paciente.nome.length == 0)erros.push("O nome não pode ser em branco");
    if(paciente.gordura.length ==0)erros.push("A gordura não pode ficar vazio");
    if(paciente.altura.length ==0)erros.push("A altura não pode ficar vazio");
    if(paciente.peso.length ==0)erros.push("O peso não pode ficar vazio");

    if(!validapeso(paciente.peso))erros.push("Peso está inválido ");
   
    if(!validaaltura(paciente.altura)) erros.push(" Altura está inválida");
    
    
    
 
    return erros;
}
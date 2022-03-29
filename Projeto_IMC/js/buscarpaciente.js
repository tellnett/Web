var botaoadicionar = document.querySelector("#buscar-paciente");
botaoadicionar.addEventListener("click",function(){
    console.log("buscando paciente");

    var xhr = new XMLHttpRequest();

    xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes");
    
    xhr.addEventListener("load",function(){
        var erroajax = document.querySelector("#erroajax");
        if(xhr.status ==200){
            erroajax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
           
            pacientes.forEach(function(paciente) {
                adicionapacientenatabela(paciente);
                
            });
        }
        else{
            console.log(xhr.status);
            console.log(xhr.responseText);
        
        
        erroajax.classList.remove("invisivel");

        }


    });
    
    xhr.send();

});
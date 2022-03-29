
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutrionista 1";



var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validapeso(peso);
    var alturaEhValida = validaaltura(altura);

    if (!pesoEhValido) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-20");
    }

    if (!alturaEhValida) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
      
    }

  if (alturaEhValida && pesoEhValido) {
        var imc = calculaimc(peso,altura);
        tdImc.textContent = imc;
        if(imc < 26){
            paciente.classList.add("paciente-20");

        }
        if(imc > 27){
            paciente.classList.add("paciente-27");
        }
        if(imc >= 28){
            paciente.classList.add("paciente-28");
        }
        
       
    }

    function validapeso(peso){
        if(peso >=0  && peso< 1000){
            return true;
    }
    else{
        return false;
    }
    }

    function validaaltura(altura){
        if(altura >=0 && altura<= 3.0){
        return true;
        }
    else{
        return false;
    }
}
function calculaimc(peso, altura){
    var imc = 0;
    imc = peso/(altura*altura);
    return imc.toFixed(2);
   
    }

}



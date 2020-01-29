var botãoAdicionar = document.querySelector("#adicionar-paciente");

botãoAdicionar.addEventListener("click", function(event){
	event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    //Extraindo informações do paciente do form

    var paciente = obtemPacienteDoFormulario(form);

    //chama a função de montar tabela passando o paciente
    var pacienteTr = montaTr(paciente)

    //Validando o usuario

    var errors = validaPaciente(paciente);


    if(errors.length > 0){
        exibiMensagensDeErro(errors);
        return;
    }

	var tabela = document.querySelector("#tabela-pacientes");
  
    tabela.appendChild(pacienteTr);
    
    form.reset();
    var mensagensErro = document.querySelector("#mensagens-error");
    mensagensErro.innerHTML = "";
});


titulo.addEventListener("click", function(){
	console.log("Função anonima");
});

function mostraMensagem(){
	console.log("olá eu fui clicado");
}

function exibiMensagensDeErro(errors){
    var ul = document.querySelector("#mensagens-error");
    ul.innerHTML = "";

    errors.forEach(function(error){
        var li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
    })
}




function obtemPacienteDoFormulario(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente
}


function montaTr(paciente){
    // Cria a Tr do paciente
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    // Cria a Td do paciente e adicionando o paciente na tabela
	pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
	pacienteTr.appendChild(montaTd(paciente.peso,"info=peso"));
	pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"))

    return pacienteTr;
}

function montaTd(dado, clase){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(clase);

    return td;
}

function validaPaciente(paciente){

    var errors = [];

    if(paciente.nome.length == 0){
        errors.push("Preencher o nome")
    }

    if(paciente.peso.length == 0){
        errors.push("Preencher o peso")
    }

    if(!validaPeso(paciente.peso)){
        errors.push("Peso é invalido");
    }

    if(paciente.altura.length == 0){
        errors.push("Preencher a altura");
    }

    if(!validaAltura(paciente.altura)){
        errors.push("Altura é invalida");
    }

    if (paciente.gordura.length == 0){
        errors.push("Preencher a gordura");
    }


    return errors;
}
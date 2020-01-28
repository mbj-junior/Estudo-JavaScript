var botãoAdicionar = document.querySelector("#adicionar-paciente");

botãoAdicionar.addEventListener("click", function(event){
	event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    //Extraindo informações do paciente do form

    var paciente = obtemPacienteDoFormulario(form);

    // Cria a Tr do paciente
    var pacienteTr = document.createElement("tr");

    // Cria a Td do paciente  
	var nomeTd = document.createElement("td");
	var pesoTd = document.createElement("td");
	var alturaTd = document.createElement("td");
	var gorduraTd = document.createElement("td");
	var imcTd = document.createElement("td");

	nomeTd.textContent = nome;
	pesoTd.textContent = peso;
	alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calculaImc(peso,altura);

    // Adicionando o paciente na tabela
	pacienteTr.appendChild(nomeTd);
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd)

	var tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(pacienteTr);

});



titulo.addEventListener("click", function(){
	console.log("Função anonima");
});

function mostraMensagem(){
	console.log("olá eu fui clicado");
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
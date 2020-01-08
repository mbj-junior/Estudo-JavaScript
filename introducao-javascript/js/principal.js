var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
	console.log(pacientes[i]);

	var paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura")
	var altura = tdAltura.textContent;

	var tdImc = paciente.querySelector(".info-imc");

	var pesoEhValido = true;
	var alturaEhValida = true;

	if (peso < 5 || peso >1000) {
		console.log("peso invalido");
		pesoEhValido = false;
		tdImc.textContent = "Peso Invalido";
		paciente.classList.add("paciente-invalido")
	}

	if (altura < 0 || altura > 3.0) {
		console.log("autura invalida");
		alturaEhValida = false;
		tdImc.textContent = "Altura Invalida"
		paciente.classList.add("paciente-invalido")
	}


	if (alturaEhValida && pesoEhValido) {
		var imc = peso / (altura * altura);
		tdImc.textContent = imc.toFixed(2);

	}

}

var botãoAdicionar = document.querySelector("#adicionar-paciente");

botãoAdicionar.addEventListener("click", function(event){
	event.preventDefault();

	var form = document.querySelector("#form-adiciona");

	var nome = form.nome.value;
	var peso = form.peso.value;
	var altura = form.altura.value;
	var gordura = form.gordura.value;

	var pacienteTr = document.createElement("tr");
		var nomeTd = document.createElement("td");
		var pesoTd = document.createElement("td");
		var alturaTd = document.createElement("td");
		var gorduraTd = document.createElement("td");
		var imcTd = document.createElement("td");

	nomeTd.textContent = nome;
	pesoTd.textContent = peso;
	alturaTd.textContent = altura;
	gorduraTd.textContent = gordura;

	pacienteTr.appendChild(nomeTd);
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(gorduraTd);

	var tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(pacienteTr);


});



titulo.addEventListener("click", function(){
	console.log("Função anonima");
});

function mostraMensagem(){
	console.log("olá eu fui clicado");
}





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
		var imc = calculaImc(peso,altura);
		tdImc.textContent = imc;

	}

}

function calculaImc(peso,altura){
	var imc = 0;

	var imc = peso / (altura * altura);
	
	return imc.toFixed(2);
}

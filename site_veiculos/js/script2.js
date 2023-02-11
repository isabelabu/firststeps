function Calcular() {
	var sv = parseInt(document.getElementById('selveiculo').value);
	var vv = parseInt(document.getElementById('versaoveiculo').value);
	var b = parseInt(document.getElementById('b').value);
	var c = parseInt(document.getElementById('c').value);
	var entrada = parseInt(document.getElementById('entrada').value);
	var meses = parseInt(document.getElementById('meses').value);

	if (parseInt(document.getElementById('mod1').selected === true) {
		var veiculo = 13500;
	} else if (sv == mod2) {
		var veiculo = 24500;
	} else if (sv == mod3) {
		var veiculo = 90000;
	} else if (sv == mod4) {
		var veiculo = 30200;
	} else if (sv == mod5) {
		var veiculo = 49900;
	} else if(sv == mod6) {
		var veiculo = 60000;
	} else if(sv == mod7) {
		var veiculo = 22700;
	} else if(sv == mod8) {
		var veiculo = 89990;
	} else if(sv == mod9) {
		var veiculo = 25000;
	} else if(sv == mod10) {
		var veiculo = 30000;
	} else if(sv == mod11) {
		var veiculo = 55700;
	} else if(sv == mod12) {
		var veiculo = 51900;
	} else if(sv == mod13) {
		var veiculo = 43500;
	} else if(sv == mod14) {
		var veiculo = 38900;
	} else if(sv == mod15) {
		var veiculo = 15000;
	} else if(sv == mod16) {
		var veiculo = 35200;
	} else if(sv == mod17) {
		var veiculo = 74990;
	} else if(sv == mod18) {
		var veiculo = 150000;
	} else if(sv == mod19) {
		var veiculo = 85700;
	} else if(sv == mod20) {
		var veiculo = 69900;
	} else if(sv == mod21) {
		var veiculo = 6990;
	} else if(sv == mod22) {
		var veiculo = 8500;
	} else if(sv == mod23) {
		var veiculo = 14100;
	} else if (sv == mod24){
		var veiculo = 12990;
	} else {
		alert("Selecione um veículo");
	}

	var porcentagem = veiculo*20/100;
	var veiculofinal = veiculo + porcentagem;

	if (vv == b) {

        var financiamento = veiculo - entrada;
		
	} else if (vv == c) {
		var financiamento = veiculofinal - entrada;
	} else{
		alert("Selecione uma versão");
	}

	var parcelas = financiamento/meses;
	var juros = parcelas*1.38/100;

	alert(financiamento);
}
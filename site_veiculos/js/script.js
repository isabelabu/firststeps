function Calcular() {
	var nome = document.getElementById('txtnome').value;
	var entrada = document.getElementById('entrada').value;
	var meses = document.getElementById('meses').value;
	var val = 0;
	var sv = document.getElementById('selveiculo').value;
	var vv = parseFloat(pegarValorRadio('versaoveiculo'));

	if (sv === 'mod1') {
		val = 13500;
	} else if (sv === 'mod2') {
		val = 24500;
	} else if (sv === 'mod3') {
		val = 90000;
	} else if (sv === 'mod4') {
		val = 30200;
	} else if (sv === 'mod5') {
		val = 49900;
	} else if (sv === 'mod6') {
		val = 60000;
	} else if (sv === 'mod7') {
		val = 22700;
	} else if (sv === 'mod8') {
		val = 89990;
	} else if (sv === 'mod9') {
		val = 25000;
	} else if (sv === 'mod10') {
		val = 30000;
	} else if (sv === 'mod11') {
		val = 55700;
	} else if (sv === 'mod12') {
		val = 51900;
	} else if (sv === 'mod13') {
		val = 43500;
	} else if (sv === 'mod14') {
		val = 38900;
	} else if (sv === 'mod15') {
		val = 15000;
	} else if (sv === 'mod16') {
		val = 35200;
	} else if (sv === 'mod17') {
		val = 74990;
	} else if (sv === 'mod18') {
		val = 150000;
	} else if (sv === 'mod19') {
		val = 85700;
	} else if (sv === 'mod20') {
		val = 69900;
	} else if (sv === 'mod21') {
		val = 6990;
	} else if (sv === 'mod22') {
		val = 8500;
	} else if (sv === 'mod23') {
		val = 14100;
	} else if (sv === 'mod24') {
        val = 12990;
	} else {
		alert("Selecione um veículo");
	}

	var porcentagem = val*20/100;
	var veiculo = val + porcentagem;
	var versao = vv > 0? "Completo" : "Básico";
	var financiamento = veiculo + vv;
	var parcelas = financiamento/meses;
	var juros = parcelas*1.38/100;


    var msg = "<h3>Parcelas e Financiamento</h3>";
    msg += "<p>Cliente: " + nome.toLocaleUpperCase() + "</p>";
    msg += "<p>Veículo: " + veiculo.toLocaleUpperCase() + " - Valor: " + val.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) + "</p>";

    msg += "<p>Versão: " + versao.toLocaleUpperCase(); + " - Valor: " + vv.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) + "</p>";
    msg += "<p>Valor de entrada: " + entrada.toLocaleUpperCase('pt-BR', {style: 'currency', currency: 'BRL'}) + "</p>";
    msg += "<p>Desconto: " + porcentagem + "</p>";
    msg += "<p>Meses a pagar: " + meses + "</p>";

    msg += "<p>Valor das parcelas: " + parcelas.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) + "</p>";
    msg += "<p>Taxa de juros: " + juros.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) + "</p>";


    document.getElementById('res').innerHTML = msg;
    //alert(msg);


}
function pegarValorRadio(name) {
    var rads = document.getElementsByName(name);

    for (var i = 0; i < rads.length; i++) {
        if (rads[i].checked) {
            return rads[i].value;
        }
    }
    return null;
}
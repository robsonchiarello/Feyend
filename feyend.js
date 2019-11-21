var area;
var sala;
var salaatual;

var host = "192.168.25.72";

function replicatevariables(){
	var queryString = decodeURIComponent(window.location.search);
	queryString = queryString.substring(1);
	var queries = queryString.split("&");

	area = queries[0];
	sala = queries[1];
	salaatual = queries[2];

}

function feyendinstructions(){
	var queryString = decodeURIComponent(window.location.search);
	queryString = queryString.substring(1);
	var queries = queryString.split("&");

	area = queries[0];
	sala = queries[1];

	document.getElementById('instructionstitle').innerHTML = '<h class="texto_titulos" style="font-size: 18px">Siga as instruções abaixo para encontrar a sala '+queries[1]+':</h>';	
}

function feyendnextinstructions(){
	var queryString = decodeURIComponent(window.location.search);
	queryString = queryString.substring(1);
	var queries = queryString.split("&");

	area = queries[0];
	sala = queries[1];
	salaatual = queries[2];

	if(salaatual == sala){
		document.getElementById('instructionstitle').innerHTML = '<h class="texto_titulos" style="font-size: 18px">Você chegou à sua sala: '+queries[1]+'!</h>';	
		
		for (var i = 0; i < document.getElementsByClassName('linhainstrucao').length; i++) {
			document.getElementsByClassName('linhainstrucao')[i].innerHTML = '';
		}
		document.getElementById('botao').innerHTML = ' <input id="inicio" type="button" name="botao-ptonyo" value="Voltar ao Início" onclick="chamainicio()" class="botaosala"/>';
	} else {
		document.getElementById('instructionstitle').innerHTML = '<h class="texto_titulos" style="font-size: 18px">Siga as instruções abaixo para encontrar a sala '+queries[1]+':</h>';	
	}
}

function salvalocal(id){
	area = id;
	document.getElementById(id).className = "botaoareaselected";
	document.getElementById(id).disabled = true;
	if(id != 'GA'){
		document.getElementById('GA').className = "botaoarea";
		document.getElementById('GA').disabled = false;
	}
	if(id != '1A'){
		document.getElementById('1A').className = "botaoarea";
		document.getElementById('1A').disabled = false;
	}
	if(id != '1B'){
		document.getElementById('1B').className = "botaoarea";
		document.getElementById('1B').disabled = false;
	}
	if(id != '1D'){
		document.getElementById('1D').className = "botaoarea";
		document.getElementById('1D').disabled = false;
	}
	if(id != '1E'){
		document.getElementById('1E').className = "botaoarea";
		document.getElementById('1E').disabled = false;
	}
	if(id != '2A'){
		document.getElementById('2A').className = "botaoarea";
		document.getElementById('2A').disabled = false;
	}
	if(id != '2B'){
		document.getElementById('2B').className = "botaoarea";
		document.getElementById('2B').disabled = false;
	}
	if(id != '2D'){
		document.getElementById('2D').className = "botaoarea";
		document.getElementById('2D').disabled = false;
	}
	if(id != '2E'){
		document.getElementById('2E').className = "botaoarea";
		document.getElementById('2E').disabled = false;
	}
	
}

function salvasala(id){
	sala = id;
	document.getElementById(id).className = "botaosalaselected";
	document.getElementById(id).disabled = true;
	if(id != '1B01'){
		document.getElementById('1B01').className = "botaosala";
		document.getElementById('1B01').disabled = false;
	}
	if(id != '1B02'){
		document.getElementById('1B02').className = "botaosala";
		document.getElementById('1B02').disabled = false;
	}
	if(id != '1B03'){
		document.getElementById('1B03').className = "botaosala";
		document.getElementById('1B03').disabled = false;
	}
	if(id != '1B04'){
		document.getElementById('1B04').className = "botaosala";
		document.getElementById('1B04').disabled = false;
	}
	if(id != '1B05'){
		document.getElementById('1B05').className = "botaosala";
		document.getElementById('1B05').disabled = false;
	}
	if(id != '1B06'){
		document.getElementById('1B06').className = "botaosala";
		document.getElementById('1B06').disabled = false;
	}
}

function chamainicio(){

window.location.href = "https://"+host+":4433/TCC/feyend.html";

}

function chamainstrucoes(){
//alert(area);
//alert(sala);
//window.location.href = "https://localhost:4433/TCC/feyendinstructions.html?"+area+"&"+sala;
window.location.href = "https://"+host+":4433/TCC/feyendinstructions.html?"+area+"&"+sala;

}

function chamaqrreader(){

//window.location.href = "https://localhost:4433/TCC/qrreader.html?"+area+"&"+sala;

var SO = getMobileOperatingSystem();

	if(SO == "Android"){
		window.location.href = "https://"+host+":4433/TCC/qrreader.html?"+area+"&"+sala;
	}

	if(SO == "iOS" ){

		window.location.href = "https://"+host+":4433/JsQRScanner-master/war/index.html?"+area+"&"+sala;

	}
}

function chamanextinstructions(area, sala, salaatual){

	window.location.href = "https://"+host+":4433/TCC/feyendnextinstructions.html?"+area+"&"+sala+"&"+salaatual;

}

function getMobileOperatingSystem() {
	var userAgent = navigator.userAgent || navigator.vendor || window.opera;

	  // Windows Phone must come first because its UA also contains "Android"
	if (/windows phone/i.test(userAgent)) {
	    return "Windows Phone";
	}

	if (/android/i.test(userAgent)) {
	    return "Android";
	}

	// iOS detection from: http://stackoverflow.com/a/9039885/177710
	if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
	    return "iOS";
	}

    
}
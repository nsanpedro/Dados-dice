//dado js
//var dado1 = $("dado1")

//dado1.val(dado());

function dado(){
	var resultado = (Math.round(Math.random()*5) + 1);	
	return resultado;
};

function borrar() {
	var resultado = "";
	return resultado;
}

$(document).ready(function() {
	$('button').on("click", function(){
		$('.ladoA').text(dado());
		$('.ladoB').text(dado());
	});
});



document.getElementById('converteste').onclick = function () {
	
	converter();
	
}

function converter() {
	
	var input_elements = document.getElementById('converter').getElementsByClassName('input1');
	
	var select_elements = document.getElementById('converter').getElementsByTagName('select');
	
	var x_val = input_elements[0].value;
	var conversion_value = select_elements[0].value;
	
	if(conversion_value == 'lei_eur') {
	
		if (x_val != '' && !isNaN(x_val) && x_val >= 0) {
		
			document.getElementById('results').innerHTML += leieur(x_val);
			
		} else { 
			
			
			alert('Nu se poate realiza conversia deoarece nu ati introdus un numar sau numarul introdus este negativ');
			
		}
		
		
	} else if(conversion_value == 'eur_lei') {
		
			if (x_val != '' && !isNaN(x_val) && x_val >= 0 ) {
			
				document.getElementById('results').innerHTML += eurlei(x_val);
		
			} else {
			
			alert('Nu se poate realiza conversia deoarece nu ati introdus un numar sau numarul introdus este negativ');
			
		}
	}
	
}

function leieur (a) {
	
	var rezultat = Number(a) / 4.76 ;
	
	var output = 'Suma de' + ' ' + a + ' ' + 'lei este echivalenta cu' + ' ' + rezultat + ' ' + 'euro' + '<br>';
	
	return output;
	
}

function eurlei (a) {
	
	var rezultat = Number(a) * 4.76 ;
	
	var output = 'Suma de' + ' ' + a + ' ' + 'euro este echivalenta cu' + ' ' + rezultat + ' ' + 'lei' + '<br>';
	
	return output;
	
}

	
	
	
			
	
	


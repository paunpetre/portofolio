
document.getElementById('calculeaza').onclick = function(ev) {
	
	ev.preventDefault();
	
	calcul();
	

}

function calcul() {
	
	var selected_val = document.getElementById('amount').value;
	var selected_options = document.getElementById('credit').getElementsByTagName('select');
	
	var yr_el = selected_options[0].value;
	var rate_el = selected_options[1].value;
	
	console.log(yr_el);
	console.log(rate_el);
	
	//cazul 1 : 5 ani
	
	if(yr_el == 1) {
		
		if(rate_el == 1) {
			
			document.getElementById('afis').innerHTML = "";
			
			for(let i = 1 ; i <= 60 ; i++) {
				
				var rez = selected_val / 60 + 3/100 * selected_val / 60;
				
				document.getElementById('afis').innerHTML += ' Rata' + ' '  + i + ' '  + '=' + ' ' +  rez.toFixed(2) + ' ' + 'lei'+ '<br>';
				
			}
			
			
		}
		
		if(rate_el == 2) {
			
			document.getElementById('afis').innerHTML = "";
			
			for(let i = 1 ; i <= 60 ; i++) {
				
				var rez = selected_val / 60 + 4/100 * selected_val / 60;
				
				document.getElementById('afis').innerHTML += ' Rata' + ' '  + i + ' '  + '=' + ' ' +  rez.toFixed(2) + ' ' + 'lei' + '<br>';
		
		
		
			}		
	
	
		}
		
		if(rate_el == 3) {
			
			document.getElementById('afis').innerHTML = "";
			
			for(let i = 1 ; i <= 60 ; i++) {
				
				var rez = selected_val / 60 + 5/100 * selected_val / 60;
				
				document.getElementById('afis').innerHTML +=  ' Rata' + ' '  + i + ' '  + '=' + ' ' +  rez.toFixed(2) + ' ' + 'lei' + '<br>';
		
		
		
			}		
		
		}
	
	}
	
	//cazul 2 : 10 ani
	
	if(yr_el == 2) {
		
		if(rate_el == 1) {
			
			document.getElementById('afis').innerHTML = "";
			
			for(let i = 1 ; i <= 120 ; i++) {
				
				var rez = selected_val / 120 + 3/100 * selected_val / 120;
				
				document.getElementById('afis').innerHTML += ' Rata' + ' '  + i + ' '  + '=' + ' ' +  rez.toFixed(2) + ' ' + 'lei' + '<br>';
		
		
			}
			
		}
		
		if(rate_el == 2) {
			
			document.getElementById('afis').innerHTML = "";
			
			for(let i = 1 ; i <= 120 ; i++) {
				
				var rez = selected_val / 120 + 4/100 * selected_val / 120;
				
				document.getElementById('afis').innerHTML += ' Rata' + ' '  + i + ' '  + '=' + ' ' +  rez.toFixed(2) + ' ' + 'lei' + '<br>';
		
		
			}
			
		}
		
		if(rate_el == 3) {
			
			document.getElementById('afis').innerHTML = "";
			
			for(let i = 1 ; i <= 120 ; i++) {
				
				var rez = selected_val / 120 + 5/100 * selected_val / 120;
				
				document.getElementById('afis').innerHTML += ' Rata' + ' '  + i + ' '  + '=' + ' ' +  rez.toFixed(2) + ' ' + 'lei' + '<br>';
		
		
			}
			
		}
		
		
	}
	
	//cazul 3 : 15 ani
	
	if(yr_el == 3) {
		
		if(rate_el == 1) {
			
			document.getElementById('afis').innerHTML = "";
			
			for(let i = 1 ; i <= 180 ; i++) {
				
				var rez = selected_val / 180 + 3/100 * selected_val / 180;
				
				document.getElementById('afis').innerHTML += ' Rata' + ' '  + i + ' '  + '=' + ' ' +  rez.toFixed(2) + ' ' + 'lei' + '<br>';
		
		
			}
			
		}
		
		if(rate_el == 2) {
			
			document.getElementById('afis').innerHTML = "";
			
			for(let i = 1 ; i <= 180 ; i++) {
				
				var rez = selected_val / 180 + 4/100 * selected_val / 180;
				
				document.getElementById('afis').innerHTML += ' Rata' + ' '  + i + ' '  + '=' + ' ' +  rez.toFixed(2) + ' ' + 'lei' + '<br>';
		
		
			}
			
		}
		
		if(rate_el == 3) {
			
			document.getElementById('afis').innerHTML = "";
			
			for(let i = 1 ; i <= 180 ; i++) {
				
				var rez = selected_val / 180 + 5/100 * selected_val / 180;
				
				document.getElementById('afis').innerHTML += ' Rata' + ' '  + i + ' '  + '=' + ' ' +  rez.toFixed(2) + ' ' + 'lei' + '<br>';
		
		
			}
			
		}
		
		
	}
	
	//cazul 4 : 20 ani
	
	if(yr_el == 4) {
		
		if(rate_el == 1) {
			
			document.getElementById('afis').innerHTML = "";
			
			for(let i = 1 ; i <= 240 ; i++) {
				
				var rez = selected_val / 240 + 3/100 * selected_val / 240;
				
				document.getElementById('afis').innerHTML += ' Rata' + ' '  + i + ' '  + '=' + ' ' +  rez.toFixed(2) + ' ' + 'lei' + '<br>';
		
		
			}
			
		}
		
		if(rate_el == 2) {
			
			document.getElementById('afis').innerHTML = "";
			
			for(let i = 1 ; i <= 240 ; i++) {
				
				var rez = selected_val / 240 + 4/100 * selected_val / 240;
				
				document.getElementById('afis').innerHTML += ' Rata' + ' '  + i + ' '  + '=' + ' ' +  rez.toFixed(2) + ' ' + 'lei' + '<br>';
		
		
			}
			
		}
		
		if(rate_el == 3) {
			
			document.getElementById('afis').innerHTML = "";
			
			for(let i = 1 ; i <= 240 ; i++) {
				
				var rez = selected_val / 240 + 5/100 * selected_val / 240;
				
				document.getElementById('afis').innerHTML += ' Rata' + ' '  + i + ' '  + '=' + ' ' +  rez.toFixed(2) + ' ' + 'lei' + '<br>';
		
		
			}
			
		}
		
		
	}
	
	//cazul 5 : 25 ani
	
	if(yr_el == 5) {
		
		if(rate_el == 1) {
			
			document.getElementById('afis').innerHTML = "";
			
			for(let i = 1 ; i <= 300 ; i++) {
				
				var rez = selected_val / 300 + 3/100 * selected_val / 300;
				
				document.getElementById('afis').innerHTML += ' Rata' + ' '  + i + ' '  + '=' + ' ' +  rez.toFixed(2) + ' ' + 'lei' + '<br>';
		
		
			}
			
		}
		
		if(rate_el == 2) {
			
			document.getElementById('afis').innerHTML = "";
			
			for(let i = 1 ; i <= 300 ; i++) {
				
				var rez = selected_val / 300 + 4/100 * selected_val / 300;
				
				document.getElementById('afis').innerHTML += ' Rata' + ' '  + i + ' '  + '=' + ' ' +  rez.toFixed(2) + ' ' + 'lei' + '<br>';
				
		
		
			}
			
		}
		
		if(rate_el == 3) {
			
			document.getElementById('afis').innerHTML = "";
			
			for(let i = 1 ; i <= 300 ; i++) {
				
				var rez = selected_val / 300 + 5/100 * selected_val / 300;
				
				document.getElementById('afis').innerHTML += ' Rata' + ' '  + i + ' '  + '=' + ' ' +  rez.toFixed(2) + ' ' + 'lei' + '<br>';
		
		
			}
			
		}
		
		
	}
	
	//cazul 6 : 30 ani
	
	if(yr_el == 6) {
		
		if(rate_el == 1) {
			
			document.getElementById('afis').innerHTML = "";
			
			for(let i = 1 ; i <= 360 ; i++) {
				
				var rez = selected_val / 360 + 3/100 * selected_val / 360;
				
				document.getElementById('afis').innerHTML += ' Rata' + ' '  + i + ' '  + '=' + ' ' +  rez.toFixed(2) + ' ' + 'lei' + '<br>';
		
		
			}
			
		}
		
		if(rate_el == 2) {
			
			document.getElementById('afis').innerHTML = "";
			
			for(let i = 1 ; i <= 360 ; i++) {
				
				var rez = selected_val / 360 + 4/100 * selected_val / 360;
				
				document.getElementById('afis').innerHTML += ' Rata' + ' '  + i + ' '  + '=' + ' ' +  rez.toFixed(2) + ' ' + 'lei' + '<br>';
		
		
			}
			
		}
		
		if(rate_el == 3) {
			
			document.getElementById('afis').innerHTML = "";
			
			for(let i = 1 ; i <= 360 ; i++) {
				
				var rez = selected_val / 360 + 5/100 * selected_val / 360;
				
				document.getElementById('afis').innerHTML += ' Rata' + ' '  + i + ' '  + '=' + ' ' +  rez.toFixed(2) + ' ' + 'lei' + '<br>';
		
		
			}
			
		}
		
		
	}
	
}
	
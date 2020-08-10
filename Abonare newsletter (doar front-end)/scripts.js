
document.getElementById('abonament').onclick = function(ev) {
	
	ev.preventDefault();
	
	abonare();
	
};


	function abonare() {
		
		var parent_divs = document.getElementById('main-content').getElementsByClassName('child');
		
		var is_valid = true;
		
		//incepem validarea de baza
		
		for(let i in parent_divs) {
			
			if(typeof parent_divs[i] == 'object') {
				
				let parent_div = parent_divs[i];
				let error_msg_el = parent_div.getElementsByClassName('error')[0];
				
				//console.log(parent_div);
				
				for(let j in parent_div.children) {
						
						if (typeof parent_div.children[j] == 'object') {
			
							let child_el = parent_div.children[j];
							
							console.log(child_el);
							
							//console.log(child_el);
					
							if (child_el.tagName == 'INPUT' && child_el.getAttribute('data-required') == 1) {
						
								if (child_el.value.length < 3) {
							
									error_msg_el.style.display ='block';
									is_valid = false;
							
								} else {
							
									error_msg_el.style.display = 'none';
							
								}
								
							
							}
					
					
						}
				
					}
			
				}
				
			}
		
		
		
		//stop validare de baza
		
		//incepem validarea particulara
		
		if (is_valid) {
		
		let email_val = document.getElementById('email').value;

		let email_arr = email_val.split('@');
		
		let email_cond1 = (email_arr.length != 2);
		let email_cond2 = (email_arr[0].length == 0);
		let email_cond3 = (email_arr[1] === undefined || email_arr[1].length == 0 || email_arr[1].split('.').length != 2);
		
		if (email_cond1 || email_cond2 || email_cond3) {
			
			is_valid = false;
			alert('Formatul adresei de e-mail nu este corect!');
			
		}		
		
	}
	
	if (is_valid) {
	
		document.getElementById('main-content').submit();
	
	}
				
}
			
		
		
		//stop validare particulara
		
	
			
	
	
	
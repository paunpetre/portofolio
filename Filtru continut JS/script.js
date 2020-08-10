
document.getElementById('search'). onclick = function(ev) {
	
	ev.preventDefault();
	
	filter();
	
	
};

document.getElementById('src').onkeypress = function(ev) {
	
  if(ev.keyCode == 13 || ev.which == 13) {
	  
	  ev.preventDefault();
	  
	  filter();
	  
	  
    }
  
  
}

function filter() {
	
	var input = document.getElementById('src').value;
	
	var input_el = input.toLowerCase();

	var price_sel = document.getElementById('price').value;
	
	//console.log(input_el);
	
	//console.log(price_sel);
	
	var content_elements = document.getElementById('content').getElementsByTagName('div');
	
	//console.log(content_elements);
	
	for( i = 0; i < content_elements.length; i++) {
		
		var content_element = content_elements[i];
		
		//console.log(content_element);
		
		let title_el = content_element.getAttribute('data-title');
		let descr_el = content_element.getAttribute('data-descr');
		let price_el = content_element.getAttribute('data-price');
		
		
		console.log(price_el);
		
		//console.log(title_el);
		
		let title_cond = ((title_el.includes(input_el) == true));
		let descr_cond = ((descr_el.includes(input_el) == true));
		
		if(!isNaN(input_el)) {
		
			if(price_sel == 'min') {
		
				if( price_el > Number(input_el)) {
			
					content_element.style.display = 'block';
			
			
				} else {
			
					content_element.style.display = 'none';
				
			
				}
			
			} else if (price_sel == 'max') {
		
				if( price_el > Number(input_el)) {
			
					content_element.style.display = 'none';
			
		
				} else {
			
					content_element.style.display = 'block';
			
			
				}
		
	
			}
			
		} else {

			if (input_el.length >= 3) {
		
				if(title_cond || descr_cond) {
			
					content_element.style.display = 'block';
			
				} else {
			
					content_element.style.display = 'none';
			
				}
					
			}
				
		}
		
	}
	
	if(input_el.length < 3) {
		
		alert('Introduceti minim 3 litere');
	
	}
	
}

jQuery(document).ready( function () {
	
	count = -1;
	
	jQuery('#readmore').click( function(ev) {
		
		ev.preventDefault();
		continut(this);
		count += 1;
			
		
	});
	
});

function continut(el) {
	
	var read = jQuery(el).attr('data-tab');

	jQuery.ajax ({
		
		type: 'GET',
		url: 'http://localhost/Jquery_AJAX/data.txt',
		data: {data: read},
		async: true,
		
		success: function(response) {
			
			var array = response.split('|');
			
			jQuery('#container').append(array[count] + '<br>');
			
				if(count == array.length - 1) {
					
					jQuery('#readmore').hide();
					
				}
				
		} ,
		
		error:function() {
			
			alert('eroare');
			
		} ,
			
	});
}
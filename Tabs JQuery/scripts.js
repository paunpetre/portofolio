



jQuery(document).ready( function() {
	
	jQuery('#sub').hide();
	jQuery('#sub1').hide();
	jQuery('#sub2').hide();
	
	jQuery('a').click(function(ev) {
		
		ev.preventDefault();
		
	});
	
	
	
	jQuery('#link').click(function() {
		
		jQuery('#sub').slideToggle(1000);

		//console.log(jQuery('#sub').toggle(1000));	
	});
	
	jQuery('#link1').click(function() {
		
		jQuery('#sub1').slideToggle(1000);
		
	});
	
	jQuery('#link2').click(function() {
		
		jQuery('#sub2').slideToggle(1000);
		
	});
	
});
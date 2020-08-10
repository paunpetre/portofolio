<?php

//PREIA REZULTATELE DE LA CONTROLLER SI LE UTLIZEAZA PENTRU A CREA INTERFATA WEB

namespace Views;

class Filter {
	
	private $results;
	private $input;
	
	public function __construct($a,$b) {//aici e contstruct-ul objectului view_obj creat in CONTROLLER
		
		$this->results = $a;
		$this->input = $b;
		//var_dump($this->input);
		//var_dump($this->results);
		
	}
	
	public function generate_output() {//functia asta va crea output-ul
	
		$history = $this->input['search'];
		
		//var_dump($history);
		
		$output = '<form>';
		
		$number_res = count($this->results);
		
		//var_dump($number_res);
		
		if($history != null) {
			
			$output .='<input type="text" name="search" value='.$history.' placeholder="Ex: Vasile"> ';
		
		} else if ($history == null || $history == ' ') {
			
			$output .='<input type="text" name="search" value="" placeholder="Ex: Vasile"> ';
			
		}
			
		$output .='<input type="submit" value="Filtrare">';
		$output .='</form><hr>';
		
		$output .= $number_res == 0 ? 'Nu am gasit niciun rezultat' : $number_res.' rezultat(e) gasite';
		
		$output .= '<ul>';
		
		foreach($this->results as $value) {
			
			$output .='<li>'.$value.'</li>';
			
		}
		
		$output .='</ul>';
		
		echo $output;//functia afiseaza la final output-ul
		
	}
	
	
}
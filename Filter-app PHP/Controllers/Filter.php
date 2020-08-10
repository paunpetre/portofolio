<?php

//SE OCUPA CU INPUTUL DE LA USER PE CARE-L FILTREAZA
//LE TRANSMITE LA MODEL
//PRIMESTE DE LA MODEL REZULTATELE SI LE TRANSMITE LA VIEWS

namespace Controllers;

class Filter {
	
	private $input;//inputul original
	private $filtered_input;//inputul filtrat
	
	public function __construct() {
		
		$this->input = !empty($_REQUEST) ? $_REQUEST : false;//verificare dacai inputul este empty sau nu
		$this->filter();//functia de filtrare
		//var_dump($this->input);	
	}
	
	
	
	private function filter() {
		
		if(!$this->input) {
			
			$this->filtered_input = false;//inputul filtrat este false daca cel initial este tot false
			
		} else {
			
			$this->filtered_input = array();//variabila pt inp filtrat e un array
			$this->filtered_input['search'] = trim($this->input['search']);//punem in array inputul filtrat
			
		}
		
	}
	
	
	
	public function display() {
		
		$model_obj = new \Models\Filter($this->filtered_input);//facem un obj folosind clasa filter din model,parametru inputul filtrat
		$results = $model_obj->get_results();//$results va primi array-ul cu continutul in urma interogarii
		
		$view_obj = new \Views\Filter($results,$this->input);//facem object folosind clasa filter din views, parametrul $results
		$view_obj->generate_output();//apelam functia care va genera output-ul final
		
		//var_dump($view_obj);
		
		
	}
	
	
}


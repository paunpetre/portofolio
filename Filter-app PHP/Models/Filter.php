<?php

//PREIA INPUT UL FILTRAT DE LA CONTROLLER
//INTEROGHEAZA BAZA DE DATE SI PRIMESTE REZULTATELE
//TRIMITE REZULTATELE LA CONTROLLER

namespace Models;

class Filter {
	
	private $filtered_input;//aici avem filtered_input-ul de la CONTROLLER
	
	private static $data = array(//asta e baza de date
		'Popescu Vasile',
		'Ionescu Mihai',
		'Teodorescu Ana',
		'Raymond Reddington',
		'Gustavo Fring',
		'James McGill',
		'Walter White',
		'Alvaro Morte',
		'Arturo Roman',
		'Hector Salamanaca',
		'Michael Scofield'	
	);
	
	public function __construct($a) {//construct-ul objectului creat IN CONTROLLER
		
		$this->filtered_input = $a;
		
	}
	
	public function get_results() {//obtinem rezultatele cu aceatsa functie
		
		if(!$this->filtered_input) {
			
			return self::$data;//daca nu exista fintered_input-ul, afisam tot(cu self::$data,pt ca e static)
			
		}
		
		$final_results = array();//aici vom avea array ul corespunzator in urma realizarii filtrarii pe baza 		
								//filtered_input-ului si a bazei de date
		
		
		foreach (self::$data as $value) {//parcurgem baza de date
			
			if (stripos($value,$this->filtered_input['search']) !== false) {//daca gasim inputul filtrat in baza de date
				
				$final_results[] = $value;//introducem valoarea in array ul de rezultate finale
				
			}
			
		}
		
		return $final_results;//returnam rezultatele finale
		
	}
	
}
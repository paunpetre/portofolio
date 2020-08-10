<?php

function calcul_produs() {
	
	$numbers_arr = explode(',',($_REQUEST['numbers']));
	
	$produs = 1;
	
	//var_dump($numbers_arr);
	
	foreach($numbers_arr as $v) {
		
		$v = trim($v);
		
		//var_dump($v);
		
		if(!is_numeric($v)) {
			
			return "Valoarea 'xyz' nu este de tip numeric. Va rugam corectati si incercati din nou.";
				
		} else {
			
			$produs = round(($produs * $v),2);
				
		}
			
	}
	
	$output = 'Produsul numerelor introduse de dvs. este '.$produs.'.'.'<hr>';
	
	session_start();
	
	if(!isset($_SESSION['output'])) {
		
		$_SESSION['output'] = $output;
		
	} else {
		
		$_SESSION['output'] .= $output;
		
	}
	
	return $_SESSION['output'];
	
		
}


	
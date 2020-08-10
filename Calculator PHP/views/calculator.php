<?php

namespace views;

class calculator {
	
	private $results;
	
	public function __construct($a,$b) {
		
		$this->results = $a;
		$this->operation_sel = $b;
		
	}
	
	function generate_output () {
		
		$operation_output = ' '.$this->operation_sel.' ';
		
		$output = '<html>';
		
		$output .='<h1>Calculator matematic proiect final</h1>';
		
		$output .='<form>';
		
		$output .='Introduceti X <input type="text" name="x" placeholder="Ex. 4">';
		$output .='<br>';
		$output .='<br>';
		$output .='Introduceti Y <input id="y" type="text" name="y" placeholder="Ex. 10">';
		$output .='<br>';
		$output .='<br>';
		
		$output .='Selectati operatia <select name="operation">';
			$output .='<option value="+">+</option>';
			$output .='<option value="-">-</option>';
			$output .='<option value="*">*</option>';
			$output .='<option value="/">/</option>';	
			$output .='<option value="%">%</option>';
			$output .='<option value="!">!</option>';
			$output .='<option value="^">^</option>';
		$output .='</select>';
		$output .='<br>';
		
		$output .='<br>';
		
		$output .='<input id="calc" type="submit" value="Calculeaza">';
		
		$output .= '<p style="font-size: 13px;">*Pentru efectuarea operatiei " ^ " -ridicare la putere- va rugam introduceri puterea in campul valorii Y </p>';
		
		$output .='</form>';
		
		$output .='<hr>';
		
		
		if(!empty($_REQUEST)) {
			
			if($this->results == 'NAN') {
				
				$output .= 'Va rugam introduceti doar numere.';
				
				
			} else if($this->results == 'div0') {
				
				$output .='Imposibil de realizat impartirea la 0.';
				
			} else if($this->results == '^neg') {
				
				$output .= 'Momentan imposibil de calculat ridicarea la putere negativa.';
				
			} else if($this->results == 'fact_neg') {
				
				$output .= 'Imposibil de calculat factorialul negativ.';
				
			} else {
				
				if($_REQUEST['y'] >= 0) {
			
					$output .='Rezultatul calculului '.$_REQUEST['x'].$operation_output.$_REQUEST['y'].' este '.$this->results;
					
				} else {
					
					
					$output .='Rezultatul calculului '.$_REQUEST['x'].$operation_output.'('.$_REQUEST['y'].') este '.$this->results;
					
				}
			
			}
			
		} else {
			
			$output .= 'Introduceti numerele cu care vreti sa efectuati calcule.';
			
			session_start();
					
			session_destroy();
			
		}
		
		
		
		echo $output;
		
		session_start();
		
			if(!isset($_SESSION['output'])) {
			
				$_SESSION['output'] = $output;
			
			} else {
			
				$_SESSION['output'] .= $output;
			
			}
		
		//var_dump($this->results);
		
	}
	
	
}

			
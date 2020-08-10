<?php

namespace models;

class calculator {
	
	private $input_x;
	private $input_y;
	private $operation_sel;
	
	
	
	public function __construct($a,$b,$c) {
		
		$this->input_x = $a;
		$this->input_y = $b;
		$this->operation_sel = $c;
		
	}
	
	
	public function operate() {
		
		$res = '';
		
		if(is_numeric($this->input_x) && is_numeric($this->input_y)) {
		
			if($this->operation_sel == '+') {
				
				$res = $this->input_x + $this->input_y;
				
			} else if($this->operation_sel == '-') {
				
				$res = $this->input_x - $this->input_y;
				
			} else if($this->operation_sel == '*') {
				
				$res = $this->input_x * $this->input_y;
				
			} else if($this->operation_sel == '/') {
				
				if($this->input_y == 0) {
					
					$res = 'div0';
					
				} else {
				
					$res = $this->input_x / $this->input_y;
				
				}
				
			} else if($this->operation_sel == '%') {
				
				if($this->input_y == 1 || $this->input_x == $this->input_y) {
					
					$res = '0';
					
				} else if($this->input_y == 0) {
					
					$res = 'div0';
					
				} else if($this->input_y !== 0 && $this->input_y !== 1) {
				
					$res = $this->input_x % $this->input_y;
				
				}
				
			} else if($this->operation_sel == '^') {
				
				if($this->input_y >=0) {
				
					$res = 1;
					
					if($this->input_y == 0) {
						
						$res = 1;
						
					} else {
					
						while($this->input_y > 0) {
							
							$res = $res * $this->input_x;
							$this->input_y --;
							
						}
					
					}
				
				} else {
					
					$res = '^neg';
					
				}
				
			} 
			
		} else if ($this->operation_sel == '!') {
			
			if($this->input_x > 1) {
				
				$res = 1;
					
				for($i = 1; $i <= $this->input_x; $i++) {
						
					$res = $res*$i;
						
				}
				
			} else if($this->input_x == 0 && $this->input_x == 1) {
				
				$res = 1;
				
			} else if($this->input_x < 0) {
				
				$res = 'fact_neg';
				
			}
				
				
		} else {
			
			$res = 'NAN';
			
		}
		
		//var_dump($res);
		
		return $res;
		
		
	}
	
	
}
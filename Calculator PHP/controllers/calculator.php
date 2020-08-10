<?php

namespace controllers;

class calculator {
	
	private $input_x;
	private $input_y;
	private $operation_sel;
	
	public function __construct() {
		
		if(!empty($_REQUEST)) {
			
			$this->input_x = $_REQUEST['x'];
			$this->input_y = $_REQUEST['y'];
			$this->operation_sel = $_REQUEST['operation'];

			
		}
		//var_dump($this->operation_sel);
		//var_dump($this->input_x);
		//var_dump($this->input_y);
	}
	
	
	public function display() {
		
		$model_obj = new \models\calculator($this->input_x,$this->input_y,$this->operation_sel);
		$results = $model_obj->operate();
		
		$view_obj = new \views\calculator($results,$this->operation_sel);
		$view_obj->generate_output();
		
	}
	
	
}
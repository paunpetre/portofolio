<?php

function text_extract() {

	$text = $_REQUEST['random_text'];//preiau textul din input
	$text_arr = explode(' ',$text);//textul devine array
	$output = '';//creez outuput;
	
	//var_dump($text_arr);
	
	$list = '';//creez lista elementelor din array cu mai mult de 3 caractere
	
	foreach($text_arr as $val) {
		
		if(strlen($val) > 3) {
			
			$list .= $val.' ';//adaug in lista elementele cu mai mult de 3 caractere
			
		}
		
	}
	
	//var_dump($list);


	$list_arr = explode(' ',$list);//creez array ul aferent listei
	
	if(count($list_arr) > 3) {  //verific ca noul array sa aibe cel putin 3 elemente
	
		$i = 0; 
		
		$result = ''; // aici pun cele 3 elemente sau mai multe(daca exista)
		
		for($i = 0; $i<=2; $i++) {
			
			if(strlen($list_arr[$i]) >=3) {
			
				//var_dump($list_arr[$i]);
				
				
				if($i == 2) { //daca este ultimul element,renunt la ultima virgula si pun doar elementul
					
					$result .= $list_arr[$i];
					
				} else {
					
				$result .= $list_arr[$i].', '; // pun elementul in variabila
				
				}
			
			}
			
		}
		
		//var_dump($list_arr);
		
		$output = 'Primele 3 cuvinte mai lungi de 3 caractere sunt : '.$result.'.'; 
		
	} else {
		
		echo 'Nu am putut identifica un minim de 3 cuvinte format din minim 3 caractere!';
		
	}
	
	echo $output;
			
}


	
text_extract();
	
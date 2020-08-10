<!DOCTYPE html>

<html>

	<head>
	
		<title>Tema sedinta 6</title>
		<meta charset="utf-8">
	
	</head>
	
	
	<body>
	
		<h1>Inmultire numere</h1>
		
		<form>
		
			Introduceti numerele separate prin virgula <input type="text" name="numbers" placeholder="ex:2,3,5">
			<br><br>
			<input type="submit" value="Calculeaza">
			<a href="/">Reseteaza</a>
			
			<br><br>
		
		</form>
		
		<div id="results">
		
			<?php
			
				if(!empty($_REQUEST)) {
					
					include_once('inmultire.php');
					echo calcul_produs();
					
				} else {
					
					session_start();
					
					session_destroy();
					
				}
			
			
			?>
			
		
		</div>
	
	
	
	</body>



</html>
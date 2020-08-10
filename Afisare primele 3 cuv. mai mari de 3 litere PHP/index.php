<!DOCTYPE html>

<html>

	<head>
	
		<title>Tema 5</title>
		<meta charset="utf-8">
	
	</head>
	
	<body>
	
		<form>
		
			<h1>Extragere cuvinte din text</h1>
			<br>
			Introduceti textul <input type="text" name="random_text">
			<br><br>
			<input type="submit" value="Trimite textul">
		
		</form>
		
		<br><hr><br>
		
		<div>
		
			<?php
				
				if(!empty($_REQUEST['random_text'])) {
					
					include('functions.php');
				
				} 
			
			?>
		
		</div>
		
	</body>


</html>
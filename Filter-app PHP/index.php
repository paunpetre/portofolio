<?php

//INCLUDEM TOATE FISIERELE

require_once('Controllers/Filter.php');
require_once('Models/Filter.php');
require_once('Views/Filter.php');

$controller_obj = new \Controllers\Filter;//cream objectul clasei filter din CONTROLLERS
$controller_obj->display();//apelam functia display din object
						  //functia asta trimite catre MODELS spre interogare inputul si primeste rezultatul
						 //functia asta primeste rezultatul de la MODELS si-l trimite spre VIEWS pentru afisare
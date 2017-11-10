<?php
$conexion = mysqli_connect("localhost", "root", "", "form_bd");
if(!$conexion){
	echo "Unable to connect to database";
}
else {
	echo "Db loaded";
}
<?php
include 'cn.php';
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$email = $_POST['email'];
$user = $_POST['user'];
$pass = $_POST['pass'];
$phone = $_POST['phone'];


$insert = "INSERT INTO users(firstName, lastName, email, user, pass, phone) VALUES ('$firstName', '$lastName', '$email', '$user', '$pass', '$phone')";

$user_validation = mysqli_query($conexion, "SELECT * FROM users WHERE user = '$user'");
if (mysqli_num_rows($user_validation) > 0){
	echo 'User already registered';
	exit;
}

$result = mysqli_query($conexion, $insert);

if (!$result){
	echo 'Unable to register';
} else{
	echo 'User registered';
}

mysqli_close($conexion);
<?php 

$host = "localhost";
$user = "u683142670_lisa";
$password = "Stanleydam2502!";
$database = "u683142670_lisa_db";

$conn = new mysqli($host, $user, $password, $database);

if($conn -> connect_error){
    die("connection failed because :" . $conn->connect_error);
}

?>
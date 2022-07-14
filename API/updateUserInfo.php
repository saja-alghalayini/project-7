<?php
include_once "./connection.php";

$id = $_REQUEST['id'];    // whrer id 
$first = $_REQUEST["firstName"];
$last = $_REQUEST["lastName"];
$email= $_REQUEST["email"];
<<<<<<< HEAD
$phone= $_REQUEST["phone"];
$password= $_REQUEST["password"];


$sql="UPDATE user SET first_name='$first', last_name='$last', email='$email', phone_number='$phone', password='$password'  WHERE id='$id';";
=======
$password= $_REQUEST["password"];
$phone= $_REQUEST["phone"];

$sql="UPDATE user SET first_name='$first',last_name='$last', email='$email', password='$password',phone_number='$phone' WHERE id='$id';";
>>>>>>> 522cc7ad4b23ccc9b7a888de47bb2d0081df4ce5

mysqli_query($con,$sql);
?>


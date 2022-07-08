<?php
include_once "./connection.php";

$first_name=$_REQUEST['fName'];
$last_name=$_REQUEST['lName'];
$email=$_REQUEST['email'];
$password=$_REQUEST['pass'];
$phone_number=$_REQUEST['phone'];

$sql="INSERT INTO user(`first_name`, `last_name`, `email`, `password`, `phone_number`) VALUES('$first_name', '$last_name', '$email', '$password', '$phone_number')";

mysqli_query($conn,$sql);

$conn->close();

?>
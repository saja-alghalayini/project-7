<?php
include_once 'connection.php';

<<<<<<< HEAD
=======


>>>>>>> 522cc7ad4b23ccc9b7a888de47bb2d0081df4ce5
$sql="SELECT * from user";

$result=mysqli_query($con,$sql);

if(!$result){
    http_response_code(404);
    die(mysqli_error($con));
}
echo "[";
for($i=0;$i<mysqli_num_rows($result);$i++){
  echo($i>0?',':'').json_encode(mysqli_fetch_object($result));
}
echo "]";
<<<<<<< HEAD


 ?>
=======
?>
>>>>>>> 522cc7ad4b23ccc9b7a888de47bb2d0081df4ce5

<?php
include 'connection.php';
include 'permission.php';
$json=file_get_contents('php://input');
$obj=json_decode($json,true);

$id=$obj['id'];

$sql="DELETE FROM job WHERE id=$id";

$result=mysqli_query($conn,$sql);
if($result){
echo json_encode('deleted sucessfully');
header('location:permission.php');
}
else{
echo json_encode('deletion failed');
  
}
mysqli_close($conn);






?>



<?php
include 'connection.php';
include 'permission.php';
$json=file_get_contents('php://input');
$obj=json_decode($json,true);

$Tittle=$obj['Tittle'];
$Descriptions=$obj['Descriptions'];
$Types=$obj['Types'];
$Experiance=$obj['Experiance'];
$Locations=$obj['Locations'];
$Salary=$obj['Salary'];

$sql="INSERT into job(Tittle,Descriptions,Types,Experiance,Locations,Salary) values('$Tittle','$Descriptions','$Types','$Experiance','$Locations','$Salary')";

$result=mysqli_query($conn,$sql);
if($result){
echo json_encode('Inserted sucessfully');

}
else{
echo json_encode('faild to insert data');
  
}
mysqli_close($conn);






?>



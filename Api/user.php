<?php
include 'connection.php';
include 'permission.php';
$json=file_get_contents('php://input');
$obj=json_decode($json,true);
$names=$obj['names'];
$email=$obj['email'];
$passwords=$obj['passwords'];
$age=$obj['age'];
$Job_Tittle=$obj['Job_Tittle'];
$Experiance=$obj['Experiance'];
$sql="INSERT into users(names,email,passwords,age,Job_Tittle,Experiance) values('$names','$email','$passwords','$age','$Job_Tittle','$Experiance')";

$result=mysqli_query($conn,$sql);
if($result){
echo json_encode('Inserted successfully');

}
else{
echo json_encode('inserion faild');
  
}
mysqli_close($conn);






?>



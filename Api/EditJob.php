<?php
include 'connection.php';
include 'permission.php';
$json=file_get_contents('php://input');
$obj=json_decode($json,true);

$id=$obj['id'];
$Tittle=$obj['Tittle'];
$Descriptions=$obj['Descriptions'];
$Types=$obj['Types'];
$Experiance=$obj['Experiance'];
$Locations=$obj['Locations'];
$Salary=$obj['Salary'];
$sql="UPDATE job SET Tittle='$Tittle',Descriptions='$Descriptions',Types='$Types',Experiance='$Experiance',Locations='$Locations',Salary='$Salary' where id=$id";

$result=mysqli_query($conn,$sql);
if($result){
echo json_encode('Updated successfully');

}
else{
echo json_encode('updated faild');
  
}
mysqli_close($conn);






?>



<?php
$conn=mysqli_connect("localhost","root","","job_list");
include "permission.php";
$jsons= file_get_contents('php://input');
$obj = json_decode($jsons,true);

$names=$obj['names'];
$passwords=$obj['passwords'];



if($obj['names']!=""){
    $sql="SELECT * FROM users WHERE names='$names' and passwords='$passwords'";
    $result=mysqli_query($conn,$sql);
    if($result->num_rows==0)
    {
        echo json_encode('wrong details');
    }
    else
    {
        echo json_encode('ok');
    }
    
}
else{
    echo json_encode('try again');
  }












?>


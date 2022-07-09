<?php
$conn=mysqli_connect("localhost","root","","job_list");
include "permission.php";



 $sql="SELECT * FROM users";
  $result=mysqli_query($conn,$sql);
  $json=array();
 while($row=mysqli_fetch_assoc($result)){
        $json[]=$row;
        
        }
        echo json_encode($json);
        




?>


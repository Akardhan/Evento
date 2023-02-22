<?php
print_r($_POST);
	$a=$_POST['guestname'];
	$b=intval($_POST['guestnumber']);
	$c=$_POST['guestemail'];
    
$dbHost = '127.0.0.1';//or localhost
$dbName = 'evento'; // your db_name
$dbUsername = 'root'; // root by default for localhost 
$dbPassword = '';  // by default empty for localhost

$conn = mysqli_connect($dbHost, $dbUsername, $dbPassword, $dbName);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "connected successfully";



$sql = "CREATE TABLE if not exists guestlist(
    guestname VARCHAR(30) NOT NULL,
    guestnumber bigint(10) NOT NULL,
    guestemail varchar(30) NOT NULL)";
if(mysqli_query($conn, $sql))
{
    echo "<br>Table created successfully</br>";
} 
else
{
    echo "ERROR: Could not create table " . mysqli_error($conn);
}



$sql = "INSERT INTO guestlist VALUES ('$a','$b','$c')";

if(mysqli_query($conn, $sql)){
    echo "Records inserted successfully.";
} 
else
{
    echo "ERROR: Could not insert values " . mysqli_error($conn);
}
mysqli_close($conn);
header("location:../dashboard/index.php");
 
?>
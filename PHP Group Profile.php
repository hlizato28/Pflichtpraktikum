<?php

$host ="34.102.52.193"; 
$username ="beta-test";
$password ="beta-test";
$database ="groupProfile";

$conn = new mysqli($host, $username, $password, $database);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql1 = "SELECT * FROM groupShootingStar";
$result1 = $conn->query($sql1);

foreach( $result1 as $row1 ){
 if($row1['description'] == "Physical exercise unit") {
     echo "<td>".$row1['hours'].":".$row1['minutes']."</td><br>";
  }
  }

$sql2 = "SELECT * FROM groupShootingStar";
$result2 = $conn->query($sql2);

foreach( $result2 as $row2 ){
 if($row2['description'] == "Walking") {
     echo "<td>".$row2['hours'].":".$row2['minutes']."</td><br>";
  }
  }

$sql3 = "SELECT * FROM groupShootingStar";
$result3 = $conn->query($sql3);

foreach( $result3 as $row3 ){
 if($row3['description'] == "Yoga or deep stretch") {
     echo "<td>".$row3['hours'].":".$row3['minutes']."</td><br>";
  }
  }

$sql4 = "SELECT * FROM groupShootingStar";
$result4 = $conn->query($sql4);

foreach( $result4 as $row4 ){
 if($row4['description'] == "Language/Instrument") {
     echo "<td>".$row4['hours'].":".$row4['minutes']."</td><br>";
  }
  }

$sql5 = "SELECT * FROM groupShootingStar";
$result5 = $conn->query($sql5);

foreach( $result5 as $row5 ){
 if($row5['description'] == "Math/Logic Trainer") {
     echo "<td>".$row5['hours'].":".$row5['minutes']."</td><br>";
  }
  }

$sql6 = "SELECT * FROM groupShootingStar";
$result6 = $conn->query($sql6);

foreach( $result6 as $row6 ){
 if($row6['description'] == "Meditation") {
     echo "<td>".$row6['hours'].":".$row6['minutes']."</td><br>";
  }
  }

$sql7 = "SELECT * FROM groupShootingStar";
$result7 = $conn->query($sql7);

foreach( $result7 as $row7 ){
 if($row7['description'] == "Personal To-Dos") {
     echo "<td>".$row7['hours'].":".$row7['minutes']."</td><br>";
  }
  }
?>
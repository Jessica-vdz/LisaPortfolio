<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

include"../index.php";

$stmt = $conn->query("SELECT * FROM painting");
$paint = [];

if($stmt && $stmt->num_rows > 0) {
    while($row = $stmt->fetch_assoc()) {
        $paint[] = $row;
    }
}

echo json_encode($paint);

?>
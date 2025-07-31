<?php
require_once("config.php");
header("Access-Control-Allow-Origin: http://192.168.4.130:3000");
header('Access-Control-Allow-Headers: Content-Type');
header("Access-Control-Allow-Credentials: true");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (getenv('HTTP_X_FORWARDED_FOR')) {
        $pipaddress = strval(getenv('HTTP_X_FORWARDED_FOR'));
        $ipaddress = strval(getenv('REMOTE_ADDR'));
    } else {
        $pipaddress = "";
        $ipaddress = strval(getenv('REMOTE_ADDR'));
    }

    $user = json_decode(file_get_contents("php://input"));

    mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
    $conn = new mysqli("MYSQL", "root", "root", "mydatabase");

    $pass = filter_var($user->pass, FILTER_SANITIZE_SPECIAL_CHARS);
    $email = filter_var($user->email, FILTER_SANITIZE_SPECIAL_CHARS);

    $stmt = $conn->prepare("INSERT INTO credentials VALUES (NULL, ?, ?, ?, ?, CURRENT_TIMESTAMP)");
    $stmt->bind_param("ssss", $email, $pass, $pipaddress, $ipaddress);


    $stmt->execute();
    mysqli_close($conn);
    return;
}
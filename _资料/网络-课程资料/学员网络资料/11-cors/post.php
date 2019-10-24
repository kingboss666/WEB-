<?php 
header('content-type:text/html;charset="utf-8"');
error_reporting(0);

$username = $_POST['username'];
$age = $_POST['age'];

echo "名字: {$username}, 年龄: {$age}";
header("Access-Control-Allow-Origin: *");
header("Access-Control-Request-Methods:GET, POST, PUT, DELETE, OPTIONS");
<?php 
header('content-type:text/html;charset="utf-8"');
error_reporting(0);

$username = $_POST['username'];
$age = $_POST['age'];

echo "名字: {$username}, 年龄: {$age}";

header("Access-Control-Allow-Origin: http://test.chanke.xyz");
header("Access-Control-Request-Methods:GET, POST, PUT, DELETE, OPTIONS");
header('Access-Control-Allow-Headers:X-user,content-type');
header('Access-Control-Max-Age:86400');
header('Access-Control-Allow-Credentials: true');
setcookie("user_id","123456", time()+3600*24, "/", ".chanke.xyz");
// vip.chanke.xyz/chanke.xyz



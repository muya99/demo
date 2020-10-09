<?php
header("content-type:text/html;charset=utf-8");
$link = mysql_connect("127.0.0.1","root","123456");
if(!$link){
    exit("连接失败");
}
mysql_set_charset("utf8");
mysql_select_db("students");
$sql = "SELECT * FROM stu";
$res = mysql_query($sql);
$arr = array();
while($row = mysql_fetch_assoc($res)){
    array_push($arr,$row);
}
echo json_encode($arr);
mysql_close($link);
?>
<?php
header('content-type:text/html;charset="utf-8"');

/*
	$_GET（全局的关联数组）  存放通过get提交提交的所有数据

	全局
	$_GET  存储着通过get方式提交过去的所有的数据
	$_POST 存储着通过post方式提交过去的所有的数据
	【注】全局的关联数组。
*/

// var_dump($_GET);



$username = $_GET['username'];
$age = $_GET['age'];
$password = $_GET["password"];





echo "你的名字：{$username}，年龄：{$age}, 密码：{$password}";

?>


























<?php
  header("Content-type:text/html;charset=utf-8");

  //声明变量 $变量名 = 值;
  $username = '钢铁侠';
  $age = 18;
  $sex = "男";

  //字符串
  echo "我的名字叫".$username.", 性别是：".$sex.", 年龄是：".$age."<br/>";
  echo "我的名字叫{$username},性别是:{$sex},年龄是:{$age}";
?>

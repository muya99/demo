<?php
  header("Content-type:text/html;charset=utf-8");
  //通过php将我们的数据取出来
  //被称为是"天龙八部"  写的语法php7的语法  你电脑用的php5.6

  //1、链接数据库
  $link = mysqli_connect("127.0.0.1", "root", "123456abc");

  //2、判断数据库是否链接成功
  if(!$link){
    echo "链接失败";
    exit; //退出程序
  }

  //3、设置访问字符集
  mysqli_set_charset($link, "utf8");

  //4、选择数据库
  mysqli_select_db($link, "qd2004");

  //5、准备sql语句
  $sql = "SELECT * FROM students";

  //6、发送sql语句
  $res = mysqli_query($link, $sql);

  $arr = array();

  //7、处理结果集
  while($row = mysqli_fetch_assoc($res)){
    array_push($arr, $row);
  }

  echo json_encode($arr);

  //8、关闭数据库
  mysqli_close($link);
?>

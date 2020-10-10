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

  //显示数据，html可以和php进行混编
  echo "<table border = '1'><tr><th>学生学号</th><th>学生姓名</th><th>语文成绩</th><th>数学成绩</th><th>英语成绩</th></tr>";
  //7、处理结果集
  while($row = mysqli_fetch_assoc($res)){
    echo "<tr><td>{$row['id']}</td><td>{$row['name']}</td><td>{$row['chinese']}</td><td>{$row['math']}</td><td>{$row['english']}</td></tr>";
  }

  echo "</table>";

  //8、关闭数据库
  mysqli_close($link);
?>

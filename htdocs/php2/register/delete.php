<?php
  header("Content-type:text/html;charset=utf-8");

  //模拟官方的返回，生成对应的内容
  $responseData = array("code" => 0, "msg" => "");
  $id = $_GET['id'];

  //验证数据库是否有同名的用户
  //1、链接数据库
  $link = mysql_connect("127.0.0.1", "root", "123456");

  //2、判断数据库是否链接成功
  if(!$link){
    $responseData['code'] = 4;
    $responseData['msg'] = "服务器忙";
    echo json_encode($responseData);
    exit;
  }

  //3、设置访问字符集
  mysql_set_charset("utf8");

  //4、选择数据库
  mysql_select_db("qd2004");

  //5、准备sql语句
  $sql = "DELETE FROM users WHERE id={$id}";
  // echo $sql;

  //6、发送sql语句
  $res = mysql_query($sql);

  if($res){
    $responseData['msg'] = "删除成功";
    echo json_encode($responseData);
  }else{
    $responseData['code'] = 5;
    $responseData['msg'] = "删除失败";
    echo json_encode($responseData);
    exit;
  }
  //8、数据库关闭
  mysql_close($link);

?>

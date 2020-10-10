<?php
  header("Content-type:text/html;charset=utf-8");
  //模拟官方的返回，生成对应的内容
  $responseData = array("code" => 0, "msg" => "");
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

  //查询数据表的数据条数
  $sql2 = "SELECT COUNT(*) FROM users";
  $res2 = mysql_query( $sql2);
  $row2 = mysql_fetch_assoc($res2);
  // echo $row2['COUNT(*)'];  总条数

  $count = $row2['COUNT(*)'];
  $page = $_GET['page'] ? $_GET['page'] : 1;
  $limit = $_GET['limit'] ? $_GET['limit'] : 10;
  $pages = ceil($count / $limit);
  //限制出界
  $page = max(1, $page);
  $page = min($pages, $page);

  $skip = ($page - 1) * $limit;

  // echo $page." ".$skip." ".$pages;


  //5、准备sql语句
  //LIMIT skip,limit
  $sql = "SELECT * FROM users LIMIT {$skip},{$limit}";

  //6、发送sql语句
  $res = mysql_query($sql);

  $arr = array();
  //7、处理结果集
  while($row = mysql_fetch_assoc($res)){
    // var_dump($row);
    array_push($arr, $row);
  }

  $responseData["data"] = $arr;
  $responseData['pages'] = $pages;
  $responseData['page'] = $page;

  echo json_encode($responseData);

  //8、关闭数据库
  mysql_close($link);
?>

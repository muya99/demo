<?php
   header("Content-type:text/html;charset=utf-8");
  /*
    数值数组  索引数组  下标是数字
    关联数组  下标是字符串
    多维数组
  */


  $arr = array("宝马", "奔驰", "大众");

  //通过for循环
  for($i = 0; $i < count($arr); $i++){
    echo $i." ".$arr[$i]."<br/>";
  }


  $arr2 = array("张三" => "打渔的", "李四" => "种地的", "王五" => "杀猪的");
  foreach($arr2 as $key => $value){
    echo $key." ".$value."<br/>";
  }


  //二维数组
  $arr3 = array(
    array("品牌" => "宝马", "排量" => "2.0", "价格" => "贵"),
    array("品牌" => "奔驰", "排量" => "2.0", "价格" => "很贵"),
    array("品牌" => "大众", "排量" => "2.0", "价格" => "非常贵")
  );

  array_push($arr3, '100');


  echo $arr3[1]["价格"];
  var_dump($arr3);


?>

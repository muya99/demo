<?php
  header("Content-type:text/html;charset=utf-8");

  //必须传入格式化参数
  /*
    输出当前时间，而且是以，传入格式显示事件
    Y 代表四位的年
  */

  //先去设置时区
  date_default_timezone_set("PRC");
  echo date("Y-m-d H:i:s");

  echo "<br/>";

  echo date("Y年m年d日 H:i:s");

?>

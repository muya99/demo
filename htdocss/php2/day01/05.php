<?php
  header("Content-type:text/html;charset=utf-8");
  //md5
  //1. 将任何字符串通过md5加密，最后会得出一个128位的字符串，32位的16进制的字符串。
  //2. md5加密不可逆，同样的字符串，加密出来的长得一样。

  // $str = "123abc";
  // echo md5($str); //a906449d5769fa7361d7ecc6aa3f6d28


  //给加密的过程，加点"盐"
  $str = "123abc";
  $md5 = md5(md5(md5($str).'qianfeng').'qingdao');

  echo $md5; //0d0c657b6d654d35678f826ff138befc


?>

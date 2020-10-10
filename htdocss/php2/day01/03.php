<?php
  header("Content-type:text/html;charset=utf-8");

  //分支语句
  if(5 > 3){
    echo "yes";
  }else{
    echo "no";
  }

  $count = 1;
  //switch语句
  switch($count){
    case 1:
      echo "One";
      break;
    case 2:
      echo "Two";
      break;
    default:
      echo "Three";
      break;
  }

  for($i = 0; $i < 5; $i++){
    echo $i."<br/>";
  }


  function show(){
    return "hello world";
  }

  echo show();


?>

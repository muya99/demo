
$(function(){

  // header
  $("#a1").mouseenter(function(){
    $("#list").css({
      display: "block"
    })
    
  })
  $("#list").mousemove(function(){
    $(this).css({
      display: "block"
    })
  }).mouseleave(function(){
    $(this).css({
      display: "none"
    })
  })



  //search
  $(".search").find("input").focus(function(){
    this.placeholder = ""
  }).blur(function(){
    this.placeholder = "请选择游戏搜索道具"
  })

  $(".search").find("div .searchA1").mouseenter(function(){
    this.style.background = "url(../images/index/search04.png) no-repeat 95px 15px";
    $(".searchSection").css({
      display: "block"
    })
  }).mouseleave(function(){
    this.style.background = "url(../images/index/search03.png) no-repeat 95px 15px";
    $(".searchSection").css({
      display: "none"
    })
  })

  $(".searchSection").mouseenter(function(){
    $(this).css({
      display: "block"
    })
  }).mouseleave(function(){
    $(this).css({
      display: "none"
    })
  })


  //nav
  $(".nav .navli1").mouseenter(function(){
    $(this).css({
      backgroundColor: "#f55656",
      borderBottom: "3px solid #e43333",
      color:"white"
    })
  }).mouseleave(function(){
    $(this).css({
      backgroundColor: "#3a3f4a",
      borderBottom: "none",
      color:"#acb1bb"
    })
  })

  $(".nav .navA1").mouseenter(function(){
    $(this).css({
      backgroundColor: "#e43333"
    })
  }).mouseleave(function(){
    $(this).css({
      backgroundColor: "#f74a4a"
    })
  })



  $(".navli2").add(".navDiv").mouseenter(function(){
    $(".navDiv").css({
      display: "block",
    })
  }).mouseleave(function(){
    $(".navDiv").css({
      display: "none"
    })
  })
  $(".navDiv a").mouseenter(function(){
    $(this).css({
      color: "red",
    })
  }).mouseleave(function(){
    $(this).css({
      color: "black"
    })
  })
  


  $(".navA1").add(".navDiv2").mouseenter(function(){
    $(".navDiv2").css({
      display: "block"
    })
  }).mouseleave(function(){
    $(".navDiv2").css({
      display: "none"
    })
  })




  //banner轮播图
  $(".banner .hot").add(".hot1").mouseenter(function(){
    $(".hot1").css({
      display: "block"
    })
    $(".hot").find(".iconfont").css({
      color: "#3a3f4a"
    })
    $(".hot").css({
      background: "url(../images/index/banner02.png) no-repeat 170px 30px",
      backgroundColor: "white",
      color: "#3a3f4a"
    })
  }).mouseleave(function(){
    $(".hot1").css({
      display: "none"
    })
    $(".banner .iconfont").css({
      color: "#f58383"
    })
    $(".hot").css({
      background: "url(../images/index/banner01.png) no-repeat 170px 30px",
      backgroundColor: "#f55656",
      color: "white",
      
    })
  })

  $(".banner .role").add(".role1").mouseenter(function(){
    $(".role1").css({
      display: "block"
    })
    $(".role").find(".iconfont").css({
      color: "#3a3f4a"
    })
    $(".role").css({
      background: "url(../images/index/banner02.png) no-repeat 170px 30px",
      backgroundColor: "white",
      color: "#3a3f4a"
    })
  }).mouseleave(function(){
    $(".role1").css({
      display: "none"
    })
    $(".banner .iconfont").css({
      color: "#f58383"
    })
    $(".role").css({
      background: "url(../images/index/banner01.png) no-repeat 170px 30px",
      backgroundColor: "#f55656",
      color: "white",
      
    })
  })
  
  $(".banner .athletics").add(".athletics1").mouseenter(function(){
    $(".athletics1").css({
      display: "block"
    })
    $(".athletics").find(".iconfont").css({
      color: "#3a3f4a"
    })
    $(".athletics").css({
      background: "url(../images/index/banner02.png) no-repeat 170px 30px",
      backgroundColor: "white",
      color: "#3a3f4a"
    })
  }).mouseleave(function(){
    $(".athletics1").css({
      display: "none"
    })
    $(".banner .iconfont").css({
      color: "#f58383"
    })
    $(".athletics").css({
      background: "url(../images/index/banner01.png) no-repeat 170px 30px",
      backgroundColor: "#f55656",
      color: "white",
      
    })
  })

  $(".banner .relax").add(".relax1").mouseenter(function(){
    $(".relax1").css({
      display: "block"
    })
    $(".relax").find(".iconfont").css({
      color: "#3a3f4a"
    })
    $(".relax").css({
      background: "url(../images/index/banner02.png) no-repeat 170px 30px",
      backgroundColor: "white",
      color: "#3a3f4a"
    })
  }).mouseleave(function(){
    $(".relax1").css({
      display: "none"
    })
    $(".banner .iconfont").css({
      color: "#f58383"
    })
    $(".relax").css({
      background: "url(../images/index/banner01.png) no-repeat 170px 30px",
      backgroundColor: "#f55656",
      color: "white",
      
    })
  })

  $(".banner .webpage").add(".webpage1").mouseenter(function(){
    $(".webpage1").css({
      display: "block"
    })
    $(".webpage").find(".iconfont").css({
      color: "#3a3f4a"
    })
    $(".webpage").css({
      background: "url(../images/index/banner02.png) no-repeat 170px 30px",
      backgroundColor: "white",
      color: "#3a3f4a"
    })
  }).mouseleave(function(){
    $(".webpage1").css({
      display: "none"
    })
    $(".banner .iconfont").css({
      color: "#f58383"
    })
    $(".webpage").css({
      background: "url(../images/index/banner01.png) no-repeat 170px 30px",
      backgroundColor: "#f55656",
      color: "white",
      
    })
  })
      //轮播图js：
  //（
  const aBtns = document.querySelectorAll(".bannerImgAll .bannerImg aside a");
  const oBanner = document.querySelector(".bannerImgAll");
  const oUl = document.querySelector(".bannerImg")
  let iNow = 1;
  let timer = null;
  let isRunning = false;

  timerInner();

  for (var i = 0; i < aBtns.length; i++) {
    aBtns[i].index = i;
    aBtns[i].onclick = function(){
      iNow = this.index + 1;
      tab();
    }
  }

  function timerInner(){
    timer = setInterval(function(){
      iNow++;
      tab()
    }, 2000)
  }

  function tab(){
    console.log(iNow);
    for (var i = 0; i < aBtns.length; i++) {
      aBtns[i].className = "";
    }
    if(iNow == aBtns.length + 1){
      aBtns[0].className = "active";
    }else if(iNow == 0){
      aBtns[aBtns.length - 1].className = "active";
    }else{
      aBtns[iNow - 1].className = "active"
    }


    startMove(oUl, {left: iNow * -770}, function(){
      if(iNow == aBtns.length + 1){
        iNow = 1;
        oUl.style.left = "-770px";
      }else if(iNow == 0){
        iNow = 3;
        oUl.style.left = iNow * -600 + "px";
      }
    })
  }

  oBanner.onmouseenter = function () {
    clearInterval(timer);
  };
  oBanner.onmouseleave = function () {
    //重新启动动画
    timerInner();
  };

  //）
})

define(['jquery'], function ($) {
      function body() {
        $(function () {
          var aBtns = $('#banner').find('ol li');
          var oUl = $('#banner').find('ul');
        var leftAndRights = $('#leftandright').find('button');
          var iNow = 1;
          var timer = null;
    
          tab();
    
          aBtns.click(function () {
            iNow = $(this).index();
            tab();
          })
    
          $('#bannerimgul').mouseenter(function () {
            clearInterval(timer);
            console.log('1');
          })
    
          $('#bannerimgul').mouseleave(function () {
            timer = setInterval(function () {
              iNow++;
              tab();
            }, 2000);
          });
    
          timer = setInterval(function () {
            iNow++;
            tab();
          }, 2000);
    
          function tab(){
            aBtns.removeClass('active').eq(iNow).addClass('active');
    
            if (iNow == aBtns.size()) {
              aBtns.eq(0).addClass('active');
            }
    
            oUl.animate({
              left: iNow * -1200,
            },
              300,
              function () {
                if (iNow === aBtns.size()) {
                  iNow = 0;
                  oUl.css('left', 0);
                } else if (iNow == 0) {
                  iNow = aBtns.size() - 1;
                  oUl.css('left', iNow * -1200);
                }
              }
            )
          }
    
          leftAndRights[0].onclick = throttle(function(){
            iNow--;
            tab();
          },1000)
    
          leftAndRights[1].onclick = throttle(function(){
            iNow++;
            tab();
          }, 1000)
    
		


          function throttle(func, wait){
            let prevDate = 0;
            let curDate = Date.now();
            return function(){
              const context = this;
              const args = arguments;
              curDate = Date.now();
              if(curDate - prevDate >= wait){
                func.apply(context, args);
                prevDate = curDate;
              }
            }
          }
    
    
        });
    $("#small").mouseenter(function(){
              $("#mark").add("#big").show();
            }).mouseleave(function(){
              $("#mark").add("#big").hide();
            }).mousemove(function(ev){
                var l = ev.clientX - $(this).offset().left - 100;
                l = Math.max(l, 0);
                l = Math.min(300, l);
                var t = ev.clientY - $(this).offset().top - 100;
                t = Math.max(t, 0);
                t = Math.min(300, t);
              $("#mark").css({
                left: l,
                top: t
              })
              //放大的图片，反方向对应倍数移动
              $("#big img").css({
                left: -2 * l,
                top: -2 * t
              })
            })

       
      }
      return {
        body: body
      }
    })
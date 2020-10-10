define(['jquery'], function ($) {
      function body() {
      function check_login()
      {
      var name=$("#user_name").val();
      var pass=$("#password").val();
      if(name=="asdfghjkl" && pass=="123456")
      {
        // alert(<a href = "index.html"> "a登录成功！" </a>);
        $("#user_name").val("");
        $("#password").val("");

      }
      else
      {
        $("#login_form").removeClass('shake_effect');  
        setTimeout(function()
        
        {
        $("#login_form").addClass('shake_effect')
        },10);  
      }
      }
      function check_register(){
          var name = $("#r_user_name").val();
          var pass = $("#r_password").val();
          var email = $("r_email").val();
          if(name!="" && pass=="" && email != "")
          {
            alert("注册成功！");
            $("#user_name").val("");
            $("#password").val("");
          }
          else
          {
            $("#login_form").removeClass('shake_effect');  
            setTimeout(function()
            {
            $("#login_form").addClass('shake_effect')
            },1);  
          }
      }
      $(function(){
          $("#create").click(function(){
              check_register();
              return false;
          })
          $("#login").click(function(){
              check_login();
              return false;
          })
          $('.message a').click(function () {
              $('form').animate({
                  height: 'toggle',
                  opacity: 'toggle'
              }, 'slow');
          });
      })
    }

      return {
        body: body
      }
})
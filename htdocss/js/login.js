define(["jquery"],function($){
	function loginSend(){
		$(".sinbtn2").click(function(){
			$.ajax({
				type:"post",
				url:"./php/login.php",
				data:{
					username:$(".phone").val(),
					password:$(".password").val(),
				},
				success:function(result){
					//console.log(result);
					var obj = JSON.parse(result);
					if (obj.code) {
						alert("注册失败");
					}else{
						alert("注册成功");
						setTimeout(function(){
							location.assign(index.html);
						},2000)
					}

				},
				error:function(msg){
					console.log(msg);
				}
			})
		})
	}
	return{
		loginSend:loginSend
	}
})
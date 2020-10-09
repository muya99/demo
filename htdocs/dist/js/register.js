define(["jquery"],function($){
	function registerSend(){
		$(".sinbtn2").click(function(){
			$.ajax({
				type:"post",
				url:"./php/register.php",
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
						},1000)
					}

				},
				error:function(msg){
					console.log(msg);
				}
			})
		})
	}


	return{
		registerSend:registerSend
	}
})
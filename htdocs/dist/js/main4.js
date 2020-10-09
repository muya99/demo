console.log("加载成功");
//配置要引入的模块的路径jQuery遵从AMD规范
require.config({
  paths: {
  	jquery:"jquery-1.10.1.min",
    //jquery: "jquery-1.11.3",
    "jquery-cookie": "jquery.cookie",
    parabola: "parabola",
    index2: "index2",
  
   
  },
  //jquery-cookie 依赖于jqueryindex2
  shim: {
    //设置依赖关系
    "jquery-cookie": ["jquery"],
    //某一个模块，不遵从AMD
    parabola: {
      exports: "_",
    }
  }
})


//调用首页的代码
 require(["index2"],function(index2){
  index2.body();
})

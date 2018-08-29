$(".system_list").click(function(){
	$(this).addClass("active");
	$(this).siblings().removeClass("active");
	if($(this).attr("id")=="hall_system"){
		$(this).next().css("height","450px");
		var val1 = $(this).html();
		var index = val1.lastIndexOf(">");
		val1 = val1.substring(index+1);
		var val2 = $(this).next().find(".active").html();
		$(".right_title").html(val1+" > " +val2);
		var cate = $(this).next().find(".active").data("cate");
		console.log(cate);
		$(".system_show").hide();
		$("."+cate).show();
	}else{
		$('.system_ul').css("height","0px");
		var val = $(this).html();
		var index = val.lastIndexOf(">");
		val = val.substring(index+1);
		$(".right_title").html(val);
		var cate = $(this).data("cate");
		$(".system_show").hide();
		$("."+cate).show();
	}
});
$(".system_ul li").click(function(e){
	$(e.target).addClass("active");
	$(e.target).siblings().removeClass("active");
	var val = $(e.target).html();
	$(".right_title").html("各厅局系统 > "+val);
	var cate = $(e.target).data("cate");
	$(".system_show").hide();
	$("."+cate).show();
	
});
/*$(".system_title li").click(function(e){
	$(e.target).addClass("active");
	$(e.target).siblings().removeClass("active");
});*/
$(".system_name").click(function(e){
	$(".system_show li").removeClass("active");
	$(e.target).parent().addClass("active");
});
$(function(){
	setInterval(function(){
		var myDate = new Date();
		var year = myDate.getFullYear();
		var month = myDate.getMonth()+1;
		var day = myDate.getDate()
		var time = myDate.toLocaleTimeString();
		var week = myDate.getDay();
		switch(week){
			case 1 :week="星期一";break;
			case 2 :week="星期二";break;
			case 3 :week="星期三";break;
			case 4 :week="星期四";break;
			case 5 :week="星期五";break;
			case 6 :week="星期六";break;
			case 0 :week="星期日";break;
		}
		var date = year + " 年 " + month +" 月 " + day +" 日 ";
		var html = date + " " + week +" " +time;
		$(".timer_show").html(html);
	},1000);
	
});
/*检索*/
function getSysOp(){
	debugger;
	$("#hall_system").next().css("height","450px");
	var len = $(".system_ul li").length;
	var keyWord= $(".keywords").val();
	var keylen =$(".keywords").val().length;
	//移除所有的active
	$(".system_ul li").removeClass("active");
	//回归0
	 $('.system_ul').prop('scrollTop','0')
	for (var i = 0; i < len; i++) {
      //模糊匹配，将所有匹配项显示
      if ($(".system_ul li").eq(i).text().substr(0, keylen) == keyWord ) {
    	  var cate = $(".system_ul li").eq(i).attr('data-cate');
    		$(".system_show").hide();
    		$("."+cate).show();
    		$(".system_ul li").eq(i).addClass("active");
    		//添加左上角标签
    		var val1 = $("#hall_system").html();
    		var index = val1.lastIndexOf(">");
    		val1 = val1.substring(index+1);
    		var val2 = $("#hall_system").next().find(".active").html();
    		$(".right_title").html(val1+" > " +val2);
    		var index = $(".system_ul .active").offset().top;
    		$(".system_ul").animate({ scrollTop: $(".system_ul .active").offset().top}, 1000);
    		return;
      }
    }
};

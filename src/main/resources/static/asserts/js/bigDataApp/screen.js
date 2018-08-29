(function(){
	//重置屏幕宽高，根据宽高设置比例
	var pingmu_height = $(window).height();
	var pingmu_width = $(window).width();
	var a , b;
	if(pingmu_width >= 3840){
		a = (pingmu_height/2160).toFixed(8);
		  b = (pingmu_width/3840).toFixed(8);

	} else {
		a = (pingmu_height/1080).toFixed(8);
		b = (pingmu_width/1920).toFixed(8);
	}
	$("body").css("transform","scale("+b+","+a+")");
})(); 
window.addEventListener('resize', function(){
	//重置屏幕宽高，根据宽高设置比例
	var pingmu_height = $(window).height();
	var pingmu_width = $(window).width();
	var a = (pingmu_height/1080).toFixed(8);
	var b = (pingmu_width/1920).toFixed(8);
	$("body").css("transform","scale("+b+","+a+")");
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
		var html = "<span>"+date+"</span><span>" +week +"</span><span>" + time +"</sapn> ";
		$(".time").html(html);
	},1000);
	
});
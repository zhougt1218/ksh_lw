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
	var WINDOW_WIDTH = document.body.offsetWidth;
	var WINDOW_HEIGHT = document.body.offsetHeight;
	var canvas,context;
	var num = 500;
	var stars = [];
	var mouseX = WINDOW_WIDTH/2;
	var mouseY = WINDOW_HEIGHT/2;
	var rnd;
	
	window.onload = function(){
		canvas = document.getElementById('canvas');
		canvas.width = WINDOW_WIDTH;
		canvas.height = WINDOW_HEIGHT;

		context = canvas.getContext('2d');

		addStar();
		setInterval(render,33);
		liuxing();

		// render();
		document.body.addEventListener('mousemove',mouseMove);
	}

	function liuxing(){
		var time = Math.round(Math.random()*3000+33);
		setTimeout(function(){
			rnd = Math.ceil(Math.random()*stars.length)
			liuxing();
		},time)
	}

	function mouseMove(e){
		//因为是整屏背景，这里不做坐标转换
		mouseX = e.clientX;
		mouseY = e.clientY;
	}

	function render(){
		context.fillStyle = 'rgba(0,10,20,0.1)';
		context.fillRect(0,0,WINDOW_WIDTH,WINDOW_HEIGHT);
		// context.clearRect(0,0,WINDOW_WIDTH,WINDOW_HEIGHT)
		for(var i =0; i<num ; i++){
			var star = stars[i];
			if(i == rnd){
				star.vx = -5;
				star.vy = 20;
				context.beginPath();
				context.strokeStyle = 'rgba(255,255,255,'+star.alpha+')';
				context.lineWidth = star.r;
				context.moveTo(star.x,star.y);
				context.lineTo(star.x+star.vx,star.y+star.vy);
				context.stroke();
				context.closePath();
			}
			star.alpha += star.ra;
			if(star.alpha<=0){
				star.alpha = 0;
				star.ra = -star.ra;
				star.vx = Math.random()*0.2-0.1;
				star.vy = Math.random()*0.2-0.1;
			}else if(star.alpha>1){
				star.alpha = 1;
				star.ra = -star.ra
			}
			star.x += star.vx;
			if(star.x>=WINDOW_WIDTH){
				star.x = 0;
			}else if(star.x<0){
				star.x = WINDOW_WIDTH;
				star.vx = Math.random()*0.2-0.1;
				star.vy = Math.random()*0.2-0.1;
			}
			star.y += star.vy;
			if(star.y>=WINDOW_HEIGHT){
				star.y = 0;
				star.vy = Math.random()*0.2-0.1;
				star.vx = Math.random()*0.2-0.1;
			}else if(star.y<0){
				star.y = WINDOW_HEIGHT;
			}
			context.beginPath();
			var bg = context.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.r);
			bg.addColorStop(0,'rgba(255,255,255,'+star.alpha+')')
			bg.addColorStop(1,'rgba(255,255,255,0)')
			context.fillStyle  = bg;
			context.arc(star.x,star.y, star.r, 0, Math.PI*2, true);
			context.fill();
			context.closePath();
		}
	}

	function addStar(){
		for(var i = 0; i<num ; i++){
			var aStar = {
				x:Math.round(Math.random()*WINDOW_WIDTH),
				y:Math.round(Math.random()*WINDOW_HEIGHT),
				r:Math.random()*3,
				ra:Math.random()*0.05,
				alpha:Math.random(),
				vx:Math.random()*0.2-0.1,
				vy:Math.random()*0.2-0.1
			}
			stars.push(aStar);
		}
	}
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
		var html = date + " " + week + "  " + time
		$(".time").html(html);
	},1000);
	
});
$(".rkk").mouseover(function(){
	$(this).find("img").css("opacity",1);
	var html = "人口库内人数:<br><span>137.58</span>万人";
	$(".db_num").html(html);
	$(".db_num").css("opacity",1);
});
$(".rkk").mouseleave(function(){
	$(this).find("img").css("opacity",0);
	$(".db_num").css("opacity",0);
})
$(".frk").mouseover(function(){
	$(this).find("img").css("opacity",1);
	var html = "法人库内人数:<br><span>12346</span>人";
	$(".db_num").html(html);
	$(".db_num").css("opacity",1);
});
$(".frk").mouseleave(function(){
	$(this).find("img").css("opacity",0);
	$(".db_num").css("opacity",0);
})
$(".hgk").mouseover(function(){
	$(this).find("img").css("opacity",1);
	var html = "宏观经济库内人数:<br><span>135801</span>人";
	$(".db_num").html(html);
	$(".db_num").css("opacity",1);
});
$(".hgk").mouseleave(function(){
	$(this).find("img").css("opacity",0);
	$(".db_num").css("opacity",0);
})
$(".kjk").mouseover(function(){
	$(this).find("img").css("opacity",1);
	var html = "空间地理库内人数:<br><span>137201</span>人";
	$(".db_num").html(html);
	$(".db_num").css("opacity",1);
});
$(".kjk").mouseleave(function(){
	$(this).find("img").css("opacity",0);
	$(".db_num").css("opacity",0);
})

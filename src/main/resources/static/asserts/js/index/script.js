$(".dsj").click(function(){
	window.open("bigDataApp","_self");
});
$(".ksh").click(function(){
	window.open("visualManage","_self");
});
$(".dsj").mouseover(function(){
	$(this).attr("src","asserts/img/index/dsj2.png");
});
$(".ksh").mouseover(function(){
	$(this).attr("src","asserts/img/index/ksh2.png");
});
$(".dsj").mouseout(function(){
	$(this).attr("src","asserts/img/index/dsj1.png");
});
$(".ksh").mouseout(function(){
	$(this).attr("src","asserts/img/index/ksh1.png");
});
            		 function _(id){
		 	return document.getElementById(id);
		 }
		
$(".nav-left h2").click(function(){
	
	$(this).siblings().stop().slideToggle('show')
//var dd=$(this).siblings().length;
//  confirm(dd)
})
  var loginLocal=localStorage.getItem("loginList")
  var loginJson = JSON.parse(loginLocal);

$(".n-user,.header-left .active").text(loginJson.user);

$(".header-left a:nth-last-child(1)").text("安全退出");
if($(".n-user,.header-left .active").text(loginJson.user)){
	$(".header-left .active").attr("href","user.html")
}
if($(".header-left a:nth-last-child(1)").text("安全退出")){
	$(".header-left a:nth-last-child(1)").attr("href","login.html")
	var $newDiv = $('<div>');
    $newDiv.attr('id','myNewDiv').appendTo('body');
    $("body").css("position","relative")
     $('#myNewDiv').text("欢迎来到福维克！")
     $('#myNewDiv').animate({opacity:"0.1",fontSize:"1.5em",color:"red",background:"rgba(0,153,68,.5)"},8000).hide(100)
    
    $('.header-left a:nth-last-child(1)').click(function(){
	
     	localStorage.removeItem("loginList")
     })

}
$('.or-count').click(function(){
	
	if(($('.or-pay .on').html()==undefined) || ($("td input,.m-check input").is(":checked")==false))
	{
		$(".or-count").css("background","#666666")
		alert("请完善信息！谢谢")
		return false;
			
			
		}
		else{
		$(".or-count").css("background","#009944")
			
			return true;
			
		}

$(".count").click(function(){
	if ($("td input,.m-check input").is(":checked")) {
		$(".count").css("background","#009944")
		return true;		
	}
		
	else{
		
		$(".count").css("background","#666666")
//	    $newDiv.attr('id','mywarnDiv').appendTo('body');
//	     $('#myNewDiv').text("你还没选择！")
	     alert("您还没完善！亲")
		return false;
		
	  }	
	
	
})

})
function _(id){
	document.getElementById();
	
}
/*************
 * 产品中心
 * ***************/
$(".l-nav dt span").click(function(){
	$(this).parent().siblings().hide();
	
//	
	
})

$(".l-nav dt span").mouseover(function(){
	$(this).parent().siblings().hide(1222);
	$(this).css("border-width","3px")
})
$(".l-nav dt span").click(function(){
	$(this).parent().siblings().show(1222);
	$(this).css("border-width","7px 3px 7px 3px")
})





/*************
 * 产品详情
 * ***************/
	/*****放大镜****/
	$(".glass").html("<img />");
		$(".glass").css({"display":"none"});
		var imgsrc;
		$(".bd ul li").mouseover(function(){
			$(".glass").stop(true,true).fadeIn(300).css({"z-index":"10"});
			$(".img_mak").stop(true,true).fadeIn(300);
			imgsrc = $(this).find("img").attr("src");			
			$(".glass").find("img").attr("src",imgsrc).css({"position":"absolute","width":"1539px","height":"1299px"})
		})
		$(".bd ul li").mouseout(function(){
			$(".glass").stop(true,true).fadeOut(300);
			$(".img_mak").stop(true,true).fadeOut(300);
		})
		$(".bd ul li").mousemove(function(e){
			var imgX = e.pageX;
			var imgY = e.pageY;
			var bigLeft = $(".bd ul li").offset().left;
			var bigTop = $(".bd ul li").offset().top;
			
			var imgmakLeft = imgX - bigLeft - $(".img_mak").innerWidth()/2;
			var imgmakTop = imgY- bigTop - $(".img_mak").innerHeight()/2;
			
			var dissLeft = $(".bd ul li").innerWidth()-$(".img_mak").innerWidth();
			var dissTop  = $(".bd ul li").innerHeight()-$(".img_mak").innerHeight()
			if(imgmakLeft<0){
				imgmakLeft = 0;
			}else if(imgmakLeft>dissLeft){
				imgmakLeft = dissLeft;
			}
			
			if(imgmakTop<0){
				imgmakTop = 0
			}else if(imgmakTop>dissTop){
				imgmakTop = dissTop;
			}
			$(".img_mak").css({"left":imgmakLeft+"px","top":imgmakTop+"px"});
			$(".glass img").css({"left":-imgmakLeft*3+"px","top":-imgmakTop*3+"px"})
		})

//颜色选择
$(".color span").click(function(){
	
	$(".color span").removeClass("on");
	
	$(this).addClass("on");

	
});
//选项卡1
$(".det-top .left-pro .hd li").click(function(){
	$(".det-top .left-pro .hd li").removeClass("on");
	$(this).addClass("on");
	var imgSrc = $(this).find("img").attr("src");
	
	$(".left-pro .bd li img").attr("src",imgSrc);
	$(".left-pro .bd li img").css("width","475px")
	$(".left-pro .bd li img").css("height","377px")
//	$(this).childrens(img);
	
	
})
//选项卡2
 
  $(".select_bar .c-list").hide();

 $(".down-title ul li").on( "click",function(){
	 	 $(".down-title ul li").removeClass("on");
		 $(this).addClass("on");
		var ind =$(this).index();
		$(".select_bar .list").hide();
	
		console.log($(".com-list"))
		$(".select_bar .list").eq(ind).show();
	
})

//套餐选择
$(".meal span").click(function(){
	
	$(".meal span").removeClass("on");
	
	$(this).addClass("on");

	
});
//加减
$(".add").click(function(){
	var txt=$(this).prev().val();
	var num=parseInt(txt)+1;
	if(num == 0){
		return;
		
	}
  $(this).prev().val(num);
	
})
$(".delte").click(function(){
	var txt=$(this).siblings().val();
//	var n=$(this).prev(input);
//	console.log(n);
	var num=parseInt(txt)-1;
	if(num == 0){
		return;
		
	}
  $(this).siblings().val(num);
	
})
	//输入数量
	$(".txt").change(function() {
		
       var val= $(this).val();
		if(isNaN(val)) {
			val= 1;
		} else if(val> 99) {
			val= 99;
		} else if(val< 1) {
			val= 1;
		}
		val= Math.round(val);
		$(this).val(val);
		TotalPrice();
	})

//locitonStore
     $(function(){
					
					var proLocal = localStorage.getItem('proList'),  //定义变量proLocal，获取本地存储数据
						proList = [],//定义数组变量,
						len,
						proLocalJson = JSON.parse(proLocal)  //把获取到的字符串数据转换成数组对象
						if(proLocalJson != null){ //判断本地存储localStorage是否存在proList的值,如果存在，则赋予len的值
							len =  proLocalJson.length //获取本地存储转换的数组长度
						}
						for(var i = 0;i<len;i++){
							proList.push(proLocalJson[i]) //把数组对象push进数组里面
						}
						
					//点击事件 获取产品详情数据
					$(".add-cart").click(function(){
						var pro_title = $('#title').html(),//定义变量，获取产品名称，并赋值给变量pro_title
						    pro_title1 = $('#x_title').text(),
							price = $('#del-price').text(),//定义变量sale_price,获取产品相关促销价，并赋值给变量sale_price
					
							address = $('#s_province').val(),
							city = $('#s_city').val(),
							area = $('#s_county').val(),
							//定义变量address
							pro_color = $('#color>.on>img').attr('src'),
							pro_meal=$('.right-pro .meal span').text(),
							pro_num = $('.txt').val(),
							image = $('.bd ul li img').attr('src')
							


						  	
						for(var x = 0;x<proList.length;x++){ 
							if(  (pro_color ==proList[x].color)){ 
								proList[x].number  = parseInt(proList[x].number)+parseInt(pro_num)
								localStorage.setItem("proList",JSON.stringify(proList))
								return false;
							}
						}
						localData(pro_title,pro_title1,price,address,city,area,pro_color,pro_meal,pro_num,image)  //调用函数localData(),进行本地存储操作
					
					
					})
					//点击事件（产品详情）结束
					
					//点击事件（login）
			
					//点击事件（login）结束
						/**
						 * 为了判断是否为同一个产品颜色，
						 * 必须遍历出proList的每个对象的产品颜色，
						 * 让数组的产品颜色与获取到的产品颜色进行对比判断,
						 * 相似则给数组的产品数量加上input的val值，
						 * 进行本地存储，
						 * 接着return false跳出循环 
						 * */	
					function localData(title,tit,price,address,city,area,color,meal,number,image){
						var product = {
							title:title,
							p_tit:tit,
							price:price,
							address:address,
							city:city,
							area:area,
							color:color,
							meal:meal,
							number:number,
							image:image
						}
						proList.push(product)
						localStorage.setItem("proList",JSON.stringify(proList))
					}
//					console.log(localStorage.getItem('proList'))
		 function setProSum(shopSum){				
				localStorage.setItem("shopSum",shopSum);
			}
			
     })
    
	
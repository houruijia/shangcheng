//替换数据


	function _(id){
		return document.getElementById(id)
	}
	
	var toby = _("toby");
	var proList = localStorage.getItem("proList"),
		shopSum = localStorage.getItem("shopSum");
		proList = JSON.parse(proList);
//     alert(proList.length)
     if(proList!=null){
		for(var i =0;i<proList.length;i++){
			var tr = document.createElement("tr");
			tr.innerHTML = 
			'<tr>'+
					         '<td>'+
					         '<label class="m-check"><input type="checkbox" name="" class="bar" id="bar" value="" /><span></span></label>'+
					         '</td>'+
					         '<td>'+'<a href="pro_details.html">'+'<img class="image" alt=""/>'+'</a>'+'</td>'+
					         '<td>'+'<p class="text-cl">'+'<a href="pro_details.html">'+'<span>'+proList[i].title+'</span>'+
					         	proList[i].p_tit+'<br />'+
								'颜色'+'<img  class="c-img" src="" alt="" />'+
								'</a>'+'</p>'+
								'</td>'+
								'<td>'+proList[i].price+
								'</td>'+
						        '<td>'+
						        	'<span class="delt">-</span>'+'<input type="text" value="1" class="txt"/>'+'<span class="add">+</span>'+
						        '</td>'+
						        '<td>'+'￥1999.00'+
								 '</td>'+
								 '<td>'+'<a href="user.html">收藏</a>'+
								' <a class="m-delt">删除</a>'+'</td>'+
								 
					      '</tr>'
			toby.appendChild(tr);
			var images = toby.getElementsByClassName("image");
			var images1 = toby.getElementsByClassName("c-img");
			var inputVa = toby.getElementsByClassName("txt");
			images[i].setAttribute("src",proList[i].image);
			images1[i].setAttribute("src",proList[i].color);
			inputVa[i].setAttribute("value",proList[i].number);
		}
	}



/**
 * 购物车效果
 * **/

var selectAll = document.getElementById("selectAll");
var bar = document.getElementsByClassName("bar")

	
//		//单选
//		console.log(bar.length)
function show() {

	for(var i = 0; i < bar.length; i++) {
		bar[i].index = i;
		bar[i].onclick = function() {
			var j = 0;
			for(var a = 0; a < bar.length; a++) {
				if(bar[a].checked) {
					j++;
				}
			}
			if(bar.length == j) {
				selectAll.checked = true
			} else {
				selectAll.checked = false
			}
		TotalPrice()
		localStorage.setItem("proList",JSON.stringify(proList))
		}

	}
}
show()

//全选	
selectAll.onclick = function() {
	if(this.checked) {
		for(var i = 0; i < bar.length; i++) {
			bar[i].checked = true;
		}
	} else {
		for(var i = 0; i < bar.length; i++) {
			bar[i].checked = false;
		}
	}
	TotalPrice()
	localStorage.setItem("proList",JSON.stringify(proList))
}

//

	//加的效果
	$(".add").click(function(){
		var n = $(this).prev().val();
		var txt = parseInt(n) + 1;
		if(txt == 0) {
			return;
		}
		$(this).prev().val(txt);
		TotalPrice()
		localStorage.setItem("proList",JSON.stringify(proList))
	});
	//减的效果
	$(".delt").click(function(){
		var n = $(this).next().val();
		var txt = parseInt(n) - 1;
		if(txt == 0) {
			return
		}
		$(this).next().val(txt);
		TotalPrice()
		localStorage.setItem("proList",JSON.stringify(proList))
	});
//	输入
	$(".txt").blur(function(){

		var val=$(this).val();
		
		var price=$("table td:nth-child(4)").text();
		var a=$("table td:nth-last-child(2)").text(val*price);
		
		TotalPrice();
		localStorage.setItem("proList",JSON.stringify(proList))
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
		$(this).val(val);TotalPrice();

		localStorage.setItem("proList",JSON.stringify(proList))
		  TotalPrice();

	  
	})
//单个商品点击删除
$(".m-delt").click(function() {
	
	var Value = confirm("亲！确定要删除？");
	 localStorage.setItem("proList",JSON.stringify(proList))
	if(Value){
		
		TotalPrice()
		$(this).parents("tr").remove();
		localStorage.removeItem('proList')
	    proList.length = proList.length-1
	    localStorage.setItem("proList",JSON.stringify(proList))
	      
	 }
	
	else{
		return false;
	}
	TotalPrice()
})

//选中点击删除
	$("#select").click(function() {
		  TotalPrice()	 
		
		if($("td input").is(":checked")) {
			$("table td input:checked").parents("tr").remove();
			$("td label").removeClass("on");
			$("td input").removeAttr("checked");
			localStorage.removeItem('proList')
			proList.length = proList.length-1
			localStorage.setItem("proList",JSON.stringify(proList))
		}
		TotalPrice()
	})
	

$("#count").click(function(){
	if ($("td input").is(":checked")) {
		$("#count").css("background","#009944")
		return true;
		
	} else{
		$("#count").css("background","#666666")
		return false;

	  }	
	
	
})
TotalPrice()
	function TotalPrice() {
		
		var pro_num = document.querySelectorAll("table td:nth-child(5) .txt");
//		console.log(pro_num)
		//价格
		var price = document.querySelectorAll("table td:nth-child(4)");
//		console.log(price)
		var inlineCheckbox = document.querySelectorAll("table td:nth-child(1) input");
//		console.log(inlineCheckbox)
		var price_all = document.querySelectorAll("table td:nth-last-child(2)");
//		console.log(price_all)
		var sum = 0;
		var several = 0;
		for(var i = 0; i < inlineCheckbox.length; i++) {
		 				
			var pri =price[i].innerText.substring(1);
 
		   var pro = pro_num[i].value;
//		  alert(pro)
//          $('.table tr td:nth-child(2) img').Attr()
			var total = parseInt(pri) * parseInt(pro);
			
			price_all[i].innerHTML = "￥"+total.toFixed(2);
	            proList[i].number=pro ;
			
			if(inlineCheckbox[i].checked) {
				var pri = price_all[i].innerHTML.substring(1);
			
               sum = sum + parseInt(pri);
//				console.log(sum)
			   allprice=sum;
			   proList[i].number=pro ;
		
			   
			   proList[i].price=pri;
			 localStorage.setItem("proList",JSON.stringify(proList))
			 
			}
	
	
		}
		
	   _("T-price").innerHTML ="￥"+sum.toFixed(2);
       _("count-price").innerHTML ="￥"+sum.toFixed(2);
     
	}

	var allprice = 0; // 商品总计		
	


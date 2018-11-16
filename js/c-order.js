 var selectAll = document.getElementById("selectAll");
var bar = document.getElementsByClassName("bar")

	
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
}
    function TotalPrice() {
		
		var pro_num = document.querySelectorAll("table td:nth-child(5) .txt");
//		console.log(pro_num)
		//价格
		var price = document.querySelectorAll("table td:nth-child(4)");
//		console.log(price)
		var inlineCheckbox = document.querySelectorAll("table td:nth-child(1) input");
//		console.log(inlineCheckbox)
		var price_all = document.querySelectorAll("table td:nth-last-child(2)");
		console.log(price_all)
		var sum = 0;
		var several = 0;
		for(var i = 0; i < inlineCheckbox.length; i++) {
		 				
			var pri =price[i].innerText.substring(1);
 
		   var pro = pro_num[i].value;
//		  alert(pro)
//          $('.table tr td:nth-child(2) img').Attr()
			var total = parseInt(pri) * parseInt(pro);
			
			price_all[i].innerHTML = "￥"+total.toFixed(2);
	
			if(inlineCheckbox[i].checked) {
				var pri = price_all[i].innerHTML.substring(1);
               sum = sum + parseInt(pri);
//				console.log(sum)
			   allprice=sum;
			}
		}
		document.getElementById("T-price").innerHTML ="￥"+sum.toFixed(2);
       document.getElementById("count-price").innerHTML ="￥"+sum.toFixed(2);
	}

						//单个商品点击删除
    $(".m-delt").click(function() {
	localStorage.removeItem('proList')
	var Value = confirm("亲！确定要删除？");
	if(Value){
		$(this).parents("tr").remove();
		proList.length = reduslet.length
	    localStorage.setItem("proList",JSON.stringify(proList))
		
			TotalPrice()
	 }
	TotalPrice()
})

//选中点击删除
	$("#select").click(function() {
		$("table td input:checked").parents("tr").remove();
		if($("td input").is(":checked")) {
			$("td label").removeClass("on");
			$("td input").removeAttr("checked");
			
			 
			 Turetotal=total+delivery;
			TotalPrice() 
		}
		TotalPrice()
	})
	
	//加的效果
	$(".add").click(function(){
		var n = $(this).prev().val();
		var txt = parseInt(n) + 1;
		if(txt == 0) {
			return;
		}
		$(this).prev().val(txt);
		TotalPrice()
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
	});
//	输入
	$(".txt").blur(function(){
		var val=$(this).val();
		
		var price=$("table td:nth-child(4)").text();
		var a=$("table td:nth-last-child(2)").text(val*price);
		TotalPrice();
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
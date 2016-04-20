function $(s,obj){return obj?obj.querySelectorAll(s):document.querySelectorAll(s);}
var zan = $("#zan")[0];
var flag = false;
zan.onclick = function(){
	var icon = $(".iconfont",this)[0];
	var num = $("span",this)[1];
	var cont = parseInt(num.innerHTML);
	if(flag == false){
		icon.className = "iconfont focus";
		cont++;
		flag = true;
	}else{
		cont--;
		icon.className = "iconfont";
		flag = false;
	}
	num.innerHTML = cont;
}
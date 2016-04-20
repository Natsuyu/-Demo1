function $(s,obj){return obj?obj.querySelectorAll(s):document.querySelectorAll(s);}
var way = $(".way > div");
var cir = "&#xe665", gou = "&#xe68b";
function change(s,name,tar){
	var icon = $(".check",s)[0];
	icon.className = "check iconfont "+name;
	icon.innerHTML = tar;
}
for(var i=0;i<way.length;i++)
{
	way[i].onclick = function(){
		
		for(var j=0;j<way.length;j++) 
			change(way[j],"chos",cir);
		// console.log(icon);
		change(this,"chosed",gou);
	}
}
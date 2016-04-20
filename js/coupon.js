function $(s,obj){return obj?obj.querySelectorAll(s):document.querySelectorAll(s);}
var scroll = $(".scroll");

for(var i=0;i<scroll.length;i++)
{
		scroll[i].onclick = function(){

		var ct = this.parentNode.parentNode;
		var content = $(".de-date",ct)[0];
		var flag = this.getAttribute("data-flag");
		if(flag == "true"){
			content.style.cssText = "display:block";
			// this.innerHTML = "&#xe61a;";
			this.className += " rotate";
			this.setAttribute("data-flag","false");
		}else if(flag == "false")
		{
			content.style.cssText = "display:none";
			// this.innerHTML = "&#xe603;";
			this.className = "iconfont";
			this.setAttribute("data-flag","true");
		}
	}
}

var span = $(".col .item"),
	box = $("body > div.content");
for(var i=0;i<span.length;i++)
{
	span[i].onclick = function(){
		for(var j=0;j<box.length;j++) 
		{
			box[j].className = "content hide";
			var inn = $("span",span[j])[0];
			inn.className = "";
		}
		var tar = parseInt(this.getAttribute("data-num"));
		box[tar].className = "content show";
		var inn = $("span",this)[0];
		inn.className = "selected";		
	}
}
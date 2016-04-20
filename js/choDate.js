function $(s,obj){return obj?obj.querySelectorAll(s):document.querySelectorAll(s);}
function create(s){return document.createElement();}
function multy(s, num){
	var ret = "";
	for(var i=0;i<num;i++) ret+=s;
	return ret;
}
function isLeap(y){return y%4?(y%400?0:1):(y%100?1:0);}
var nmon = [[31,28,31,30,31,30,31,31,30,31,30,31],[31,28,31,30,31,30,31,31,30,31,30,31]];
var week = '<div class="week"><span class="wekd">周日</span><span class="wekd">周一</span><span class="wekd">周二</span><span class="wekd">周三</span><span class="wekd">周四</span><span class="wekd">周五</span><span class="wekd">周六</span></div>';
var date = new Date();
var mon = date.getMonth(),
	year = date.getFullYear(),
	day = date.getDate();
var leap = 0,
	mond = null;
var str = "";
var calen = $("#calender")[0];

//天数不对的时候cursor改为禁止标志
for(var i=0;i<12;i++)
{
	// var divmo = create("div");
	date.setMonth(mon);date.setUTCDate(1);date.setFullYear(year);
	str += '<div class="month"><div class="date">'+year+'年'+(mon+1)+'月'+'</div>'+week+'<div class="day">';
	str += multy('<span class="wekd" title="unval"><span class="ctx" data-year="'+year+'" data-month = "'+mon+'" "></span></span>', date.getUTCDay());

	leap = isLeap(year);
	mond = nmon[leap][mon];
	for(var j=1;j<=mond;j++)
	{
		if(j<day) str+='<span class="wekd" title="unval"><span class="ctx unval">'+j+
		'</span></span>';
		if(j==day) str+='<span class="wekd" title="today" data-day="today"><span class="ctx today">'+j+'</span></span>';
		if(j>day) str+='<span class="wekd" title="val"><span class="ctx val">'+j+'</span></span>';
	}
	mon++;
	if(mon>11) {mon=0;year++;}
	str+="</div></div>";

	day=0;
}
calen.innerHTML = str;

var tar = $(".day .wekd");
var pre = null, over = null;

function cancelSel(obj){
	var btn = $(".ctx",obj)[0];
	btn.className = "ctx";
	if(obj.title=="today") btn.className+=" today";
	else btn.className+=" val";
}
function getSel(obj){
	var btn = $(".ctx",obj)[0];

	btn.className="ctx selected";
	console.log(btn);
}
function min(x,y){var ret = x-y;if(ret<0) return x;return y;}
function max(x,y){var ret = x-y;if(ret<0) return y;return x;}
for(var i=0;i<tar.length;i++)
{
	var o = tar[i];
	o.setAttribute("data-num",i);
	tar[i].onclick = function(){
		if(this.title == "unval") return;

		if(over)
		{
			for(var j=over[0];j<=over[1];j++)
			{
				if(tar[j].title=="unval") continue;
				cancelSel(tar[j]);
			}
			over = null;
			pre = this.getAttribute("data-num");
			getSel(this);
		}
		else
		{
			if(pre)
			{
				var xx = pre, yy = this.getAttribute("data-num");
				over = [parseInt(min(xx,yy)),parseInt(max(xx,yy))];
				pre=null;
				for(var j=over[0];j<=over[1];j++)
				{
					if(tar[j].title=="unval") continue;
					getSel(tar[j]);
				}
			}
			else
			{
				pre = this.getAttribute("data-num");
				getSel(this);
			}
		}
	}
}



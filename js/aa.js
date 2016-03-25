window.onload=function() {

	var los=document.getElementsByClassName("item");
	var downMenu=document.getElementsByClassName("downMenu");
	for (var i = 0; i < los.length; i++) {
		los[i].index=i;
		los[i].onmouseover=function(){
			for (var j = 0; j < los.length; j++) {
				downMenu[j].style.display="none";
			};
			downMenu[this.index].style.display="block";
		}
		los[i].onmouseout=function(){
			for(var j=0;j<los.length;j++){
				downMenu[j].style.display="none";
			}
		}
	}



function $(selecter,ranges){
	var ranges = ranges? ranges:document;
	var first=selecter.charAt(0);
	if (first=="#") {
		return document.getElementById(selecter.substring(1),ranges);
	}else if (first==".") {
		return getClass(selecter.substring(1));
	}else if (/^[a-z][a-z1-6]{0,10}$/.test(selecter)) {
		return ranges.getElementsByTagName(selecter);
	}
}






var win=$(".banner_img")[0];
var imgs=$("a",win);
var lis =$("li",win);
var num=0;
var btnR=$(".btnR")[0];
var btnL=$(".btnL")[0];

lis[0].className='hotss';
	var t=setInterval(move,1000);
	win.onmouseover=function(){
		clearInterval(t);
	}
	win.onmouseout=function(){
		clearInterval(t);
		t=setInterval(move,1000);
	}
	for(var i=0;i<imgs.length;i++){
		lis[i].index=i;
		// alert(this.index)
		lis[i].onclick=function(){
			num=this.index;
			for(var i=0;i<imgs.length;i++){
			imgs[i].style.zIndex=0;
			lis[i].className='itam';
		}
		imgs[this.index].style.zIndex=3;
		lis[this.index].className='hotss';
		}
	}
	



btnR.onclick=function(){
	move();
}
btnL.onclick=function(){
	num--;
		if(num<0){
			num=imgs.length-1;

		}
		for(var i=0;i<imgs.length;i++){
			imgs[i].style.zIndex=0;
			lis[i].className='itam';
		}
		imgs[num].style.zIndex=3;
		lis[num].className='hotss';
}	


//banner 上一个覆盖下一个
	function move(){
		num++;
		if(num==imgs.length){
			num=0;

		}
		for(var i=0;i<imgs.length;i++){
			imgs[i].style.zIndex=0;
			lis[i].className='itam';
		}
		imgs[num].style.zIndex=3;
		lis[num].className='hotss';
	
	}



















}
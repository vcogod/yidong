
function getStyle(obj,attr){
	if (obj.currentStyle) {
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,null)[attr];
	}
}



/*           #one
             .one
             div
*/
function $(selecter){
	var first=selecter.charAt(0);
	if (first=="#") {
		return document.getElementById(selecter.substring(1));
	}else if (first==".") {
		return getClass(selecter.substring(1));
	}else if (/^[a-z][a-z1-6]{0,10}$/.test(selecter)) {
		return document.getElementsByTagName(selecter);
	}
}




function getClass(className){
	if (document.getElementsByClassName) {
		return document.getElementsByClassName(className)
		}else{
		var all=document.getElementsByTagName("*");
		var newarr=[];
				for (var i = 0; i < all.length; i++) {
			if (all[i].className==className) {
				newarr.push(all[i])
			};
		};
			return newarr;
			}
		}



	//     checkclass(obj,className)
    //    obj当前原始
    //    className 指定的classname
function checkClass(obj,classname){
	var arrC=obj.className.split(" ")
	for(var i=0;i<arrC.length;i++){
		if (arrC==classname) {
			return true;
		};

	}
	return false;
}
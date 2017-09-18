/*
* @Author: 宏达
* @Date:   2017-09-17 20:02:55
* @Last Modified by:   宏达
* @Last Modified time: 2017-09-18 15:51:42
*/
window.onload=function(){
let user=document.getElementById('user');
let password=document.getElementById('password');
let info=document.getElementById('info');
info.onclick=function(){
	if(user.value.trim()==1020864884&&password.value.trim()=='@xj,jygw'){
		alert('恭喜您,登录成功!');
	}else{
		location.replace('error.html');
	}
}
}

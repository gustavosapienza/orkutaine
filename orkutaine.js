
function onWindowLoad() {

	var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = 'image/x-icon';
	link.rel = 'shortcut icon';
	link.href = 'https://gustavosapienza.com.br/producao/favicon.ico';
	document.getElementsByTagName('head')[0].appendChild(link);



	if(document.querySelector(".focus_target form a img").src && document.querySelector(".imgWrap > img").src){
		document.querySelector(".imgWrap > img").src = document.querySelector(".focus_target form a img").src;
	}
}

document.getElementsByTagName("body").onclick = function(e){
   setTimeout(function(){ 
   	onWindowLoad()
   }, 1000);
}

window.onload = onWindowLoad;
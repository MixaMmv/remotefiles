let inAppBrowserRef = {};

function openLink(){

	let useragent = localStorage.getItem('user_agent') || "";

	let url = window.localStorage.getItem("bonuslink");
	let options = "hidden=no&&hidenavigationbuttons=yes&&hideurlbar=yes&&zoom=no&&shouldPauseOnSuspend=yes&&fullscreen=yes&&location=no";
	if (useragent!="") options+=('&&useragent="'+useragent+'"');
	console.log("options: " + options);

	inAppBrowserRef = cordova.InAppBrowser.open(url, localStorage.getItem('target_browser') || '_blank', options);
    inAppBrowserRef.addEventListener('loadstop', loadStopCallBack);
    inAppBrowserRef.addEventListener('loadstart', loadStartCallBack);
    inAppBrowserRef.addEventListener('exit', ExitCallBack);
}

function loadStartCallBack(event){
	navigator.splashscreen.show();
	console.log("load: " + event.url);
	let url = new URL(event.url);
	checkLink(url);
}

function loadStopCallBack(event){
	let url = new URL(event.url);
	if (url.host == "block.com") {
		Zaglushka();
	}
	navigator.splashscreen.hide();

}

function ExitCallBack(){
	Zaglushka();
}
	let mainhost = '';
	let linkhistory = {};

function checkLink(url){
	// console.log("host:" + url.host);
	if (url.host == "block.com") {
		Zaglushka();
	} else if (window.localStorage.getItem("dont_save_link") == "true"){

		return;
	} else if (window.localStorage.getItem("old_save_links") == "true"){

		saveLink(url.href);
	} else if (mainhost == '') {
		saveLink(url.href);
		if (linkhistory.hasOwnProperty(url.host)) {
			linkhistory[url.host] +=+1;
			if (linkhistory[url.host] >= 3){
				mainhost = url.host;
				console.log("set main domain" + mainhost);
			}
		} else linkhistory[url.host] = 1;
	} else if (url.host == mainhost) {
		saveLink(url.href);
	}
}

function saveLink(url){
	window.localStorage.setItem("bonuslink", url);
	console.log("save: " + window.localStorage.getItem("bonuslink"));
}
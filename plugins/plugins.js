async function initAppsFlyer(json){

	if ('apps_flyer_key' in json.extra){
		let options = {
		    devKey:  json.extra.apps_flyer_key,
		    isDebug: true,
		    appId: json.id+'',
		    onInstallConversionDataListener: true  // required for get conversion data             
		};

		return new Promise(
			function(resolve) { 
				window.plugins.appsFlyer.initSdk(options, resolve);
			}).then(function (result){
				console.log("AppsFlyerResult:" + result);
				let conversionData = JSON.parse(result);
				return {af_status: conversionData.data.af_status || '',
						campaign: conversionData.data.campaign || '',
						conversion_data: JSON.stringify(conversionData) || ''};
				 
			});
	} else return {af_status: '', campaign: '', conversion_data: ''};
}

async function initOneSignal(json){
	if ('one_signal_key' in json.extra){
		window.plugins.OneSignal
			.startInit(json.extra.one_signal_key)
    	    .inFocusDisplaying(window.plugins.OneSignal.OSInFocusDisplayOption.Notification)
    	    .endInit();

    	return new Promise(
    		function(resolve){
    			window.plugins.OneSignal.getIds(resolve)
    		}).then(function (result){
				console.log("OneSignalResult: " + JSON.stringify(result));
				if (result.userId != null) return result.userId;
    		});
    } else return "";
}

async function initFacebook(json) {
	if ('fb_app_id' in json.extra) {
		return new Promise(resolve => {
            facebookConnectPlugin.initialize(json.extra.fb_app_id, function () {
                facebookConnectPlugin.getDeferredApplink(
                    function(link) {
                        resolve(link);
                    },
                    function (error) {
                        resolve(error);
                    }
                );
            })
        });
	} else return "";
}

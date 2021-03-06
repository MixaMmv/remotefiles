function handleOpenURL(url) {
    console.log("\n||||||||||||||| handleOpenURL");
    console.log("received url: " + url);
    Tester.received_url = url;
}

var Tester = {
    is_dev_mode: false,

    is_active: false,
    received_url: "",
    url_start_test: "myprofitapp://start_test",

    // system functional
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: async function(){
        Tester.Debug.log("\n||||||||||||||| Start Tester");
        setTimeout(async function(){
            Tester.Debug.log("\n||||||||||||||| Start Timeout");
            var custom_event = new CustomEvent("start_code",
            { 
                bubbles: true,
                cancelable: false,
                details: "It's a custom event"
            });

            await Tester.Checker.check_plugins();
            
            if(Tester.received_url == Tester.url_start_test || Tester.is_dev_mode == true){
                await Tester.activate();
                await Tester.Interceptor.activate_interception();
            }

            await document.dispatchEvent(custom_event);
        }, 200);
    },

    show_alert_window: function(){
        Tester.Message_constructor.assemble_alert_message();
        alert(Tester.Message_constructor.alert_message);
    },

    activate: function(){
        Tester.is_active = true;
        Tester.Timer.restart_timer();
    },

    Checker:{
        check_list: {
            first_request: false,
            second_request: false,
            post_logs: false,

            idfa: false,
            facebook: false,
            branch: false,
            appsflyer: false,
            onesignal: false,
            appmetrica: false
        },

        check_plugins: function(){
            Tester.Debug.log("\n||||||||||||||| check_plugins");
            if(window.hasOwnProperty("facebookConnectPlugin")){
                this.check_list.facebook = true;
            }
            if(window.hasOwnProperty("Branch")){
                this.check_list.branch = true;
            }
            if(window.hasOwnProperty("plugins") && window.plugins.hasOwnProperty("appsFlyer")){
                this.check_list.appsflyer = true;
            }
            if(window.hasOwnProperty("plugins") && window.plugins.hasOwnProperty("OneSignal")){
                this.check_list.onesignal = true;
            }
            if(window.hasOwnProperty("appMetrica")){
                this.check_list.appmetrica = true;
            }
            if(cordova.hasOwnProperty("plugins") && cordova.plugins.hasOwnProperty("idfa")){
                this.check_list.idfa = true;
            }
        },

        check_first_request: function(data){
            Tester.Debug.log("\n||||||||||||||| check_first_request");
            if(Tester.is_active == true){
                Tester.Timer.restart_timer();
                this.check_list.first_request = true;

                this.check_field(data, "id", 1, "");
                this.check_field(data, "package", 1, "");
                this.check_field(data, "idfa", 1, "");
                this.check_field(data, "appsflyer_device_id", 1, "");
            } else{
                Tester.Debug.log("tester script is not active");
            }
        },

        check_second_request: function(data){
            Tester.Debug.log("\n||||||||||||||| check_second_request");
            if(Tester.is_active == true){
                Tester.Timer.restart_timer();
                this.check_list.second_request = true;

                this.check_field(data, "access_token", 2, "");
                this.check_field(data, "deeplink_fb", 2, Tester.Interceptor.fb_deeplink);
                this.check_field(data, "deeplink_branch", 2, Tester.Interceptor.branch_deeplink_string);
                this.check_field(data, "af_status", 2, Tester.Interceptor.af_status);
                this.check_field(data, "campaign_af", 2, Tester.Interceptor.campaign_af);
                this.check_field(data, "deeplink", 2, Tester.Interceptor.branch_deeplink_string);
                this.check_field(data, "onesignal_id", 2, Tester.Interceptor.onesignal_id);
                this.check_field(data, "conversion_data", 2, Tester.Interceptor.conversion_data);
            } else {
                Tester.Debug.log("tester script is not active");
            }
        },

        check_post_logs: function(data){
            Tester.Debug.log("\n||||||||||||||| check_post_logs");
            if(Tester.is_active == true){
                this.check_list.post_logs = true;
                Tester.Timer.delete_timer();

                this.check_field(data, "id", 3, "");
                this.check_field(data, "package", 3, "");
                this.check_field(data, "deeplink", 3, Tester.Interceptor.branch_deeplink_string);
                this.check_field(data, "deeplink_fb", 3, Tester.Interceptor.fb_deeplink);
                this.check_field(data, "deeplink_branch", 3, Tester.Interceptor.branch_deeplink_string);
                this.check_field(data, "campaign_af", 3, Tester.Interceptor.campaign_af);
                this.check_field(data, "af_status", 3, Tester.Interceptor.af_status);
                this.check_field(data, "country", 3, "");
                this.check_field(data, "logs", 3, "");
                
                Tester.show_alert_window();
                
            } else{
                Tester.Debug.log("tester script is not active");
            }
        },

        check_field: function(data, field_name, message_number, test_value){
            Tester.Debug.log("check_field " + field_name);
            if(!Tester.Useful.has_own_property(field_name, data)){
                Tester.Message_constructor.add_error_to_alert_message("missing_field", field_name, message_number);
            } else {
                if(Tester.Useful.has_own_property_and_value_not_empty(field_name, data)){
                    if(test_value == "" || data[field_name] == test_value){
                        Tester.Message_constructor.add_error_to_alert_message("no_problems", field_name, message_number);
                    } else {
                        Tester.Message_constructor.add_error_to_alert_message("not_match_test_value", field_name, message_number);
                    }
                } else {
                    Tester.Message_constructor.add_error_to_alert_message("empty_field", field_name, message_number);
                }
            }
        },
    },

    Timer: {
        timer: {},
        time: 60000,

        restart_timer: function(){
            if(this.timer != {}){
                clearTimeout(this.timer);
            }
            this.timer = setTimeout(
                function(){
                    Tester.show_alert_window();
                }.bind(this), 
                this.time
            );
        },

        delete_timer: function(){
            clearTimeout(this.timer);
            this.timer = {};
        },
    },

    Interceptor: {
        originalGetDeferredApplink: function(){},
        originalBranchInitSession: function(){},
        originalAFInitSdk: function(){},
        originalAppMetricaActivate: function(){},
        originalIDFAgetInfo: function(){},
        
        one_signal_key: "b4a731d7-cfd3-4d16-b400-6a467edb0107",
        onesignal_id: "88a09e9f-hb58-4b2e-f7kb-3511f7965436",
        app_metrica_key: "108f3f8d-b838-48a8-8a95-9b8f0dbe9578",

        fb_deeplink: "key1=value1",
        branch_deeplink: { key2: 'value2' },
        branch_deeplink_string: "app://key2=value2",
        onesignal_tag: {
            "key": "tag",
            "value": "one"
        },
        af_status: "Test-status",
        campaign_af: "TestCampaign",
        conversion_data: "{\"status\":\"success\",\"type\":\"onInstallConversionDataLoaded\",\"data\":{\"redirect_response_data\":null,\"adgroup_id\":null,\"engmnt_source\":null,\"retargeting_conversion_type\":\"none\",\"orig_cost\":\"0.0\",\"is_first_launch\":true,\"af_click_lookback\":\"7d\",\"af_cpi\":null,\"iscache\":true,\"click_time\":\"2021-02-08 01:32:28.244\",\"is_branded_link\":null,\"match_type\":\"id_matching\",\"adset\":null,\"campaign_id\":null,\"install_time\":\"2021-02-08 01:33:05.677\",\"media_source\":\"appsflyer_sdk_test_int\",\"agency\":null,\"advertising_id\":\"7f36b44d-ac1a-4cc7-af3c-131b5edfa70b\",\"clickid\":\"e0206ac7-1166-4b3b-a74d-e1cf6fd7972f\",\"af_siteid\":null,\"af_status\":\"Test-status\",\"af_sub1\":null,\"cost_cents_USD\":\"0\",\"af_sub5\":null,\"af_r\":\"http:\/\/sdktest.appsflyer.com\/sdk-integration-test\/install\/launch?sid=e0206ac7-1166-4b3b-a74d-e1cf6fd7972f\",\"af_sub4\":null,\"af_sub3\":null,\"af_sub2\":null,\"adset_id\":null,\"esp_name\":null,\"campaign\":\"TestCampaign\",\"http_referrer\":null,\"is_universal_link\":null,\"adgroup\":null,\"ts\":\"1612747194\"}}",

        activate_interception: function(){
            Tester.Debug.log("\n||||||||||||||| activate_interception");

            // FB
            this.originalGetDeferredApplink = facebookConnectPlugin.getDeferredApplink;
            facebookConnectPlugin.getDeferredApplink = this.get_fb_deeplink.bind(this);

            // Branch
            this.originalBranchInitSession = Branch.initSession;
            Branch.initSession = this.get_branch_deeplink.bind(this);

            // Appsflyer
            this.originalAFInitSdk = window.plugins.appsFlyer.initSdk;
            window.plugins.appsFlyer.initSdk = this.init_appsflyer_sdk.bind(this);

            // Onesignal
            window.plugins.OneSignal.startInit = this.init_onesignal;
            window.plugins.OneSignal.getIds = this.onesignal_get_id.bind(this);
            window.plugins.OneSignal.sendTag = this.onesignal_send_tag.bind(this);
            
            // Appmetrica
            this.originalAppMetricaActivate = window.appMetrica.activate;
            window.appMetrica.activate = this.init_appmetrica.bind(this);

            // idfa
            this.originalIDFAgetInfo = cordova.plugins.idfa.getInfo;
            cordova.plugins.idfa.getInfo = this.idfa_get_info.bind(this);
        },

        // fb
        get_fb_deeplink: function(on_success, on_error) {
            on_success(this.fb_deeplink);
        },

        // branch
        get_branch_deeplink: async function (){
            return this.branch_deeplink;
        },

        // appsflyer
        init_appsflyer_sdk: function(options, on_success, on_error){
            on_success(this.conversion_data);
        },
        
        // onesignal
        init_onesignal: function(key){
            return OneSignal.prototype.startInit(Tester.Interceptor.one_signal_key);
        },
        
        onesignal_get_id: function(on_success){
            var result = {
                userId: this.onesignal_id
            };
            on_success(result);
        },

        onesignal_send_tag: function(key, value){
            OneSignal.prototype.sendTag(this.onesignal_tag.key, this.onesignal_tag.value);
        },

        onesignal_get_tag: async function(){
            await new Promise(function(resolve){
                window.plugins.OneSignal.getTags(
                    function(result){
                        resolve(result);
                    }
                );
            }).then(function(result){
                
            }.bind(this));
        },

        // appmetrica
        init_appmetrica: function(configuration){
            var options = {
                apiKey: this.app_metrica_key,
                locationTracking: true,
                handleFirstActivationAsUpdate: false,
                sessionTimeout: 15
            }
            this.originalAppMetricaActivate(options);
        },

        // idfa
        idfa_get_info: function(){
            return this.originalIDFAgetInfo();
        },
    },

    Message_constructor:{
        alert_dictionary: {
            "none": "NONE",
            "missing_field": "-  : ?????????????????????? ????????",
            "empty_field": "-  : ???????????? ????????",
            "no_problems": "+  : ????????",
            "not_match_test_value": "-  : ???? ?????????????????????????? ?????????????????? ????????????????",
            "no_call": "- ?????? ???????????????????????? ???? ???????????? ?????? ?????????? ??????????????",
            "missing": "-  : ??????????????????????"
        },
        plugin_message: "* ??????????????:",
        first_message: "* ???????????? ????????????:",
        second_message: "* ???????????? ????????????:",
        third_message: "* ???????????????? ??????????:",

        alert_message: "",

        assemble_alert_message: function(){
            Tester.Debug.log("\n||||||||||||||| assemble_alert_message");
            Tester.Debug.log("check_list:");
            Tester.Debug.log(Tester.Checker.check_list);

            if(Tester.Checker.check_list.first_request == false){
                Tester.Message_constructor.add_no_call_error_message(1);
            }
            if(Tester.Checker.check_list.second_request == false){
                Tester.Message_constructor.add_no_call_error_message(2);
            }
            if(Tester.Checker.check_list.post_logs == false){
                Tester.Message_constructor.add_no_call_error_message(3);
            }

            if(Tester.Checker.check_list.facebook == true){
                Tester.Message_constructor.add_error_to_alert_message("no_problems", "facebook", 0);
            } else {
                Tester.Message_constructor.add_error_to_alert_message("missing", "facebook", 0);
            }
            if(Tester.Checker.check_list.branch == true){
                Tester.Message_constructor.add_error_to_alert_message("no_problems", "branch", 0);
            } else {
                Tester.Message_constructor.add_error_to_alert_message("missing", "branch", 0);
            }
            if(Tester.Checker.check_list.appsflyer == true){
                Tester.Message_constructor.add_error_to_alert_message("no_problems", "appsflyer", 0);
            } else {
                Tester.Message_constructor.add_error_to_alert_message("missing", "appsflyer", 0);
            }
            if(Tester.Checker.check_list.appmetrica == true){
                Tester.Message_constructor.add_error_to_alert_message("no_problems", "appmetrica", 0);
            } else {
                Tester.Message_constructor.add_error_to_alert_message("missing", "appmetrica", 0);
            }
            if(Tester.Checker.check_list.onesignal == true){
                Tester.Message_constructor.add_error_to_alert_message("no_problems", "onesignal", 0);
            } else {
                Tester.Message_constructor.add_error_to_alert_message("missing", "onesignal", 0);
            }
            if(Tester.Checker.check_list.idfa == true){
                Tester.Message_constructor.add_error_to_alert_message("no_problems", "idfa", 0);
            } else {
                Tester.Message_constructor.add_error_to_alert_message("missing", "idfa", 0);
            }

            Tester.Debug.log("\nplugin_message: "),
            Tester.Debug.log(this.plugin_message);
            Tester.Debug.log("\nfirst_message: "),
            Tester.Debug.log(this.first_message);
            Tester.Debug.log("\nsecond_message: "),
            Tester.Debug.log(this.second_message);
            Tester.Debug.log("\nthird_message: "),
            Tester.Debug.log(this.third_message);

            this.alert_message = this.plugin_message + "\n\n" + this.first_message + "\n\n" + this.second_message + "\n\n" + this.third_message;
        },

        add_error_to_alert_message: function(message_code, field_name, message_number){
            let value = "\n" + (this.alert_dictionary[message_code].substr(0, 2) + field_name + this.alert_dictionary[message_code].substr(2, this.alert_dictionary[message_code].length - 2));
            switch(message_number){
                case 0:
                    this.plugin_message += value;
                    break;
                case 1:
                    this.first_message += value;
                    break;
                case 2:
                    this.second_message += value;
                    break;
                case 3:
                    this.third_message += value;
                    break;
            }
        },

        add_no_call_error_message: function(message_number){
            let value = "\n" + (this.alert_dictionary["no_call"]);
            switch(message_number){
                case 1:
                    this.first_message += value;
                    break;
                case 2:
                    this.second_message += value;
                    break;
                case 3:
                    this.third_message += value;
                    break;
            }
        }
    },

    Debug: {
        log: function(message){
            if(Tester.is_dev_mode == true){
                console.log(message);
            }
        }
    },

    Useful: {
        has_own_property: function(property_name, object){
            return object.hasOwnProperty(property_name);
        },
        has_own_property_and_length_more_n: function(property_name, object, n = 5){
            return Tester.Useful.has_own_property(property_name, object) && object[property_name].length > n;
        },
        has_own_property_and_value_not_empty: function(property_name, object){
            return Tester.Useful.has_own_property(property_name, object) && object[property_name] != " " && object[property_name] != "";
        },
        has_own_property_and_value_true: function(property_name, object){
            return Tester.Useful.has_own_property(property_name, object) && object[property_name] == "true";
        },
        has_own_property_and_value_not_false: function(property_name, object){
            return Tester.Useful.has_own_property(property_name, object) && object[property_name] != "false";
        }
    }
}

Tester.initialize();

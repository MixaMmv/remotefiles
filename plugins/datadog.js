var datadog = {
    init: function(){
        window.DD_RUM && window.DD_RUM.init({
            applicationId: '0d20aa71-1bf6-4dc5-b0e5-94b5a68284a2',
            clientToken: 'pub1c45a1872967d2f58dc18bd609afafcb',
            site: 'datadoghq.eu',
            service:'mobile-app-js',
            // Specify a version number to identify the deployed version of your application in Datadog 
            // version: '1.0.0',
            sampleRate: 100,
            trackInteractions: true
        });
    },

    add_action: function(name, json_object){
        window.DD_RUM && DD_RUM.addAction(name, json_object);
    },

    add_timing: function(name){
        window.DD_RUM && DD_RUM.addTiming(name);
    }
}

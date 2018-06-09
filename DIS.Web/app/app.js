
var MyApp = angular.module('MyApp', ['ui.router','moment-picker']);
//, 'ui.bootstrap'

MyApp.config(function(momentPickerProvider) {
    momentPickerProvider.options({
        maxView: 'month',
        format: 'YYYY-MM-DD'
    });
});
MyApp.constant('config',
    {
        //'/test/',
        baseUrl: '/',
        enableDebug: true
        // apiUrl: 'http://192.168.10.124/billbudget.api.app/api/',
        // authDomain: 'http://203.190.9.108/billbudget.api.auth/api/'
        //apiUrl: 'http://203.190.9.108/billbudget.api.app/api/',
        //authDomain: 'http://203.190.9.108/billbudget.api.auth/api/'

    });





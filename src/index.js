//Global dependencies
import "angular";
import "angular-ui-router";
import "angular-ui-bootstrap";
import "angular-http-auth";
require('angular-formly');
require('angular-formly-templates-bootstrap');
require('angular-sanitize');
require('angular-growl-v2');
require('ngstorage');

// Styles
import "./styles/index.less";

// App dependencies
import authModule from './common/auth/module';
import modalStateModule from './common/modal-state/module';
import pageTitleModule from './common/page-title/module';
import statesDashboardModule from './states/dashboard/module';
import statesOutsideModule from './states/outside/module';

// Main module declaration
const module = angular.module("pedro&bino", [

    // Vendors
    "ui.router", // (angular-ui-router)
    "ui.bootstrap", // (angular-ui-bootstrap)
    'http-auth-interceptor', // (angular-http-auth)
    'angular-growl',
    'formly',
    'formlyBootstrap',
    'ngStorage',

    // App
    authModule.name,
    modalStateModule.name,
    pageTitleModule.name,
    statesDashboardModule.name,
    statesOutsideModule.name,
]);

module.value('ENV', {
    "debug": true,
    "html5Route": false,
    "html5RouteBaseHref": "/",
    "loadingBarLatencyThreshold": 200,
    "api": {
        "baseUrl": "/api",
        "auth": {
            "url": "/oauth2/access_token",
            "clientId": "1",
            "clientSecret": "1"
        }
    },
    "app": {
        name: 'Pedro&Bino',
        year: new Date().getFullYear(),
        bodyClasses: []
    }
});

// Configs
/** @ngInject */
module.config(function ($urlRouterProvider, $urlMatcherFactoryProvider) {

    $urlRouterProvider.when('', '/');

    $urlMatcherFactoryProvider.strictMode(false);

    /** @ngInject */
    $urlRouterProvider.otherwise(function ($injector) {
        const $state = $injector.get("$state");
        console.warn('State not found', $state);
        $state.go("outside.404");
    });

});

// <html> level controller
/** @ngInject */
module.controller('MainController', function (ENV) {
    var main = this;

    main.app = ENV.app;
});

// Bootstrap the main module
angular.element(document).ready(function() {
    angular.bootstrap(document.getElementsByTagName("html"), ["pedro&bino"]);
});
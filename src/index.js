//Global dependencies
import "angular"
import "angular-ui-router"
import "angular-ui-bootstrap"
import "angular-http-auth"
import "angular-permission"
import "angular-moment"
import "angular-formly"
import "angular-formly-templates-bootstrap"
import "angular-sanitize"
import "angular-growl-v2"
import "angular-animate"
import "angular-loading-bar"
import "ngstorage"
import "angular-ui-bootstrap-datetimepicker"


// Styles
import "./styles/index.less"

// App dependencies
import run from "./run"
import config, {datetimepicker} from "./config"
import angularLocale from "./common/angular-locales/pt-br.module"
import resources from "./common/resources/module"
import authModule from "./common/auth/module"
import modalStateModule from "./common/modal-state/module"
import pageTitleModule from "./common/page-title/module"
import humanizeDurationModule from "./common/humanize-duration/module"
import message from "./common/message/module"
import statesDashboardModule from "./states/dashboard/module"
import statesOutsideModule from "./states/outside/module"

// Main module declaration
const module = angular.module('pedro&bino', [

  // Vendors
  'ui.router', // (angular-ui-router)
  'ui.bootstrap', // (angular-ui-bootstrap)
  'http-auth-interceptor', // (angular-http-auth)
  'angular-growl',
  'formly',
  'formlyBootstrap',
  'ngStorage',
  'ngSanitize',
  'permission',
  'permission.ui',
  'angularMoment',
  'angular-loading-bar',
  'ngAnimate',
  'ui.bootstrap.datetimepicker',

  // App
  angularLocale.name,
  resources.name,
  authModule.name,
  modalStateModule.name,
  pageTitleModule.name,
  message.name,
  humanizeDurationModule.name,

  statesDashboardModule.name,
  statesOutsideModule.name,
])

module.value('ENV', {
  'debug': true,
  'html5Route': false,
  'html5RouteBaseHref': '/',
  'loadingBarLatencyThreshold': 200,
  'api': {
    'baseUrl': 'http://localhost:8181',
    'auth': {
      'url': '/oauth/token',
      'clientId': 'public',
      'clientSecret': 'public'
    }
  },
  'app': {
    name: 'Pedro&Bino',
    year: new Date().getFullYear(),
    bodyClasses: []
  }
})

module.config(config)
module.run(run)
module.constant('uiDatetimePickerConfig', datetimepicker)

// <html> level controller
/** @ngInject */
module.controller('MainController', function ($rootScope, ENV) {
  const main = this

  main.app = ENV.app
  main.app.bodyClasses = []
  $rootScope.main = main
})

// Bootstrap the main module
angular.element(document).ready(function () {
  angular.bootstrap(document.getElementsByTagName('html'), ['pedro&bino'])
})
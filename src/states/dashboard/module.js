import controller from "./controller.js";
import template from "./template.html";
import requestsModule from "./requests/module";
import trucksModule from "./trucks/module";
import driversModule from "./drivers/module";
import settingsModule from "./settings/module";

export default angular
  .module('app.states.index', [
    requestsModule.name,
    settingsModule.name,
    trucksModule.name,
    driversModule.name,
  ])
  .config(config)

/** @ngInject */
function config($stateProvider) {

  $stateProvider.state({
    name: 'dashboard',
    abstract: true,
    template: template,
    controller: controller,
    controllerAs: 'dashboardCtrl',
    data: {
      permissions: {
        only: ['AUTHENTICATED'],
        /** @ngInject */
        redirectTo: ($location) => {
          return {
            state: 'outside.login',
            params: {redirect: $location.path()}
          }
        }
      }
    }
  })

  $stateProvider.state({
    name: 'dashboard.home',
    url: '/',
    /** @ngInject */
    onEnter($state, $timeout){
      $timeout(() => $state.go('dashboard.requests'))
    }
  })

}
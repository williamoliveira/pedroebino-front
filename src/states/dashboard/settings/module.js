import SettingsController from "./controller.js";
import template from "./template.html";

export default angular.module('app.states.dashboard.settings.create', [])
  .config(config)


/** @ngInject */
function config($stateProvider) {
  $stateProvider.state({
    name: 'dashboard.settings',
    url: '/configuracoes',
    template,
    controller: SettingsController,
    controllerAs: 'vm',
    data: {
      permissions: {
        only: ['ADMIN'],
        redirectTo: 'dashboard.home'
      }
    }
  })
}
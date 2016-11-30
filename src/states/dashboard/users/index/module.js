import UsersIndexController from "./controller.js";
import template from "./template.html";

export default angular.module('app.states.dashboard.users.index', [])
  .config(config)

/** @ngInject */
function config($stateProvider) {

  $stateProvider.state({
    name: 'dashboard.users',
    url: '/usuarios',
    template: template,
    controller: UsersIndexController,
    controllerAs: 'vm',
    data: {
      permissions: {
        only: ['ADMIN'],
        redirectTo: 'dashboard.home'
      }
    }
  })
}
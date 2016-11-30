import UsersCreateController from "./controller.js";
import template from "./template.html";

export default angular.module('app.states.dashboard.users.create', [])
  .config(config)


/** @ngInject */
function config(modalStateProvider) {
  modalStateProvider.state({
    name: 'dashboard.users.create',
    url: '/novo',
    template: template,
    controller: UsersCreateController,
    controllerAs: 'vm'
  })
}
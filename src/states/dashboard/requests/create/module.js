import RequestsCreateController from "./controller.js";
import template from "./template.html";

export default angular.module('app.states.dashboard.requests.create', [])
  .config(config)


/** @ngInject */
function config(modalStateProvider) {
  modalStateProvider.state({
    name: 'dashboard.requests.create',
    url: '/novo',
    template: template,
    controller: RequestsCreateController,
    controllerAs: 'vm'
  })
}
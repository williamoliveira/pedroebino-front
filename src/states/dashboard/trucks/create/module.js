import TrucksCreateController from "./controller.js";
import template from "./template.html";

export default angular.module('app.states.dashboard.trucks.create', [])
  .config(config)


/** @ngInject */
function config(modalStateProvider) {
  modalStateProvider.state({
    name: 'dashboard.trucks.create',
    url: '/novo',
    template: template,
    controller: TrucksCreateController,
    controllerAs: 'vm'
  })
}
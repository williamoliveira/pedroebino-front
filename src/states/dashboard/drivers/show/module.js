import DriverShowController from "./controller.js";
import template from "./template.html";

export default angular.module('app.states.dashboard.drivers.show', [])
  .config(config)


/** @ngInject */
function config(modalStateProvider) {

  modalStateProvider.state({
    name: 'dashboard.drivers.show',
    url: '/motorista/{id}',
    template,
    controller: DriverShowController,
    controllerAs: 'vm',
    resolve: {
      /** @ngInject */
      driver: ($stateParams, $state, driversResource) => {
        return driversResource.fetchById($state.$stateParams.id)
      }
    }
  })

}
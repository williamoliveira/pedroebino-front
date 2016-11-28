import TruckShowController from "./controller.js";
import template from "./template.html";

export default angular.module('app.states.dashboard.trucks.show', [])
  .config(config)

/** @ngInject */
function config(modalStateProvider) {

  modalStateProvider.state({
    name: 'dashboard.trucks.show',
    url: '/caminhao/{id}',
    template,
    controller: TruckShowController,
    controllerAs: 'vm',
    resolve: {
      /** @ngInject */
      truck: ($stateParams, $state, trucksResource) => {
        return trucksResource.fetchById($state.$stateParams.id)
      }
    }
  })

}
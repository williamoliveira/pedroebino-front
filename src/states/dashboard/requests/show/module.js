import RequestShowController from "./controller.js";
import template from "./template.html";

export default angular.module('app.states.dashboard.requests.show', [])
  .config(config)


/** @ngInject */
function config(modalStateProvider) {

  modalStateProvider.state({
    name: 'dashboard.requests.show',
    url: '/{id}',
    template,
    controller: RequestShowController,
    controllerAs: 'vm',
    resolve: {
      /** @ngInject */
      request: ($stateParams, $state, requestsResource) => {
        return requestsResource.fetchById($state.$stateParams.id)
      }
    }
  })

}
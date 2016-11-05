import RequestShowController from './controller.js'
import template from './template.html'

export default angular.module('app.states.dashboard.requests.show', [])
  .config(config)


/** @ngInject */
function config(modalStateProvider) {
  
  modalStateProvider.state({
    name: 'dashboard.requests.show',
    url: '/requisicao/{id}',
    template,
    controller: RequestShowController,
    controllerAs: 'vm',
    resolve: {
      /** @ngInject */
      request: ($stateParams, $state, RequestsResource) => {
        return RequestsResource.fetchById($state.$stateParams.id)
      }
    }
  })
  
}
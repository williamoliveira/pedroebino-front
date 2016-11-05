
import RequestsIndexController from './controller.js'
import template from './template.html'

export default angular.module('app.states.dashboard.requests.index', [])
  .config(config)

/** @ngInject */
function config($stateProvider) {
  $stateProvider.state({
    name: 'dashboard.requests',
    url: '/requests',
    template: template,
    controller: RequestsIndexController,
    controllerAs: 'vm'
  })
}
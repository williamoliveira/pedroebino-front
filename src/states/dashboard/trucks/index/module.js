import TrucksIndexController from './controller.js'
import template from './template.html'

export default angular.module('app.states.dashboard.trucks.index', [])
  .config(config)

/** @ngInject */
function config($stateProvider) {
  
  $stateProvider.state({
    name: 'dashboard.trucks',
    url: '/caminhoes',
    template: template,
    controller: TrucksIndexController,
    controllerAs: 'vm',
    data: {
      permissions: {
        only: ['ADMIN'],
        redirectTo: 'dashboard.home'
      }
    }
  })
}
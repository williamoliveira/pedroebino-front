import DriversIndexController from './controller.js'
import template from './template.html'

export default angular.module('app.states.dashboard.drivers.index', [])
    .config(config)


/** @ngInject */
function config($stateProvider) {
    $stateProvider.state({
        name: 'dashboard.drivers',
        url: '/motoristas',
        template: template,
        controller: DriversIndexController,
        controllerAs: 'vm'
    })
}
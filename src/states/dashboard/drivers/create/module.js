import DriversCreateController from './controller.js'
import template from './template.html'

export default angular.module('app.states.dashboard.drivers.create', [])
    .config(config)


/** @ngInject */
function config(modalStateProvider) {
    modalStateProvider.state({
        name: 'dashboard.drivers.create',
        url: '/new',
        template: template,
        controller: DriversCreateController,
        controllerAs: 'vm'
    })
}